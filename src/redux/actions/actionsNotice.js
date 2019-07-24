import axios from "axios";
import { SEARCH_NOTICES } from "../type/type";
export const searchNotices = (history, country, category) => async dispatch => {
  const respuesta = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3738c33c2e6b4b879cab343f1c1ef5e7`
  );
  dispatch({
    type: SEARCH_NOTICES,
    payload: respuesta.data
  });

  history.push("/notices");
};
