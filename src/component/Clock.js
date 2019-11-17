import React from "react";
import { connect } from "react-redux";

import moment from "moment";
import { DatePicker, TimePicker, Button } from "antd";

import { DateAndTime } from "../classes/DateAndTime";

import { dateTimeSubmitAction } from "../actions";

import "antd/dist/antd.css";
import "../assets/mainStyle.scss";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateTime: null,
      time: null,
      date: null
    };
  }

  componentDidMount = () => {
    this.resetDateAndTime()
  };

  resetDateAndTime = () => {
    const dateTime = new DateAndTime();
    dateTime.setMenulyData(
      "America/New_York",
      "2019-11-19",
      "18:50:00"
    )
    this.setState({ date: dateTime.localDateTime.date });
    this.setState({ time: dateTime.localDateTime.time });
    this.setState({ dateTime });
  }

  onTimeChange = time => {
    if (time) {
      const dateTime = new DateAndTime();
      const userInput = time.format("HH:mm:ss");
      const currentDateAndTime = { ...this.state.dateTime.localDateTime };
      dateTime.setMenulyData(currentDateAndTime.date, userInput);
      if (DateAndTime.compareDates(dateTime, this.state.dateTime))
        this.setState({ dateTime, time });
      else {
        dateTime.setCurrentDate();
        this.setState({ time: dateTime.localDateTime.time });
      }
    } else {
      this.resetDateAndTime();
    }
  };
  onDateChange = date => {
    if (date) {
      const dateTime = new DateAndTime();
      const userInput = date.format("YYYY-MM-DD");
      const currentDateAndTime = { ...this.state.dateTime.localDateTime };
      dateTime.setMenulyData(userInput, currentDateAndTime.time);
      if (DateAndTime.compareDates(dateTime, this.state.dateTime))
        this.setState({ dateTime, date });
      else {
        dateTime.setCurrentDate();
        this.setState({ date: dateTime.localDateTime.date });
      }
    } else {
      this.resetDateAndTime();
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.dateTime)
      if (prevState.dateTime.localDateTime) {
        if (
          !DateAndTime.checkIfequals(prevState.dateTime, this.state.dateTime)
        ) {
          const dateAndTime = this.state.dateTime.localDateTime;
          this.props.dateTimeSubmitAction({
            date: dateAndTime.date,
            time: dateAndTime.time
          });
        }
      }
  };
  handleSubmit = () => {
    const dateAndTime = this.state.dateTime.localDateTime;
    this.props.dateTimeSubmitAction({
      date: dateAndTime.date,
      time: dateAndTime.time
    });
  };
  render() {
    return (
      <div className="flex-container">
        <div className="flex-row">
          <DatePicker
            className="dateTimeInput"
            id="datePicker"
            value={this.state.date ? moment(this.state.date) : moment()}
            onChange={this.onDateChange}
          />
          <TimePicker
            id="timePicker"
            className="dateTimeInput"
            value={
              this.state.time
                ? moment(moment(this.state.time, "hh:mm:ss"))
                : moment()
            }
            onChange={this.onTimeChange}
          />
          <br />
          <Button block onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({date}) => {
  return { dateResucer: date };
};

export default connect(
  mapStateToProps,
  { dateTimeSubmitAction }
)(Clock);
