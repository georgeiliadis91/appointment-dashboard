import User from "./user/reducer";
import Alert from "./alert/reducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  user: User,
  alert: Alert,
});
export default allReducer;

export type AppState = ReturnType<typeof allReducer>;
