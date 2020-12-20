import User from "./user/reducer";
import Alert from "./alert/reducer";
import Loading from "./loading/reducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  user: User,
  alert: Alert,
  loading: Loading,
});

export default allReducer;

export type AppState = ReturnType<typeof allReducer>;
