import axios from 'axios'
import moment from 'moment'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const LOG_OUT = 'LOG_OUT'
export const STUDENT_PROFILE = 'STUDENT_PROFILE'
export const MENTOR_PROFILE = 'MENTOR_PROFILE'
export const EDIT_MENTOR_PROFILE = 'EDIT_MENTOR_PROFILE'
export const EDIT_STUDENT_PROFILE = 'EDIT_STUDENT_PROFILE'
export const GET_EVENTS = 'GET_EVENTS'
export const GET_EVENT = 'GET_EVENT'

// const ROOT_URL = 'http://localhost:8000'
const ROOT_URL = ''

export const signUpUser = (values, callback) => {
  return dispatch => {
    const request = axios.post(`${ROOT_URL}/register`, values)
    .then(response => {
      callback();
      dispatch({type: SIGN_UP, payload: response.data});
    })
  }
}

export const signInUser = (values, callback) => {
  return dispatch => {
    const request = axios.post(`${ROOT_URL}/login`, values)
    .then(response => {
      callback()
      dispatch({type: SIGN_IN, payload: response.data});
    })
  }
}


export const logOut = () => {
  return dispatch => {
    dispatch({type: LOG_OUT})      
  }
}


export const studentProfile = (id, callback) => {
  return dispatch => {
    axios.get(`${ROOT_URL}/api/students/${id}`)
    .then(response => {
    response.data.dob = moment(response.data.dob).format('YYYY-MM-DD');
    console.log('user',response.data)
      dispatch({type: STUDENT_PROFILE, payload: response.data})
    })
    .catch(error => console.log(error))    
  }
}

export const editStudentProfile = (values,id,callback) => {
  return dispatch => {
    axios.put(`${ROOT_URL}/api/students/${id}`,values)
    .then(response => {
      callback();
      dispatch({type:EDIT_STUDENT_PROFILE, payload: response.data})
    })
  }
}

export const mentorProfile = (id, callback) => {
  return dispatch => {
    axios.get(`${ROOT_URL}/api/mentors/${id}`)
    .then(response => {
      dispatch({type: MENTOR_PROFILE, payload: response.data});
    })
    .catch(error => console.log(error))
  }
}

export const getEvents = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/api/events/`)
    .then(response => {
      dispatch({type: GET_EVENTS, payload: response.data});
    })
  }
}

export const getEvent = (id) => {
  return dispatch => {
    axios.get(`${ROOT_URL}/api/event/${id}`)
    .then(response => {
      dispatch({type: GET_EVENT, payload: response.data});
    })
  }
}

// old way
    // export const signInUser = (values, callback) => {
    //   return action = (dispatch) => {
    //     const request = axios.post(`${ROOT_URL}/login`, values)
    //     .then(response => {
    //       callback()
    //       dispatch({type: SIGN_IN, payload: response.data});
    //     })
    //   }
    // }