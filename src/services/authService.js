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

export const checkUser = async () => {
  try {
    const response = await axiosInstance.get(`/auth/user-info`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const refreshToken = async (refreshToken) => {
  try {
    const response = await axiosInstance.post(`/auth/refresh-token`, {
      refreshToken,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
