// Enum of action types
export enum ActionTypes {
  SIGNIN = "SIGNIN",
  SIGNOUT = "SIGNOUT",
  REFRESHLOGIN = "REFRESHLOGIN"
}

// Action Interfaces
interface ISignInAction {
  type: ActionTypes.SIGNIN;
  payload: string;
}

interface ISignOutAction {
  type: ActionTypes.SIGNOUT;
}
interface IRefreshLogingAction {
  type: ActionTypes.REFRESHLOGIN;
}

// dispatch functions
export const triggerSignIn = (token: string) => {
  return {
    type: ActionTypes.SIGNIN,
    payload: token,
  };
};

export const triggerSignOut = () => {
  return {
    type: ActionTypes.SIGNOUT,
  };
};

export const triggerRefreshLogin = () => {
  return {
    type: ActionTypes.REFRESHLOGIN,
  };
};

// Alert action Types used in reducer
export type AuthActionTypes = ISignInAction | ISignOutAction |IRefreshLogingAction;
