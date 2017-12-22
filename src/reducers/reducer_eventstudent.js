import { REGISTER_EVENT } from '../actions'
import {REHYDRATE} from 'redux-persist/constants'

const initialState = {
  eventStudent: null,
  error:null,
  message:null
}

export default function(state = initialState, action={}){
  
  switch(action.type){
     
      case REGISTER_EVENT:         
        return {
          ...state,
          eventStudent: action.payload
        }

      case REHYDRATE:
        return {
        ...state
      }   
        
    default:
      return state
      
  }
}
