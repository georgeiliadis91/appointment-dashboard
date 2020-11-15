import { isLocalStorageSupported, LocalStore } from "../../helpers/storage";
import { ActionTypes, AuthActionTypes } from "./actions";

interface IAlertState {
  isAuthenticated: boolean;
}

const initialState: IAlertState = { isAuthenticated: false };

const userReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case ActionTypes.SIGNIN: {
      return triggerSignInUser(action.payload);
    }
    case ActionTypes.SIGNOUT: {
      return triggerSignOutUser();
    }
    case ActionTypes.REFRESHLOGIN: {
      return triggerRefreshLogin();
    }
    default:
      return state;
  }
};

const triggerSignInUser = (token: string) => {
  //  Set token to local storage
  if(isLocalStorageSupported){
    LocalStore.set("token",token)
  }
  return { isAuthenticated: true };
};

const triggerRefreshLogin = () => {
  return { isAuthenticated: true };
};

const triggerSignOutUser = () => {
  if(isLocalStorageSupported){
   LocalStore.clear("token")
  }
  return { isAuthenticated: false };
};

export default userReducer;
