import { CREATE_OVERLAY, REMOVE_OVERLAY } from '../actions'
import {REHYDRATE} from 'redux-persist/constants'

const initialState = {
  overlay: false,
  navbarBurgerClasses:["navbar-burger","burger"],
  navbarMenuClasses:["navbar-menu"]
}

export default function(state = initialState, action={}){
  
  switch(action.type){
   
    case CREATE_OVERLAY:
      return {
        ...state,
        overlay: action.payload.overlay,
        navbarMenuClasses: action.payload.navbarMenuClasses,
        navbarBurgerClasses: action.payload.navbarBurgerClasses
      }
    case REMOVE_OVERLAY:
      return {
        ...state,
        overlay: action.payload.overlay,
        navbarMenuClasses: action.payload.navbarMenuClasses,
        navbarBurgerClasses: action.payload.navbarBurgerClasses
      }
    
    case REHYDRATE:
      return {...state
    }

    default:
      return state
  }
}
