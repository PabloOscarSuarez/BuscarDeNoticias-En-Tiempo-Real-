import { SEARCH_NOTICES, RESET } from "../type/type";

const initialState = {
  notices: {}
};
export const noticeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_NOTICES:
      return {
        ...state,
        notices: action.payload
      };
    case RESET:
      return {
        ...state,
        notices: {}
      };
    default:
      return state;
  }
};
