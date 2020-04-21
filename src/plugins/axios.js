'use strict';
import axios from 'axios';
// import store from '@/store';

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

let config = {
  timeout: 30 * 1000 // Timeout
};

const _axios = axios.create(config);

// 请求拦截
_axios.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['Authorization'] = `Bearer ${store.getters.token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 相应拦截
_axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Do something with response error
    console.log(error);
    return Promise.reject(error);
  }
);
export default _axios;
