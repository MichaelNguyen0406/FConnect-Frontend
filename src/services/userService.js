import axiosInstance from "../config/axios";

export const getUser = async (userId) => {
  try {
    const response = await axiosInstance.get(`/match/get-list-match/${userId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getMessages = async (matchId) => {
  try {
    const response = await axiosInstance.get(
      `/message/get-messages/${matchId}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
