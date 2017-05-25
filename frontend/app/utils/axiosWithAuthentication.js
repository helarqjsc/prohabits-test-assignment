import axios from 'axios';

const defaultConfig = {
  baseURL: 'http://192.168.10.10:3030/',
  timeout: 1000,
  headers: {

  }
};

let instance = axios.create(defaultConfig);

class AxiosWithAuthentication {

  getInstance() {
    return instance;
  }

  setTokens(accessToken, idToken) {
    const newConfig = {
      ...defaultConfig,
      headers: {
        ...defaultConfig.headers,
        'Access-token': accessToken,
        'ID-token': idToken
      }
    };
    console.log("newConfig", newConfig);
    instance = axios.create(newConfig);
    return instance;
  }
};

const AxiosWithAuthenticationIstance = new AxiosWithAuthentication();
export default AxiosWithAuthenticationIstance;