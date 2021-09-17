import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { technologySuccess, technologyFailure } from "./actions";
import { Technology } from "./types";
import api from "../../../service/api";

export function* getTechnology() {
  try {
    const response: AxiosResponse<Technology> = yield call(
      api.get,
      "topstories/v2/technology.json?api-key=D7g3v8egAnEL7DXCnuntwioeRVBI57uQ"
    );
    yield put(technologySuccess(response.data));
  } catch (err) {
    yield put(technologyFailure());
  }
  return true;
}
