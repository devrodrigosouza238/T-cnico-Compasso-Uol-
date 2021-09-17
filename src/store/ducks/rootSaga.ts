import { all, takeLatest } from "redux-saga/effects";

import { getScience } from "./science/sagas";
import { ScienceTypes } from "./science/types";

import { getTechnology } from "./technology/sagas";
import { TechnologyTypes } from "./technology/types";

export default function* rootSaga(): any {
  return yield all([
    takeLatest(ScienceTypes.SCIENCE_REQUEST, getScience),
    takeLatest(TechnologyTypes.TECHNOLOGY_REQUEST, getTechnology),
  ]);
}
