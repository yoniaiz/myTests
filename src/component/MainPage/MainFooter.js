import React from "react";
import { connect } from "react-redux";
class MainFooter extends React.Component {
  render() {
    return (
      <footer>
        <p>
          <strong>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </strong>
        </p>
        <p>Copyright 2019</p>
      </footer>
    );
  }
}

const mapStateToProps = ({ date }) => {
  return { dateResucer: date };
};

export default connect(mapStateToProps, {})(MainFooter);
