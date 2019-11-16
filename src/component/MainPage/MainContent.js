import React from "react";
import { connect } from "react-redux";
import ArticleStracture from "./ArticleStracture";
class MainContent extends React.Component {
  render() {
    const { gTitle, gArticle, gDate, images } = this.props;
    if (images.length === 0) return null;
    const recentArticles = [1, 2, 3].map(index => {
      return (
        <article className="article-recent" key={index}>
          <div className="article-recent-main">
            <ArticleStracture
              main={true}
              title={gTitle()}
              info={gDate()}
              article={gArticle()}
            />
          </div>
          <div className="article-recent-secondary">
            <ArticleStracture
              info={gDate()}
              image={images[Math.floor(Math.random() * images.length)]}
            />
          </div>
        </article>
      );
    });
    return (
      <main role="main">
        <article className="article-feature">
          <ArticleStracture
            main={true}
            title={gTitle()}
            info={gDate()}
            article={gArticle()}
            image={images[Math.floor(Math.random() * images.length)]}
          />
        </article>
        {recentArticles}
      </main>
    );
  }
}

const mapStateToProps = ({ ui }) => {
  return { images: ui.images };
};

export default connect(mapStateToProps, {})(MainContent);
