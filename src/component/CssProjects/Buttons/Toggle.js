import React from "react";

export const Toggle = props => {
  if (props.number === 1) {
    return (
      <label for="toggle1" class="toggle-1">
        <input type="checkbox" id="toggle1" class="toggle-1__input" />
        <span class="toggle-1__button"></span>
      </label>
    );
  } else {
    return (
      <label for="toggle2" class="toggle-2">
        <input type="checkbox" id="toggle2" class="toggle-2__input" />
        <span class="toggle-2__button">Click me to activate</span>
      </label>
    );
  }
};
