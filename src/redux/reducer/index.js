import { combineReducers } from "redux";
import { noticeReducer } from "./noticesReducer";
export default combineReducers({
  notices: noticeReducer
});
