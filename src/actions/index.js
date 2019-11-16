import { generalConstants, timeConstants, uiConstants } from "../constants";
import { getImages } from "../services";
export const firstAction = () => {
  return {
    type: generalConstants.FIRTS_ACTION || "FIRST_ACTION"
  };
};

export const dateTimeSubmitAction = dateAndTime => {
  return {
    type: timeConstants.SUBMIT_TIME,
    time: dateAndTime.time,
    date: dateAndTime.date
  };
};

export const imagesSaveAction = images => {
  return dispatch => {
    debugger;
    getImages(images)
      .then(data => {
        if (data.status && data.status !== 200) dispatch(faliure(data.errors));
        else dispatch(succsess(data));
      })
      .catch(error => {
        dispatch(faliure(error));
      });
  };
  function succsess(images) {
    return {
      type: uiConstants.IMAGES_SAVE,
      images
    };
  }
  function faliure(error) {
    return {
      type: uiConstants.IMAGES_SAVE_FALIURE
    };
  }
};
