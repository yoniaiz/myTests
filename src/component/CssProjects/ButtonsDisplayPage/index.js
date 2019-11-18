import React from "react";
import {
  ThreeDButtons,
  AnimatedButtons,
  FacebookButtons,
  Toggle,
  GradientButtons
} from "../Buttons";

import "../../../assets/buttons.scss";
export const ButtonsDisplayPage = () => {
  return (
    <div className="container  button-container">
      <h1 className="">My Buttons</h1>
      <div className="content">
        <section className="buttons">
          <FacebookButtons dark={true} />

          <FacebookButtons />
        </section>

        <section className="buttons">
          <ThreeDButtons />

          <ThreeDButtons circle={true} />
        </section>

        <section className="buttons">
          <GradientButtons number={1} />
          <GradientButtons />
        </section>

        <section className="buttons">
          <AnimatedButtons number={1} />
          <AnimatedButtons />
        </section>

        <section className="buttons">
          <Toggle number={1} />

          <Toggle />
        </section>
      </div>
    </div>
  );
};
