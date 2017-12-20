import { SIGN_IN } from '../actions'
import { SIGN_UP } from '../actions'
import { LOG_OUT } from '../actions'
import {REHYDRATE} from 'redux-persist/constants'

const initialState = {
  loggedIn: false,
  currentUser: null,
}

export default function(state = initialState, action={}){
  
  switch(action.type){
     
      case SIGN_UP:
        localStorage.setItem('id', action.payload.id)
        localStorage.setItem('email', action.payload.email)
        localStorage.setItem('tier', action.payload.tier)
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('firstName', action.payload.firstName)            
        return {
          ...state,
          loggedIn: true,
          currentUser: action.payload
        }
        
      case SIGN_IN:
        localStorage.setItem('id', action.payload.id)
        localStorage.setItem('email', action.payload.email)
        localStorage.setItem('tier', action.payload.tier)
        localStorage.setItem('token', action.payload.token)      
        localStorage.setItem('firstName', action.payload.firstName)      
        return {
          ...state,
          loggedIn: true,
          currentUser: action.payload
        }
           
        
      case LOG_OUT:
        localStorage.clear();
        return {
          ...state,
          loggedIn: false,
          currentUser: {}
        }  

      case REHYDRATE:
        return {
        ...state
      }   
        
    default:
      return state
      
  }
}
