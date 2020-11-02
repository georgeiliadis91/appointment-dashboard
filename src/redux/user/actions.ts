// Enum of action types
export enum ActionTypes {
  SIGNIN = "SIGNIN",
  SIGNOUT = "SIGNOUT",
}

// Action Interfaces
interface ISignInAction {
  type: ActionTypes.SIGNIN;
  payload: string;
}

interface ISignOutAction {
  type: ActionTypes.SIGNOUT;
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

// Alert action Types used in reducer
export type AuthActionTypes = ISignInAction | ISignOutAction;
