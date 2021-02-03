import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/apis",
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
