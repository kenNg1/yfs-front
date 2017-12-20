import { GET_EVENTS } from '../actions'
import { GET_EVENT } from '../actions'
import {REHYDRATE} from 'redux-persist/constants'

const initialState = {
  events: [],
  selectedEvent: []
}

export default function(state = initialState, action={}){
  
  switch(action.type){
   
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      }
    case GET_EVENT:
      return {
        ...state,
        selectedEvent: action.payload
      }
    
    case REHYDRATE:
      return {...state
    }

    default:
      return state
  }
}
