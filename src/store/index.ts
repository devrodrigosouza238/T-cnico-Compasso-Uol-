import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import { ScienceState } from "./ducks/science/types";
import { TechnologyState } from "./ducks/technology/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  science: ScienceState;
  technology: TechnologyState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
