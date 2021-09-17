import { action } from "typesafe-actions";
import { TechnologyTypes, Technology } from "./types";

export const technologyRequest = () =>
  action(TechnologyTypes.TECHNOLOGY_REQUEST);

export const technologySuccess = (technology: Technology) =>
  action(TechnologyTypes.TECHNOLOGY_SUCCESS, technology);

export const technologyFailure = () =>
  action(TechnologyTypes.TECHNOLOGY_FAILURE);
