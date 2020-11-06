import { useDispatch } from "react-redux";
import { triggerSignIn, triggerSignOut } from "./actions";

export function useTriggerSignIn() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerSignIn>) =>
    dispatch(triggerSignIn(...args));
}
export function useTriggerSignOut() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerSignOut>) =>
    dispatch(triggerSignOut(...args));
}
