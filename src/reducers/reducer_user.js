import { AUTH_ERROR } from '../actions';
import { SIGN_IN } from '../actions';
import { SIGN_UP } from '../actions';
import { LOG_OUT } from '../actions';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
  loggedIn: false,
  currentUser: null,
  error: null,
  message: null
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        loggedIn: true,
        currentUser: action.payload
      };

    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case SIGN_IN:
      return {
        ...state,
        loggedIn: true,
        currentUser: action.payload,
        message: action.message
      };

    case LOG_OUT:
      return {
        ...state,
        message: null,
        loggedIn: false,
        currentUser: {}
      };

    case REHYDRATE:
      return {
        ...state
      };

    default:
      return state;
  }
}
