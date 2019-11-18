import React from "react";

export const AnimatedButtons = props => {
  if (props.number === 1) {
    return (
      <button type="button" name="button" class="animated-button-1">
        Animated button 1
      </button>
    );
  } else {
    return (
      <button type="button" name="button" class="animated-button-2">
        Animated button 2
      </button>
    );
  }
};
