import React from "react";

export const FacebookButtons = props => {
  if (props.dark) {
    return (
      <button
        type="button"
        name="button"
        class="facebook-style-btn facebook-style-dark"
      >
        Button Dark
      </button>
    );
  } else {
    return (
      <button
        type="button"
        name="button"
        class="facebook-style-btn facebook-style-light"
      >
        Button Light
      </button>
    );
  }
};
