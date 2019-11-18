import React, { Fragment } from "react";
import '../../../assets/thypography.scss'
export const ClippingImages = () => {
  return (
    <Fragment>
      <div className="container sandbox">
        <h2>
          Sandbox <small>This is where you play</small>
        </h2>
        <div className="content">
          <p>
            <strong>Instructions:</strong> Use CSS3 to "clip" the following
            images with different shapes!
          </p>

          <section>
            <h4>Example #1</h4>

            <img
              src="https://unsplash.it/300/300?image=1000"
              alt=""
              className="clip-image-1"
            />
          </section>

          <section>
            <h4>Example #2</h4>

            <img
              src="https://unsplash.it/300/300?image=1005"
              alt=""
              className="clip-image-2"
            />
          </section>

          <section>
            <h4>Example #3</h4>

            <img
              src="https://unsplash.it/300/300?image=1002"
              alt=""
              className="clip-image-3"
            />
          </section>

          <section>
            <h4>Example #4</h4>

            <img
              src="https://unsplash.it/300/300?image=1003"
              alt=""
              className="clip-image-4"
            />
          </section>
        </div>
      </div>
    </Fragment>
  );
};
