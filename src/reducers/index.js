import { combineReducers } from "redux";
import baseReduces from "./baseReduces";
import dateReducer from "./dateReducer";
import uiReducer from "./uiReducer";
export default combineReducers({
  base: baseReduces,
  date: dateReducer,
  ui: uiReducer
});
