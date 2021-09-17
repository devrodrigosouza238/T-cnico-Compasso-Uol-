import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { scienceSuccess, scienceFailure } from "./actions";
import { Science } from "./types";
import api from "../../../service/api";

export function* getScience() {
  try {
    const response: AxiosResponse<Science> = yield call(
      api.get,
      "topstories/v2/science.json?api-key=D7g3v8egAnEL7DXCnuntwioeRVBI57uQ"
    );
    yield put(scienceSuccess(response.data));
  } catch (err) {
    yield put(scienceFailure());
  }
  return true;
}
