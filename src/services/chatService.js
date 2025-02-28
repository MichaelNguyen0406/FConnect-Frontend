import axiosInstance from "../config/axios";

export const getReceivers = async (userId) => {
  try {
    const response = await axiosInstance.get(
      `/message/get-receivers/${userId}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
