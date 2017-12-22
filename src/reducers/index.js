import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userInfo from './reducer_user'
import eventInfo from './reducer_event'
import profileInfo from './reducer_profile'
import eventStudentInfo from './reducer_eventstudent'

const rootReducer = combineReducers({
  userInfo,
  eventInfo,
  profileInfo,
  eventStudentInfo,
  form: formReducer
});

// commented out as store was already created in the src/index.js
// const store = createStore(rootReducer)

export default rootReducer;
