import React, { Fragment } from "react";
import { connect } from "react-redux";
import { firstAction } from "../../actions";
import UserCreate from "./UserCreate";
import LanguageContext from "../../contexts/LanguageContext";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "english"
    };
  }
  onLanguageChange = language => {
    this.setState({ language });
  };

  componentDidMount = () => {
    this.props.firstAction();
  };
  render() {
    return (
      <Fragment>
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { baseAction: state.base };
};

export default connect(
  mapStateToProps,
  { firstAction }
)(MainPage);
