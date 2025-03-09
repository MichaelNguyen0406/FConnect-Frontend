import axios from "axios";
import env from "./env";

import { refreshToken } from "../services/authService";

const axiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
});

axiosInstance.defaults.timeout = 1000 * 60 * 10;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("accessToken");
    if (token) {
      // console.log("accessToken", token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    // console.log(error);
    if (error.response.status === 401) {
      console.log("Logout");
    } else if (error.response.status === 410 && !originalRequest._retry) {
      originalRequest._retry = true;
      const token = localStorage.getItem("refreshToken");
      const response = await refreshToken(token);
      console.log(response.statusCode);
      if (response.statusCode === 200) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
      originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error.response.data);
  }
);

export default axiosInstance;
