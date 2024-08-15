import React, { createContext, useState, useContext} from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!cookies.get("token_pembeli") || !!cookies.get("token_petani")
  );
  const [userType, setUserType] = useState(
    cookies.get("token_pembeli")
      ? "pembeli"
      : cookies.get("token_petani")
      ? "petani"
      : null
  );

  const loginPembeli = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:4000/pembeli/login", {
        email_pembeli: email,
        password_pembeli: password,
      });
      const { token, pembeliID } = res.data.data;
      cookies.set("token_pembeli", token, { path: "/" });
      cookies.set("pembeliID", pembeliID, { path: "/" });
      setIsAuthenticated(true);
      setUserType("pembeli");
      window.location.href = "/home";
    } catch (error) {
      console.error("Login failed. Please check your credentials.", error);
      throw error;
    }
  };

  const loginPetani = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:4000/petani/login", {
        email_petani: email,
        password_petani: password,
      });
      const { token, petaniID } = res.data.data;
      cookies.set("token_petani", token, { path: "/" });
      cookies.set("petaniID", petaniID, { path: "/" });
      setIsAuthenticated(true);
      setUserType("petani");
      window.location.href = "/homeseller";
    } catch (error) {
      console.error("Login failed. Please check your credentials.", error);
      throw error;
    }
  };

  const logout = () => {
    cookies.remove("token_pembeli");
    cookies.remove("pembeliID");
    cookies.remove("token_petani");
    cookies.remove("petaniID");
    setIsAuthenticated(false);
    setUserType(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userType, loginPembeli, loginPetani, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
