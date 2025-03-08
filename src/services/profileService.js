import axiosInstance from "../config/axios";

/**
 * Thay doi ten User
 * URL: /profile/update-user
 * @param userId ID cua user
 * @param updateData New data
 */
export const updateUser = async (userId, updateData, formData) => {
  try {
    const response = await axiosInstance.patch(
      `/profile/update-user/${userId}`,
      {
        updateData,
        formData,
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
