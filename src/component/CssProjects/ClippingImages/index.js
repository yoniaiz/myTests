import React, { Fragment } from "react";
import "../../../assets/thypography.scss";
export const ClippingImages = () => {
  return (
    <div className="container sandbox">
      <section>
        <img
          src="https://unsplash.it/300/300?image=1000"
          alt=""
          className="clip-image-1"
        />
      </section>

      <section>
        <img
          src="https://unsplash.it/300/300?image=1005"
          alt=""
          className="clip-image-2"
        />
      </section>

      <section>
        <img
          src="https://unsplash.it/300/300?image=1002"
          alt=""
          className="clip-image-3"
        />
      </section>

      <section>
        <img
          src="https://unsplash.it/300/300?image=1003"
          alt=""
          className="clip-image-4"
        />
      </section>
    </div>
  );
};
