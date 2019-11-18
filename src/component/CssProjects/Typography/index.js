import React, { Fragment } from "react";
import "../../../assets/thypography.scss";
export default function(props) {
  return (
    <Fragment>
      <div className="container text-container">
        <div className="title">
          <h1>My Typography</h1>
        </div>
        <div className="text-content">
          <section>
            <h4 className="shadow-typo">Cool Shadow</h4>
          </section>

          <section>
            <h4 className="threedee-typo">3D Type</h4>
          </section>
        </div>
      </div>
    </Fragment>
  );
}
