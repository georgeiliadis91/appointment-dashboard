import { useDispatch } from "react-redux";
import { triggerSignIn, triggerSignOut, triggerRefreshLogin } from "./actions";

export function useTriggerSignIn() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerSignIn>) =>
    dispatch(triggerSignIn(...args));
}

export function useTriggerRefreshLogin() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerRefreshLogin>) =>
    dispatch(triggerRefreshLogin(...args));
}


export function useTriggerSignOut() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerSignOut>) =>
    dispatch(triggerSignOut(...args));
}
