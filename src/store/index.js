import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer";
import rootSaga from "../saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)
);

export const sagaRun = () => {
  sagaMiddleware.run(rootSaga);
};
export default store;
