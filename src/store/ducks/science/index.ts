import { Reducer } from "redux";
import { Science, ScienceState, ScienceTypes } from "./types";

const INITIAL_STATE: ScienceState = {
  data: {} as Science,
  loading: false,
  error: false,
};

const reducer: Reducer<ScienceState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ScienceTypes.SCIENCE_REQUEST:
      return { ...state, loading: true };
    case ScienceTypes.SCIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case ScienceTypes.SCIENCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {} as Science,
      };
    default:
      return state;
  }
};

export default reducer;
