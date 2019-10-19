import React from "react";
import { connect } from "react-redux";
import { firstAction } from "../actions";

class MainPage extends React.Component {
  componentDidMount = () => {
    this.props.firstAction();
  };
  render() {
    return <h1>Hello</h1>;
  }
}

const mapStateToProps = state => {
  return { baseAction: state.base };
};

export default connect(
  mapStateToProps,
  { firstAction }
)(MainPage);
