import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

if (__CLIENT__ && __DEVELOPMENT__) {
  // https://facebook.github.io/react/docs/advanced-performance.html
  window.Perf = require('react-addons-perf');
}

let initialState;
try {
  initialState = window.__INITIAL_STATE__; // for erver-side-rendering
} catch (err) {
  initialState = {};
}

export const history = browserHistory;

if (__CLIENT__) {
  document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" href="//anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/css/dashboardv2active768px.css"/>';

  ReactDOM.render(
    <Router history={history}>
      {routes}
    </Router>,
    document.getElementById('root')
  );
}
