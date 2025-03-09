import axiosInstance from "../../config/axios";

const sendOtp = async (email) => {
  try {
    const response = await axiosInstance.post(`/auth/send-otp`, {
      email,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const verifyOtp = async (email, otp) => {
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

const checkUser = async () => {
  try {
    const response = await axiosInstance.get(`/auth/get-user-info`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const refreshToken = async (refreshToken) => {
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

export default {
  sendOtp,
  verifyOtp,
  checkUser,
  refreshToken,
};
