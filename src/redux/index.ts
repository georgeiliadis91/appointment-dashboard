import { createStore } from "redux";
import allReducer from "./reducers";

// init Redux store
export const globalStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
