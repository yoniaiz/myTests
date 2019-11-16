import { uiConstants } from "../constants";

const INITAL_STATE = {
  images: []
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case uiConstants.IMAGES_SAVE:
      return {
        ...state,
        images: action.images
      };
    case uiConstants.IMAGES_SAVE_FALIURE:
      return {
        ...state,
        images: [ ]
      };
    default:
      return state;
  }
};
