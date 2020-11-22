
import { LoadingActionTypes,ActionTypes } from "./actions";

interface ILoadingState {
    loading: boolean;
}

const initialState: ILoadingState = { loading: false };

const userReducer = (state = initialState, action: LoadingActionTypes) => {
  switch (action.type) {
    case ActionTypes.LOADINGON: {
      return { loading: true }
    }
    case ActionTypes.LOADINGOFF: {
      return { loading: false }
    }
 
    default:
      return state;
  }
};


export default userReducer;
