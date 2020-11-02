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
    default:
      return state;
  }
};

const triggerSignInUser = (token: string) => {
  //  Set token to local storage
  return { isAuthenticated: true };
};

const triggerSignOutUser = () => {
  console.log("Sign Out User !");
  return { isAuthenticated: false };
};

export default userReducer;