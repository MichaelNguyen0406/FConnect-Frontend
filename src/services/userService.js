import axiosInstance from "../config/axios";

export const getUser = async () => {
  try {
    const response = await axiosInstance.get("/user/get-user");
    return response.data;
  } catch (error) {
    return error;
  }
};
