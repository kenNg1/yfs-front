import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
// import logger from 'redux-logger';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/layout/header';
import HeaderOverlay from './components/layout/header-overlay';
import Footer from './components/layout/footer';
import Landing from './components/landing';
import Team from './components/team';
import AdminMain from './components/admin/admin-main';
import Profile from './components/auth/profile';
import EditProfile from './components/auth/edit_profile';
import Signin from './components/auth/signin';
import ForgotPass from './components/auth/forgotpass';
import Signup from './components/auth/signup';
import EventIndex from './components/events/event_index';
import EventShow from './components/events/event_show';
import About from './components/about';
import Gallery from './components/gallery';
import Mentor from './components/mentor';
import ScrollToTop from './components/UI/ScrollToTop';
// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk), autoRehydrate({ log: true })));

persistStore(store);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <HeaderOverlay />
        <ScrollToTop>
          <Switch>
            <Route path="/admin" component={AdminMain} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/forgotpassword" component={ForgotPass} />
            <Route path="/team" component={Team} />
            <Route exact path="/profile/edit" component={EditProfile} />
            <Route path="/profile" component={Profile} />
            <Route path="/events/:id" component={EventShow} />
            <Route path="/events" component={EventIndex} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/about" component={About} />
            <Route path="/mentor" component={Mentor} />
            <Route path="/" component={Landing} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById('root'));
