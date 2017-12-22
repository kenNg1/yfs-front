import { STUDENT_PROFILE } from '../actions'
import { MENTOR_PROFILE } from '../actions'
import {REHYDRATE} from 'redux-persist/constants'

const initialState = {
  userProfile: null,
}

export default function(state = initialState, action={}){
  
  switch(action.type){
           
      case STUDENT_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      }
      
      
      case MENTOR_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      }

      case REHYDRATE:
      var incoming = action.payload.events
      // if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
      if (incoming) return {...state, ...incoming}
      return {
        ...state
      }   
        
    default:
      return state
      
  }
}
