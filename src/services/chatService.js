import axiosInstance from "../config/axios";

export const getListMatch = async (userId) => {
  try {
    const response = await axiosInstance.get(`/match/get-list-match/${userId}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getMessages = async (matchId) => {
  try {
    const response = await axiosInstance.get(
      `/message/get-messages/${matchId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
