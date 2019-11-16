import { DateTime } from "luxon";
import IANAZone from "luxon/src/zones/IANAZone.js";

// private varibles so user cannot interupt menuly with variables only with functions.
var _localDateTime = new WeakMap();
var _utcDateTime = new WeakMap();
var _dateAndTime = new WeakMap();
var _timezone = new WeakMap();

export class DateAndTime {
  constructor() {
    _localDateTime.set(this, {
      date: null,
      time: null
    });

    _utcDateTime.set(this, {
      date: null,
      time: null
    });

    _dateAndTime.set(this, null);
    _timezone.set(this, null);

    this.dateFormat = "yyyy-MM-dd";
    this.timeFormat = DateTime.TIME_24_WITH_SECONDS;
  }

  get localDateTime() {
    return _localDateTime.get(this);
  }

  get utcDateTime() {
    return _utcDateTime.get(this);
  }

  get dateAndTime() {
    return _dateAndTime.get(this).dateAndTime;
  }

  get timezone() {
    return _timezone.get(this).timezone;
  }

  static compareDates(date1, date2) {
    if ((date1 && date2) instanceof DateAndTime) {
      return date1.dateAndTime > date2.dateAndTime;
    }
    return "invalid data";
  }
  static checkIfequals(date1, date2) {
    if ((date1 && date2) instanceof DateAndTime) {
      return date1.localDateTime === date2.localDateTime;
    }
    return "invalid data";
  }

  setDate(date = null) {
    //   if _timezone not updated yet then update it.
    this.setTimeZone();
    // if user added date then update else use local and add utc
    if (date) _localDateTime.set(this, { ..._localDateTime.get(this), date });
    else {
      const today = DateTime.local();
      _localDateTime.set(this, {
        ..._localDateTime.get(this),
        date: today.setLocale("en-Ca").toFormat(this.dateFormat)
      });
      const utcToday = today.toUTC();
      _utcDateTime.set(this, {
        ..._utcDateTime.get(this),
        date: utcToday.setLocale("en-Ca").toFormat(this.dateFormat)
      });
    }
    this.setDateAndTime();

    if (date) this.setUtc();
  }

  setTime(time = null) {
    //   if _timezone not updated yet then update it.
    this.setTimeZone();
    // if user added time then update else use local and add utc

    if (time) _localDateTime.set(this, { ..._localDateTime.get(this), time });
    else {
      const today = DateTime.local();
      _localDateTime.set(this, {
        ..._localDateTime.get(this),
        time: today.setLocale("en-Ca").toLocaleString(this.timeFormat)
      });

      const utcToday = today.toUTC();
      _utcDateTime.set(this, {
        ..._utcDateTime.get(this),
        time: utcToday.setLocale("en-Ca").toLocaleString(this.timeFormat)
      });
    }
    this.setDateAndTime();
    if (time) this.setUtc();
  }

  setDateAndTime() {
    //   if date and time are allready initialized update _dateAndTime field.
    if (_localDateTime.get(this).date && _localDateTime.get(this).time) {
      let fullDate = `${_localDateTime.get(this).date} ${
        _localDateTime.get(this).time
      }`;

      _dateAndTime.set(this, {
        dateAndTime: DateTime.fromFormat(fullDate, "yyyy-MM-dd hh:mm:ss").toISO(
          { includeOffset: false }
        )
      });
    } else {
      const today = DateTime.local();
      _dateAndTime.set(this, { dateAndTime: today.setLocale("en-Ca").toISO() });
    }
  }

  setTimeZone(timezone = "country") {
    //   if added valid time zone update else try to set _timezone to local time
    if (IANAZone.isValidZone(timezone)) {
      if (_timezone.get(this).timezone !== timezone)
        this.changedTimeZone(timezone);
      _timezone.set(this, { timezone });
    } else if (!_timezone.get(this)) this.setCurrentTimeZone();
  }

  setCurrentTimeZone(timezone = this.UTC) {
    //  check if there is no timezone set yet and if current time zone is not utc
    const local = DateTime.local();
    if (!_timezone.get(this) && local.offset !== 0) {
      _timezone.set(this, { timezone: local.zoneName });
    } else {
      // set to defualt
      _timezone.set(this, { timezone });
    }
  }

  setUtc() {
    // get current _dateAndTime of instance and convert to utc
    let dateObj = DateTime.fromISO(_dateAndTime.get(this).dateAndTime, {
      zone: _timezone.get(this).timezone
    }).toUTC();

    // set the utc date time object for feature uses
    const localizedDate = dateObj.setLocale("en-Ca");
    _utcDateTime.set(this, {
      ..._utcDateTime.get(this),
      date: localizedDate.toFormat(this.dateFormat)
    });
    _utcDateTime.set(this, {
      ..._utcDateTime.get(this),
      time: localizedDate.toLocaleString(this.timeFormat)
    });
  }

  setAllDates() {
    if (_dateAndTime.get(this)) {
      if (!_utcDateTime.get(this).date || !_utcDateTime.get(this).time) {
        // if utc object is not set yes
        this.setUtc();
      }
    } else {
      if (!_localDateTime.get(this).date && !_localDateTime.get(this).time) {
        //   if date and time not seted set them now.
        this.setTime();
        this.setDate();
        this.setDateAndTime();

        // set new utc date and time
        _utcDateTime.set(this, { date: undefined });
        _utcDateTime.set(this, { time: undefined });
        this.setAllDates();
      }
    }
  }

  setCurrentDate() {
    //   initialize all objects to current date and time
    this.setDate();
    this.setTime();
    this.setDateAndTime();
    this.setAllDates();
  }

  setMenulyData(date, time) {
    //   initialize all objects to current date and time
    this.setDate(date);
    this.setTime(time);
    this.setDateAndTime();
    this.setAllDates();
  }

  getJsDateObj() {
    console.log(DateTime.fromISO(_dateAndTime).toJSDate());
  }
  getObj() {
    return DateTime.fromISO(_dateAndTime).toObject();
  }

  getOutputFromObject(object) {
    console.log(DateTime.fromObject(object).toISO());
  }

  addMinutes(minutes = 0) {
    const newDate = DateTime.fromISO(_dateAndTime.get(this).dateAndTime).plus({
      minutes
    });
    // update all object with new time
    this.updateNewDateAndTime(newDate);
    // update utc
    this.setUtc();
  }

  changedTimeZone(newTimezone) {
    let dateObj = DateTime.fromISO(_dateAndTime.get(this).dateAndTime, {
      zone: _timezone.get(this).timezone
    }).setZone(newTimezone);
    // update all object with new time
    this.updateNewDateAndTime(dateObj);
  }

  updateNewDateAndTime(newTimeObj) {
    this.setDate(newTimeObj.setLocale("en-Ca").toFormat(this.dateFormat));
    this.setTime(newTimeObj.setLocale("en-Ca").toLocaleString(this.timeFormat));
  }
}
