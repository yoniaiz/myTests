import React from "react";

export const GradientButtons = props => {
  if (props.number === 1) {
    return (
      <button type="button" name="button" class="gradient-button-1">
        Gradient button 1
      </button>
    );
  } else {
    return (
      <button type="button" name="button" class="gradient-button-2">
        Gradient button 2
      </button>
    );
  }
};
