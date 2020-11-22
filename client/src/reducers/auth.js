// will have alot more than the alert reducer

// registration

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
} from '../actions/types';

const initialState = {
  //the token is stored in local storage
  token: localStorage.getItem('token'),
  isAuthenticated: null, // set to null to begin with - once user logs in, set to true
  loading: true, // when we load a user, want to make sure the loading is done on the backend, once we get the response, set it to false so we know its working
  user: null, // once get the user data, it will be put in here
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case REGISTER_SUCCESS: // if register is a success, then we get the token back right away, set it in local storage
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false, // now we have the response, so loading is false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false, // now we have response so loading is false
      };
    default:
      return state;
  }
}
