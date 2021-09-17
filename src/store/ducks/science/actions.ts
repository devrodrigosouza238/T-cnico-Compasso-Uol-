import { action } from "typesafe-actions";
import { ScienceTypes, Science } from "./types";

export const scienceRequest = () => action(ScienceTypes.SCIENCE_REQUEST);

export const scienceSuccess = (science: Science) =>
  action(ScienceTypes.SCIENCE_SUCCESS, science);

export const scienceFailure = () => action(ScienceTypes.SCIENCE_FAILURE);
