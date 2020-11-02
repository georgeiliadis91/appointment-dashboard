import { ActionTypes, AlertActionTypes } from "./actions";

interface IAlertState {
  open: boolean;
  message: string;
  type: ActionTypes;
}

const initialState: IAlertState = {
  open: false,
  message: "",
  type: ActionTypes.CLOSE,
};

const alertReducer = (state = initialState, action: AlertActionTypes) => {
  switch (action.type) {
    case ActionTypes.ERROR: {
      return triggerErrorAlert(action.payload);
    }
    case ActionTypes.WARNING: {
      return triggerWarningAlert(action.payload);
    }
    case ActionTypes.SUCCESS: {
      return triggerSuccessAlert(action.payload);
    }
    case ActionTypes.INFO: {
      return triggerInfoAlert(action.payload);
    }
    case ActionTypes.CLOSE: {
      return triggerCloseAlert();
    }
    default:
      return state;
  }
};

// FUNCTIONS TO BE CALLED ON REDUCER.

const triggerErrorAlert = (message: string) => {
  return {
    open: true,
    message: message,
    type: ActionTypes.ERROR,
  };
};

const triggerWarningAlert = (message: string) => {
  return {
    open: true,
    message: message,
    type: ActionTypes.WARNING,
  };
};

const triggerSuccessAlert = (message: string) => {
  return {
    open: true,
    message: message,
    type: ActionTypes.SUCCESS,
  };
};
const triggerInfoAlert = (message: string) => {
  return {
    open: true,
    message: message,
    type: ActionTypes.INFO,
  };
};

const triggerCloseAlert = () => {
  return initialState;
};

export default alertReducer;
