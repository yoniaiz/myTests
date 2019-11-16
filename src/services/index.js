import axios from "axios";
import { requestUrls, generalConstants } from "../constants";
export const getImages = catagory => {
  const url = requestUrls.UNSPLASH;
  const params = {
    client_id: generalConstants.UNSPLASH_USER_ID,
    query: catagory
  };
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    params
  };
  return axios(url, requestOptions).then(response => {
    if (response.status === 200) {
      return response.data.results.map(image => {
        return { url: image.urls.full, alt: image.alt_description };
      });
    } else return response;
  });
};
