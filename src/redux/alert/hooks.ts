import { useDispatch } from "react-redux";
import {
  triggerClose,
  triggerError,
  triggerInfo,
  triggerSuccess,
  triggerWarning,
} from "./actions";

export function useTriggerWarning() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerWarning>) =>
    dispatch(triggerWarning(...args));
}

export function useTriggerSuccess() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerSuccess>) =>
    dispatch(triggerSuccess(...args));
}

export function useTriggerError() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerError>) =>
    dispatch(triggerError(...args));
}

export function useTriggerInfo() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerInfo>) =>
    dispatch(triggerInfo(...args));
}

export function useTriggerClose() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerClose>) =>
    dispatch(triggerClose(...args));
}
