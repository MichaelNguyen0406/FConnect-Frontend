import axiosInstance from "../config/axios";

export const sendOtp = async (email) => {
  try {
    const response = await axiosInstance.post(`/auth/send-otp`, {
      email,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const verifyOtp = async (email, otp) => {
  try {
    const response = await axiosInstance.post(`/auth/verify-otp`, {
      email,
      otp,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const loginEmail = async (email) => {
  try {
    const response = await axiosInstance.post(`/auth/login-email`, {
      email,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const loginGoogle = async () => {
  window.location.href = "http://localhost:8080/v1/auth/google";
};
