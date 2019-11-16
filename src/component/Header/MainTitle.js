import React from "react";
import { Link } from "react-router-dom";
export const MainTitle = props => {
  return (
    <Link to="/" onClick={() => props.routeToMain(true)}>
      <div className="main-title">
        <h1>My Tests Site</h1>
        <p className="subtitle">
          This is a site where i do all my experiments.
        </p>
      </div>
    </Link>
  );
};
