import axios from 'axios';

//dummy token
const token = 'dgfPSjkIOHUhgBVxDdJOPBFdsksIGlpsJYFcupTYPcsowgblY<N';

export const axiosInstance = axios.create({
  //TODO: base URL
  baseURL: 'http://localhost:5000/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data && response.data.error) {
      return Promise.reject(response);
    }
    return response;
  },
  (error) => {
    if (!error.response) {
      //Do something with error
    }
    return Promise.reject(error);
  },
);
