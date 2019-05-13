import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = '88c512ee3ff3c5670ae9a6142b956474';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });