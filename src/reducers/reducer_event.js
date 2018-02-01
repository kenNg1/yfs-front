import { GET_EVENTS_START, GET_EVENTS_SUCCESS, GET_EVENTS_FAIL } from '../actions';
import { GET_EVENT } from '../actions';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
  events: [],
  selectedEvent: [],
  error: null,
  loading: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case GET_EVENTS_START:
      return {
        ...state,
        loading: true
      };

    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        loading: false
      };

    case GET_EVENTS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case GET_EVENT:
      return {
        ...state,
        selectedEvent: action.payload
      };

    case REHYDRATE:
      return {
        ...state
      };

    default:
      return state;
  }
}
