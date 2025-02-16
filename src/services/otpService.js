import axiosInstance from "../config/axios";

export const send = async (email) => {
  try {
    const response = await axiosInstance.post(`/otp/send`, {
      email,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const verify = async (email, otp) => {
  try {
    const response = await axiosInstance.post(`/otp/verify`, {
      email,
      otp,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
