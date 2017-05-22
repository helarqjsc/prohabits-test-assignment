import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Auth from './Auth/Auth';
import asyncComponent from './utils/asyncComponent'; /* for async page, show loading component */

import Root from './containers/Root';
import Dashboard from './containers/Dashboard';
import About from './components/About';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication(nextState.location.hash);
  }
};

export default (
  <Route path="/" component={Root}>
    <IndexRoute auth={auth} component={Dashboard}  />

    {/*<Route path="/dashboard" auth={auth} component={Posts} />*/}
    <Route path="/about" component={About} />

    <Route path="/async-example" getComponent={(location, callback) =>
        asyncComponent(require.ensure([], require => callback('', require('./components/AsyncExample').default), 'async-example'))
    } />

  </Route>
);
