// Enum of action types
export enum ActionTypes {
    LOADINGON = "LOADINGON",
    LOADINGOFF = "LOADINGOFF",
 
  }
  
  // Loading Interfaces
  interface ILoadingOnAction {
    type: ActionTypes.LOADINGON;
  }
  
  interface ILoadingOffAction {
    type: ActionTypes.LOADINGOFF;
  }
  
  
  // dispatch functions
  export const triggerLoadingOn = () => {
    return {
      type: ActionTypes.LOADINGON,
    
    };
  };
  
  export const triggerLoadingOff = () => {
    return {
      type: ActionTypes.LOADINGOFF,
    };
  };
  

  
  // Loading action Types used in reducer
  export type LoadingActionTypes = ILoadingOnAction | ILoadingOffAction;
  