import { Reducer } from "redux";
import { Technology, TechnologyState, TechnologyTypes } from "./types";

const INITIAL_STATE: TechnologyState = {
  data: {} as Technology,
  loading: false,
  error: false,
};

const reducer: Reducer<TechnologyState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TechnologyTypes.TECHNOLOGY_REQUEST:
      return { ...state, loading: true };
    case TechnologyTypes.TECHNOLOGY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case TechnologyTypes.TECHNOLOGY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {} as Technology,
      };
    default:
      return state;
  }
};

export default reducer;
