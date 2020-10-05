import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';

// Redux
// will connect react and redux together

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// basically like component did mount?
const App = () => {
  // in order to user the express router, we need to wrap everything in a router
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          {/* this will route to the index (just /) */}
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
