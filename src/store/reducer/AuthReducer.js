import {LOGIN, LOGOUT, FETCH_DETAILS} from '../action/AuthAction';

const initialState = {
  token: null,
  users: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.token,
      };
    case LOGOUT:
      return {
        ...state,
        token: action.token,
      };
    case FETCH_DETAILS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
