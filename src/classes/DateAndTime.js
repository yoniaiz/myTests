import { DateTime } from "luxon";
import IANAZone from "luxon/src/zones/IANAZone.js";

export class DateAndTime {
  constructor() {
    this.localDateTime = {
      date: null,
      time: null
    };
    this.utcDateTime = {
      date: null,
      time: null
    };
    this.dateAndTime = null;
    this.timezone = null;
    this.dateFormat = "yyyy-MM-dd";

    this.timeFormat = DateTime.TIME_24_SIMPLE;
    this.fullFormat = this.dateFormat + " " + this.timeFormat;
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

  static compareTime(time1, time2) {
    if (time2.split(":")[0].length == 1) {
      time2 = `0${time2}`;
    }
    return (
      Date.parse(`01/01/2011 ${time1}:45`) <
      Date.parse(`01/01/2011 ${time2}:45`)
    );
  }

  static convertToAmPm(localTime) {
    if (localTime) {
      const time = localTime.split(":");
      let hours = time[0];
      let minutes = time[1];
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      return `${hours}:${minutes} ${ampm}`;
    }
    return "";
  }

  static convertTo24hours(time, AMPM) {
    let hours = Number(time.match(/^(\d+)/)[1]);
    let minutes = Number(time.match(/:(\d+)/)[1]);
    if (AMPM === "PM" && hours < 12) hours = hours + 12;
    if (AMPM === "AM" && hours === 12) hours = hours - 12;
    let sHours = hours.toString();
    let sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;
    return sHours + ":" + sMinutes;
  }

  setDate(date = null) {
    //   if _timezone not updated yet then update it.
    if (!this.timezone) this.setTimeZone();
    // if user added date then update else use local and add utc
    if (date) this.localDateTime.date = date;
    else {
      const today = DateTime.local();
      this.localDateTime.date = today
        .setLocale("en-Ca")
        .toFormat(this.dateFormat);

      const utcToday = today.toUTC();
      this.utcDateTime.date = utcToday
        .setLocale("en-Ca")
        .toFormat(this.dateFormat);
    }
    this.setDateAndTime();

    if (date) this.setUtc();
  }

  setTime(time = null) {
    //   if _timezone not updated yet then update it.
    if (!this.timezone) this.setTimeZone();
    // if user added time then update else use local and add utc

    if (time) this.localDateTime.time = time;
    else {
      const today = DateTime.local();
      this.localDateTime.time = today
        .setLocale("en-Ca")
        .toLocaleString(this.timeFormat);

      const utcToday = today.toUTC();
      this.utcDateTime.time = utcToday
        .setLocale("en-Ca")
        .toLocaleString(this.timeFormat);
    }
    this.setDateAndTime();
    if (time) this.setUtc();
  }

  setDateAndTime() {
    //   if date and time are allready initialized update _dateAndTime field.
    if (this.localDateTime.date && this.localDateTime.time) {
      let fullDate = `${this.localDateTime.date} ${this.localDateTime.time}`;

      this.dateAndTime = DateTime.fromFormat(
        fullDate,
        "yyyy-MM-dd hh:mm"
      ).toISO({
        includeOffset: false
      });
    } else {
      const today = DateTime.local();
      this.dateAndTime = today.setLocale("en-Ca").toISO();
    }
  }

  setTimeZone(timezone = null) {
    //   if added valid time zone update else try to set _timezone to local time
    let fieldValid = IANAZone.isValidZone(timezone);
    if (fieldValid && this.timezone !== timezone) {
      this.changedTimeZone(timezone);
    } else if (!this.timezone) this.setCurrentTimeZone();
  }

  setCurrentTimeZone(timezone = this.UTC) {
    //  check if there is no timezone set yet and if current time zone is not utc
    const local = DateTime.local();
    if (!this.timezone && local.offset !== 0) {
      this.timezone = local.zoneName;
    } else {
      // set to defualt
      this.timezone = timezone;
    }
  }

  setUtc() {
    // get current _dateAndTime of instance and convert to utc
    let dateObj = DateTime.fromISO(this.dateAndTime, {
      zone: this.timezone
    }).toUTC();
    // set the utc date time object for feature uses
    const localizedDate = dateObj.setLocale("en-Ca");
    this.utcDateTime.date = localizedDate.toFormat(this.dateFormat);
    this.utcDateTime.time = localizedDate.toLocaleString(this.timeFormat);
  }

  setAllDates() {
    if (this.dateAndTime) {
      if (!this.utcDateTime.date || !this.utcDateTime.time) {
        // if utc object is not set yes
        this.setUtc();
      }
    } else {
      if (!this.localDateTime.date && !this.localDateTime.time) {
        //   if date and time not seted set them now.
        this.setTime();
        this.setDate();
        this.setDateAndTime();

        // set new utc date and time
        this.utcDateTime.date = undefined;
        this.utcDateTime.time = undefined;
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

  setMenulyData(timezone = null, date = null, time = null) {
    //   initialize all objects to current date and time

    this.setTimeZone(timezone);
    const menulyTimeSet = DateTime.fromISO(`${date}T${time}`, {
      zone: this.timezone
    });

    this.setDate(menulyTimeSet.setLocale("en-Ca").toFormat(this.dateFormat));
    this.setTime(
      menulyTimeSet.setLocale("en-Ca").toLocaleString(this.timeFormat)
    );
    this.setDateAndTime();
    this.setAllDates();
  }

  getJsDateObj() {
    console.log(DateTime.fromISO(this.dateAndTime).toJSDate());
  }

  getObj() {
    return DateTime.fromISO(this.dateAndTime).toObject();
  }

  getOutputFromObject(object) {
    console.log(DateTime.fromObject(object).toISO());
  }

  addMinutes(minutes = 0) {
    const newDate = DateTime.fromISO(this.dateAndTime.plus({ minutes }));
    // update all object with new time
    this.updateNewDateAndTime(newDate);
    // update utc
    this.setUtc();
  }

  changedTimeZone(newTimezone) {
    let dateObj = DateTime.fromISO(this.dateAndTime, {
      zone: this.timezone
    }).setZone(newTimezone);

    this.timezone = newTimezone;
    // update all object with new time
    this.updateNewDateAndTime(dateObj);
  }

  updateNewDateAndTime(newTimeObj) {
    this.setDate(newTimeObj.setLocale("en-Ca").toFormat(this.dateFormat));
    this.setTime(newTimeObj.setLocale("en-Ca").toLocaleString(this.timeFormat));
  }
}
