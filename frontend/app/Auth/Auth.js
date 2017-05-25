// src/Auth/Auth.js

import { EventEmitter } from 'events';
import auth0 from 'auth0-js';
import { browserHistory } from 'react-router';
import axiosAuth from 'utils/axiosWithAuthentication';

class Auth extends EventEmitter {
  auth0 = new auth0.WebAuth({
    domain: 'prohabits.auth0.com',
    clientID: 'PvA4XzMNmlCGoT5gUPev7XvYnETTsyYB',
    redirectUri: 'http://192.168.10.10:3000/callback',
    audience: 'https://prohabits.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    axiosAuth.setTokens(this.getAccessToken(), this.getIdToken());
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
      this.setSession(authResult);
      browserHistory.push('/dashboard');
    } else if (err) {
      console.log(err);
      browserHistory.push('/dashboard');
    }
  });
  }

  setSession(authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      // navigate to the home route
      browserHistory.push('/dashboard');
    }
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    browserHistory.push('/dashboard');
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  getIdToken() {
    return localStorage.getItem('id_token');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}

export default new Auth();