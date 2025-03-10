import axios from "axios";
import env from "./env";
import { refreshToken } from "../services/authService";

const axiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 1000 * 60 * 10, // 10 phút
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    if (!error.response) {
      console.error("Lỗi mạng hoặc server không phản hồi:", error.message);
      return Promise.reject(error);
    }

    const originalRequest = error.config;
    const status = error.response.status;

    if (status === 401) {
      console.log("Phiên đăng nhập hết hạn");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/authentication";
      return Promise.reject(error.response.data);
    } else if (status === 410 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshTokenValue = localStorage.getItem("refreshToken");
      console.log(refreshTokenValue);
      try {
        const response = await refreshToken(refreshTokenValue);
        if (response.statusCode === 200) {
          console.log("Refresh token thành công:", response.data);
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        console.error("Refresh token thất bại:", refreshError);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/authentication";
        return Promise.reject(refreshError);
      }
    } else if (status === 403) {
      console.error("Bạn không có quyền truy cập tài nguyên này");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/authentication";
    } else if (status >= 500) {
      console.error("Lỗi server, vui lòng thử lại sau");
    }

    return Promise.reject(error.response.data);
  }
);

export default axiosInstance;
