import { useDispatch } from "react-redux";
import { triggerLoadingOff,triggerLoadingOn} from "./actions";

export function useTriggerLoadingOn() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerLoadingOn>) =>
    dispatch(triggerLoadingOn(...args));
}

export function useTriggerRefreshLogin() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerLoadingOff>) =>
    dispatch(triggerLoadingOff(...args));
}

