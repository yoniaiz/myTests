import React from "react";
import { connect } from "react-redux";

import moment from "moment";
import { DatePicker, TimePicker } from "antd";

import {DateAndTime} from '../classes/DateAndTime.class'

import "antd/dist/antd.css";
import "../assets/mainStyle.scss";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: null,
      date: null
    };
  }

  onTimeChange = time => {
    this.setState({ time });
  };
  onDateChange = date => {
    this.setState({ date });
  };

  render() {
    const d = new DateAndTime();
    const c = new DateAndTime();
    d.setCurrentDate();
    c.setCurrentDate();
    console.log("c local ",c.localDateTime)
    console.log("c utc ",c.utcDateTime)
    c.setTime('08:55:00');
    console.log("c local ",c.localDateTime)
    console.log("c utc ",c.utcDateTime)
    d.setTimeZone('America/New_York')
    console.log("d local ",d.localDateTime)
    console.log("d utc ",d.utcDateTime)
    console.log(DateAndTime.compareDates(d,c));
    d.addMinutes(30)
    console.log("d local ",d.localDateTime)
    console.log("d utc ",d.utcDateTime)

    
    
    return (
      <div className="flex-container">
        <div className="flex-row">
          <DatePicker
            className="dateTimeInput"
            id="datePicker"
            value={this.state.date || moment()}
            onChange={this.onDateChange}
          />
          <TimePicker
            id="timePicker"
            className="dateTimeInput"
            value={this.state.time || moment()}
            onChange={this.onTimeChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { baseAction: state.base };
};

export default connect(
  mapStateToProps,
  {}
)(Clock);
