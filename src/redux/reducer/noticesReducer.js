import { SEARCH_NOTICES } from "../type/type";

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
    default:
      return state;
  }
};
