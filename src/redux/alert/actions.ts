// Enum of action types
export enum ActionTypes {
  ERROR = "ERROR",
  WARNING = "WARNING",
  SUCCESS = "SUCCESS",
  INFO = "INFO",
  CLOSE = "CLOSE",
}

// Action Interfaces
interface IErrorAction {
  type: ActionTypes.ERROR;
  payload: string;
}

interface IWarningAction {
  type: ActionTypes.WARNING;
  payload: string;
}

interface ISuccessAction {
  type: ActionTypes.SUCCESS;
  payload: string;
}
interface IInfoAction {
  type: ActionTypes.INFO;
  payload: string;
}
interface ICloseAction {
  type: ActionTypes.CLOSE;
  payload: "";
}

// Dispatch trigger functions

export const triggerError = (message: string) => {
  return {
    type: ActionTypes.ERROR,
    payload: message,
  };
};

export const triggerWarning = (message: string) => {
  return {
    type: ActionTypes.WARNING,
    payload: message,
  };
};

export const triggerSuccess = (message: string) => {
  return {
    type: ActionTypes.SUCCESS,
    payload: message,
  };
};

export const triggerInfo = (message: string) => {
  return {
    type: ActionTypes.INFO,
    payload: message,
  };
};
export const triggerClose = () => {
  return {
    type: ActionTypes.CLOSE,
  };
};

// Alert action Types used in reducer
export type AlertActionTypes =
  | IErrorAction
  | IWarningAction
  | ISuccessAction
  | IInfoAction
  | ICloseAction;
