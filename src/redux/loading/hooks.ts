import { useDispatch } from "react-redux";
import { triggerLoadingOff,triggerLoadingOn} from "./actions";

export function useTriggerLoadingOn() {
  const dispatch = useDispatch();
  return () =>
    dispatch(triggerLoadingOn());
}

export function useTriggerLoadingOff() {
  const dispatch = useDispatch();
  return () =>
    dispatch(triggerLoadingOff());
}

