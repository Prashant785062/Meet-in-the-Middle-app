import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Send all required fields for registration
export const registerUser = async (userData) => {
  // userData = { username, password, phone }
  return await axios.post(`${API_URL}/register`, userData);
};

// Verify OTP using object format
export const verifyOTP = async (data) => {
  // data = { phone, otp }
  return await axios.post(`${API_URL}/verify-otp`, data);
};

// Login / send OTP using object format
export const loginUser = async (data) => {
  // data = { phone }
  return await axios.post(`${API_URL}/login`, data);
};
