import axiosInstance from "../config/axios";

/**
 * URL: /profile/update-user
 * @param userId ID cua user
 * @param updateData New data
 */
export const updateUser = async (userId, formData) => {
  try {
    const response = await axiosInstance.patch(
      `/profile/update-user/${userId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getProfile = async (userId) => {
  try {
    const response = await axiosInstance.get(`/profile/get-user/${userId}`);
    return response;
  } catch (error) {
    return error;
  }
};
