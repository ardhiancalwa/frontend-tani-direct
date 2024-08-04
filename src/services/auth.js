// src/api/auth.js
import axiosInstance from "./api";

export const loginUser = async (email, password, userType) => {
  try {
    let endpoint = "";
    let loginData = {};

    if (userType === "pembeli") {
      endpoint = "/pembeli/login";
      loginData = { email_pembeli: email, password_pembeli: password };
    } else if (userType === "petani") {
      endpoint = "/petani/login";
      loginData = { email_petani: email, password_petani: password };
    }

    const response = await axiosInstance.post(endpoint, loginData);
    const { token } = response.data;
    localStorage.setItem("token", token); // Simpan token ke local storage
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return token;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
