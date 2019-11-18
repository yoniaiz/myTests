import React from "react";

export const ThreeDButtons = props => {
  if (props.circle) {
    return (
      <button type="button" name="button" class="btn-3d-2">
        Circle!
      </button>
    );
  } else {
    return (
      <button type="button" name="button" class="btn-3d-1">
        3D Button 1
      </button>
    );
  }
};
