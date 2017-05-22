import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import Auth from './Auth/Auth';
import asyncComponent from './utils/asyncComponent'; /* for async page, show loading component */


import Root from './containers/Root';
import Dashboard from './containers/Dashboard';
import About from './components/About';
import Callback from './components/Callback';

console.log("Callback", Callback);


const handleAuthentication = () => {
  if (/access_token|id_token|error/.test(location.hash)) {
    Auth.handleAuthentication();
  }
};

export default (
  <Route path="/" component={Root}>
    <IndexRoute getComponent={(location, callback) =>
      asyncComponent(require.ensure([], require => {
        browserHistory.push('/dashboard');
      }, 'indexRoute'))
    } />

    <Route path="/dashboard" component={Dashboard} />
    <Route path="/about" component={About} />

    <Route path="/callback" getComponent={(location, callback) =>
      asyncComponent(require.ensure([], require => {
        handleAuthentication();
        callback('', Callback);
      }, 'callback'))
    } />

    <Route path="/async-example" getComponent={(location, callback) =>
        asyncComponent(require.ensure([], require => callback('', require('./components/AsyncExample').default), 'async-example'))
    } />

  </Route>
);
