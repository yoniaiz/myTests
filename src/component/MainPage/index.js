import React, { Fragment } from "react";
import { connect } from "react-redux";
import MainContent from "./MainContent";
import MainSidebar from "./MainSidebar";
import MainFooter from "./MainFooter";
import { loremIpsum } from "lorem-ipsum";
import { imagesSaveAction } from "../../actions";
// require syntax
class MainPage extends React.Component {
  componentDidMount() {
    this.props.imagesSaveAction('food');
  }

  generateTitle = () => {
    return loremIpsum({
      count: 1, // Number of "words", "sentences", or "paragraphs"
      format: "plain", // "plain" or "html"
      //   paragraphLowerBound: 3, // Min. number of sentences per paragraph.
      //   paragraphUpperBound: 7, // Max. number of sentences per paragarph.
      random: Math.random, // A PRNG function
      sentenceLowerBound: 3, // Min. number of words per sentence.
      sentenceUpperBound: 8, // Max. number of words per sentence.
      units: "sentences" // paragraph(s), "sentence(s)", or "word(s)"
    });
  };

  generateArticle = () => {
    return loremIpsum({
      count: 4, // Number of "words", "sentences", or "paragraphs"
      format: "plain", // "plain" or "html"
      //   paragraphLowerBound: 3, // Min. number of sentences per paragraph.
      //   paragraphUpperBound: 7, // Max. number of sentences per paragarph.
      random: Math.random, // A PRNG function
      sentenceLowerBound: 8, // Min. number of words per sentence.
      sentenceUpperBound: 15, // Max. number of words per sentence.
      units: "sentences" // paragraph(s), "sentence(s)", or "word(s)"
    });
  };

  randomDate = (start = new Date(2012, 0, 1), end = new Date()) => {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = date.getDay();

    return day + " " + monthNames[monthIndex] + " " + year;
  };

  render() {
    return (
      <Fragment>
        <div className="container d-flex">
          <MainContent
            gTitle={this.generateTitle}
            gArticle={this.generateArticle}
            gDate={this.randomDate}
          />
          <MainSidebar
            title={this.generateTitle}
            subTitle={this.generateTitle}
            content={this.generateArticle}
            gDate={this.randomDate}
          />
        </div>
        <MainFooter />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ ui }) => {
  return { images: ui.images };
};

export default connect(mapStateToProps, { imagesSaveAction })(MainPage);
