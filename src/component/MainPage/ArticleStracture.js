import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export default function(props) {
  const read = "Read More";
  if (props.main)
    return (
      <Fragment>
        <h2 className="article-title">{props.title}</h2>
        {props.image && (
          <Fragment>
          <img
            src={props.image.url}
            alt={props.image.alt}
            className="article-image"
          />
          <p className="article-info">{props.info}</p>
          </Fragment>
        )}
        <p className="article-body">{props.article}</p>
        <Link to="" className="read-more">
          {read}
        </Link>
      </Fragment>
    );
  else
    return (
      <Fragment>
        <img
          src={props.image.url}
          alt={props.image.alt}
          className="article-image"
        />
        <p className="article-info">{props.info}</p>
      </Fragment>
    );
}
