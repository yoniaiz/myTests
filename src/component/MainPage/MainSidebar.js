import React, { Fragment } from "react";
import { connect } from "react-redux";
class MainSidebar extends React.Component {
  render() {
    const { images } = this.props;
    if (images.length === 0) return null;

    const widgetPosts = [1, 2, 3].map(index => {
      return (
        <Fragment key={index}>
          <div className="widget-recent-post" >
            <h3 className="widget-recent-post-title">
              {this.props.subTitle()}
            </h3>
            <img
              src={images[index].url}
              alt={images[index].alt}
              className="widget-image"
            />
          </div>
        </Fragment>
      );
    });
    return (
      <aside className="sidebar">
        <div className="sidebar-widget">
          <h2 className="widget-title">Sidebar title</h2>
          <img
            src={images[Math.floor(Math.random() * images.length)].url}
            alt={'test'}
            className="widget-image"
          />
          <p className="widget-body">{this.props.content()}</p>
        </div>

        <div className="sidebar-widget">
          <h2 className="widget-title">{this.props.title()}</h2>
          {widgetPosts}
        </div>
      </aside>
    );
  }
}

const mapStateToProps = ({ ui }) => {
  return { images: ui.images };
};

export default connect(mapStateToProps, {})(MainSidebar);
