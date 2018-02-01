import axios from 'axios';
import moment from 'moment';

export const AUTH_ERROR = 'AUTH_ERROR';
export const GET_COUNTRY = 'GET_COUNTRY';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const LOG_OUT = 'LOG_OUT';
export const STUDENT_PROFILE = 'STUDENT_PROFILE';
export const MENTOR_PROFILE = 'MENTOR_PROFILE';
export const EDIT_MENTOR_PROFILE = 'EDIT_MENTOR_PROFILE';
export const EDIT_STUDENT_PROFILE = 'EDIT_STUDENT_PROFILE';
export const GET_EVENTS_START = 'GET_EVENTS_START';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAIL = 'GET_EVENTS_FAIL';
export const GET_EVENT = 'GET_EVENT';
export const REGISTER_EVENT = 'REGISTER_EVENT';
export const CHANGE_EVENT_STATUS = 'CHANGE_EVENT_STATUS';
export const CREATE_OVERLAY = 'CREATE_OVERLAY';
export const REMOVE_OVERLAY = 'REMOVE_OVERLAY';

// const ROOT_URL = 'http://localhost:8000'
const ROOT_URL = '';

export const createOverlay = values => {
  let data = {
    overlay: true,
    navbarBurgerClasses: ['navbar-burger', 'burger', 'is-active'],
    navbarMenuClasses: ['navbar-menu', 'is-active']
  };
  return { type: CREATE_OVERLAY, payload: data };
};

export const removeOverlay = values => dispatch => {
  let data = {
    overlay: true,
    navbarBurgerClasses: ['navbar-burger', 'burger', 'is-active'],
    navbarMenuClasses: ['navbar-menu', 'is-active', 'pullup-animation']
  };
  dispatch({ type: REMOVE_OVERLAY, payload: data });

  data = {
    overlay: false,
    navbarBurgerClasses: ['navbar-burger', 'burger'],
    navbarMenuClasses: ['navbar-menu']
  };

  setTimeout(() => {
    dispatch({ type: REMOVE_OVERLAY, payload: data });
  }, 350);
};

export const registerEvent = (values, callback) => dispatch => {
  axios.post(`${ROOT_URL}/api/students/register-event/${values.eventId}`, values).then(response => {
    callback(response.data);
    dispatch({ type: REGISTER_EVENT, payload: response.data });
  });
};

export const changeEventStatus = (values, callback) => dispatch => {
  axios.put(`${ROOT_URL}/api/students/register-event/${values.eventId}`, values).then(response => {
    callback(response.data);
    dispatch({ type: CHANGE_EVENT_STATUS, payload: response.data });
  });
};

export const storeCountry = values => dispatch => {
  axios.get(`https://freegeoip.net/json/`).then(response => {
    const selectedCountry = {
      name: response.data.country_name,
      code: response.data.country_code.toLowerCase()
    };
    localStorage.setItem('selectedCountry', JSON.stringify(selectedCountry));
  });
};

export const signUpUser = (values, callback) => dispatch => {
  axios.post(`${ROOT_URL}/register`, values).then(response => {
    localStorage.setItem('id', response.data.id);
    localStorage.setItem('email', response.data.email);
    localStorage.setItem('tier', response.data.tier);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('firstName', response.data.firstName);
    callback(response);
    dispatch({ type: SIGN_UP, payload: response.data });
  });
};

export const signInUser = (values, callback) => dispatch => {
  axios
    .post(`${ROOT_URL}/login`, values)
    .then(response => {
      localStorage.setItem('id', response.data.id);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('tier', response.data.tier);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('firstName', response.data.firstName);
      callback();
      dispatch({ type: SIGN_IN, payload: response.data, message: 'Successfully signed in' });
    })
    .catch(error => {
      dispatch(authError(error.response.data.message));
    });
};

export const authError = error => dispatch => {
  dispatch({ type: AUTH_ERROR, payload: error });
  setTimeout(() => {
    dispatch({ type: AUTH_ERROR, payload: null });
  }, 3500);
};

export const logOut = () => {
  localStorage.clear();
  return { type: LOG_OUT };
};

export const studentProfile = (id, callback) => dispatch => {
  axios
    .get(`${ROOT_URL}/api/students/${id}`)
    .then(response => {
      response.data.dob = moment(response.data.dob).format('YYYY-MM-DD');
      dispatch({ type: STUDENT_PROFILE, payload: response.data });
    })
    .catch(error => {});
};

export const editStudentProfile = (values, id, callback) => dispatch => {
  axios.put(`${ROOT_URL}/api/students/${id}`, values).then(response => {
    callback();
    dispatch({ type: EDIT_STUDENT_PROFILE, payload: response.data });
  });
};

export const mentorProfile = (id, callback) => dispatch => {
  axios
    .get(`${ROOT_URL}/api/mentors/${id}`)
    .then(response => {
      dispatch({ type: MENTOR_PROFILE, payload: response.data });
    })
    .catch(error => {});
};

export const editMentorProfile = (values, id, callback) => dispatch => {
  axios.put(`${ROOT_URL}/api/mentors/${id}`, values).then(response => {
    callback();
    dispatch({ type: EDIT_MENTOR_PROFILE, payload: response.data });
  });
};

export const getEventsStart = () => ({ type: GET_EVENTS_START });
export const getEventsSuccess = events => ({ type: GET_EVENTS_SUCCESS, payload: events });
export const getEventsFail = error => ({ type: GET_EVENTS_FAIL, error: error });

export const getEvents = () => dispatch => {
  dispatch(getEventsStart());
  axios
    .get(`${ROOT_URL}/api/events/`)
    .then(response => {
      dispatch(getEventsSuccess(response.data));
    })
    .catch(error => {
      dispatch(getEventsFail(error));
    });
};

export const getEvent = id => dispatch => {
  axios.get(`${ROOT_URL}/api/event/${id}`).then(response => {
    dispatch({ type: GET_EVENT, payload: response.data });
  });
};
