// src/services/api.js
import axios from "axios";

export const adminLogin = async (email, password, adminCode) => {
  try {
    const response = await axios.post("http://localhost:3000/api/admin-login", {
      email,
      password,
      adminCode,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userLogin = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3000/api/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
