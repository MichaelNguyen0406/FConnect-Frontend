import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const checkEmail = async (body) => {
  try {
    const response = await axios.post(`${API_URL}/check-email`, body);
    return response.data;
  } catch (error) {
    console.log("Error Check Email: ", error);
  }
};

export const verifyEmail = async (body) => {
  try {
    const response = await axios.post(`${API_URL}/verify-email`, body);
    return response.data;
  } catch (error) {
    console.log("Error Verify Email: ", error);
  }
};

export const refreshOtp = async (body) => {
  try {
    const response = await axios.post(`${API_URL}/refresh-email`, body);
    return response.data;
  } catch (error) {
    console.log("Error Refresh Otp: ", error);
  }
};

export const registerUser = async (body) => {
  try {
    const response = await axios.post(
      `${API_URL}/enter-password-register`,
      body
    );
    return response.data;
  } catch (error) {
    console.log("Error Register API: ", error);
  }
};

export const loginUser = async (body) => {
  try {
    const response = await axios.post(`${API_URL}/enter-password-login`, body);
    return response.data;
  } catch (error) {
    console.log("Error Login API: ", error);
  }
};

export const checkForgetPass = async (body) => {
  try {
    const response = await axios.post(`${API_URL}/check-forget-password`, body);
    return response.data;
  } catch (error) {
    console.log("Error Login API: ", error);
  }
};

export const updateForgetPass = async (body) => {
  try {
    const response = await axios.post(`${API_URL}/update-password`, body);
    return response.data;
  } catch (error) {
    console.log("Error Login API: ", error);
  }
};
