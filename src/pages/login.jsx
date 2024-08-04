import React, { useEffect, useState } from "react";

import LoginImage from "../assets/images/login-image.png";
import GoogleIcon from "../assets/images/google.svg";
import AppleIcon from "../assets/images/apple.svg";
import FacebookIcon from "../assets/images/facebook.svg";

import ButtonWithImage from "../components/common/button";
import Textfield from "../components/common/textfield";
import Divider from "@mui/material/Divider";
import axios from "axios";
import Cookies from "universal-cookie";
import request from "../utils/config";
const cookies = new Cookies();
const PembeliLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [no_hp, setNoHp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL);
  }, []);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    request
      // .post(`https://api-tani-direct.vercel.app/pembeli/login`, {
      //   email_pembeli: email,
      //   password_pembeli: password,
      // })
      .post(`/pembeli/login/`, {
        email_pembeli: email,
        password_pembeli: password,
      })
      .then((res) => {
        const { token, pembeliID } = res.data.data;
        cookies.set("token_pembeli", token, { path: "/" });
        cookies.set("pembeliID", pembeliID, { path: "/" });
        setSuccess("Login successful! Redirecting to home...");
        setError("");
        setLoading(false);
        setTimeout(() => {
          window.location.href = "/home";
        }, 2000);
      })
      .catch((error) => {
        setError("Login failed. Please check your credentials.");
        setSuccess("");
        setLoading(false);
        console.log(error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/pembeli/register", {
        email_pembeli: email,
        password_pembeli: password,
        nama_pembeli: nama,
        kontak_pembeli: no_hp,
      })
      .then((res) => {
        const token = res.data.data.token;
        const pembeliID = res.data.data.newPembeli.pembeliID;
        console.log(res.data.data);
        cookies.set("token_pembeli", token, { path: "/" });
        cookies.set("pembeliID", pembeliID, { path: "/" });
        setSuccess("Login successful! Redirecting to home...");
        setError("");
        setLoading(false);
        setTimeout(() => {
          window.location.href = "/stepone";
        }, 2000);
      })
      .catch((error) => {
        setError("Login failed. Please check your credentials.");
        setSuccess("");
        setLoading(false);
        console.error("Error registering:", error);
      });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      id="login"
      className="flex flex-col max-w-screen-sm md:max-w-screen-md lg:max-w-full md:flex-row md:items-center md:justify-evenly bg-no-repeat min-h-screen bg-neutral"
    >
      {/* Login Image */}
      <div className="hidden lg:flex items-center lg:mb-0">
        <img src={LoginImage} alt="login-image" />
      </div>

      {/* Divider */}
      <Divider
        orientation="vertical"
        flexItem
        className="hidden lg:block bg-black3 opacity-50"
      />

      {/* Login Form */}
      <div>
        <div
          className={`${
            isLogin ? "lg:pb-0" : "lg:pb-[54px]"
          } flex flex-col w-full items-center justify-center md:my-5 lg:mt-0 lg:mb-0 mt-6 mb-6`}
        >
          {/* Login/Register Button */}
          <div
            className="flex items-center justify-around bg-greenLight rounded-full p-3"
            style={{ width: 329, height: 59 }}
          >
            <div className="flex flex-row items-center justify-center w-full">
              <div
                className={`${
                  isLogin ? "bg-primary text-neutral" : "bg-none text-primary"
                } rounded-full flex items-center justify-center  font-inter font-bold cursor-pointer transition duration-300 ease-in-out`}
                style={{ width: 146, height: 40 }}
                onClick={() => setIsLogin(true)}
              >
                Sign in
              </div>
              <div
                className={`${
                  isLogin ? "bg-none text-primary" : "bg-primary text-neutral"
                } rounded-full flex items-center justify-center  font-inter font-bold cursor-pointer transition duration-300 ease-in-out`}
                style={{ width: 146, height: 40 }}
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </div>
            </div>
          </div>

          {isLogin ? (
            // Login Form
            <div
              className={`${
                isLogin ? "translate-x-0" : "-translate-x-full"
              } transition duration-500 ease-in-out transform flex flex-col w-full items-center justify-center md:mt-0 md:mb-0 lg:mt-0 lg:mb-0 mt-6 mb-6`}
            >
              {/* Welcome Message */}
              <div className="font-semibold font-inter text-black text-center mt-10 leading-normal text-3xl md:text-[50px] lg:text-6xl">
                Welcome Back!
              </div>

              {/* Login Image (Mobile) */}
              <div className="md:flex lg:hidden md:justify-center items-center py-3 md:pt-[52px] md:pb-[40px] lg:mb-0">
                <img
                  src={LoginImage}
                  className="w-60 h-40 md:w-[309px] md:h-[206px]"
                  alt="login-image"
                />
              </div>

              {/* Email and Password Fields */}
              <div className="relative md:mt-0 lg:mt-10 flex flex-col max-w-screen-sm items-center">
                <Textfield
                  id={"email"}
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={"Email"}
                  className={
                    "h-10 md:h-[60px] lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] md:w-[563px] lg:w-[563px]"
                  }
                />
                <div style={{ height: 15 }}></div>
                <Textfield
                  id={"password"}
                  type={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={"Password"}
                  className={
                    "h-10 md:h-[60px] lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] md:w-[563px] lg:w-[563px]"
                  }
                />
              </div>

              <div className="h-4 lg:h-8"></div>

              {/* Login Button */}
              <div>
                <form onSubmit={handleLogin}>
                  <button
                    className="h-10 md:h-[60px] lg:h-14 flex items-center justify-center rounded-lg lg:rounded-xl bg-primary text-white font-semibold font-inter text-sm lg:text-h5 w-[350px] md:w-[563px] lg:w-[563px]"
                    type="submit"
                  >
                    {loading ? "Loading..." : "Login"}
                  </button>
                </form>
                {success && (
                  <div className="flex items-center text-green-700 bg-green-100 border border-green-300 rounded-lg px-4 py-2 text-sm font-inter font-semibold mt-2">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {success}
                  </div>
                )}
                {error && (
                  <div className="flex items-center text-red-700 bg-red-100 border border-red-300 rounded-lg px-4 py-2 text-sm font-inter font-semibold mt-2">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636L5.636 18.364M5.636 5.636L18.364 18.364"
                      ></path>
                    </svg>
                    {error}
                  </div>
                )}
              </div>

              {/* Divider */}
              <div style={{ height: 30 }}></div>
              <Divider
                className="font-inter text-h5 font-semibold px-20 md:px-0"
                flexItem
              >
                or
              </Divider>

              {/* Social Media Buttons */}
              <div style={{ height: 30 }}></div>
              <div>
                <ButtonWithImage
                  imgSrc={GoogleIcon}
                  text="Continue with Google"
                  onClick={handleOpenModal}
                />
                <div style={{ height: 20 }}></div>
                <ButtonWithImage
                  imgSrc={AppleIcon}
                  text="Continue with Apple"
                  onClick={handleOpenModal}
                />
                <div style={{ height: 20 }}></div>
                <ButtonWithImage
                  imgSrc={FacebookIcon}
                  text="Continue with Facebook"
                  onClick={handleOpenModal}
                />
              </div>
              <button
                className=""
                onClick={() => (window.location.href = "/loginseller")}
              >
                <div className="text-[10px] md:text-[16px] lg:text-[20px] text-primary text-opacity-70 hover:text-opacity-100 font-inter font-semibold py-2 pt-10">
                  Log in as a Seller
                </div>
              </button>
            </div>
          ) : (
            // Register Form
            <div
              className={`${
                isLogin ? "translate-x-full" : "translate-x-0"
              } transition duration-500 ease-in-out transform flex flex-col w-full items-center justify-center md:my-8 lg:my-[37px]  mt-6 mb-6`}
            >
              {/* Welcome Message */}
              <div className="font-semibold font-inter text-black text-center md:mt-1 mt-10 leading-normal text-3xl md:text-[50px] lg:text-6xl">
                Create an Account!
              </div>

              {/* Register Image (Mobile) */}
              <div className="md:flex lg:hidden md:justify-center items-center py-3 md:pt-[52px] md:pb-[40px] lg:mb-0">
                <img
                  src={LoginImage}
                  className="w-60 h-40 md:w-[309px] md:h-[206px]"
                  alt="register-image"
                />
              </div>

              {/* Register Fields */}
              <div className="relative md:mt-0 lg:mt-10 flex flex-col max-w-screen-sm items-center">
                <Textfield
                  id={"nama"}
                  type={"text"}
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder={"Full Name"}
                  className={
                    "h-10 md:h-[60px] lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] md:w-[563px] lg:w-[563px]"
                  }
                />
                <div style={{ height: 15 }}></div>
                <Textfield
                  id={"email"}
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={"Email"}
                  className={
                    "h-10 md:h-[60px] lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] md:w-[563px] lg:w-[563px]"
                  }
                />
                <div style={{ height: 15 }}></div>
                <Textfield
                  id={"no_hp"}
                  type={"tel"}
                  value={no_hp}
                  onChange={(e) => setNoHp(e.target.value)}
                  placeholder={"Phone Number"}
                  className={
                    "h-10 md:h-[60px] lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] md:w-[563px] lg:w-[563px]"
                  }
                />
                <div style={{ height: 15 }}></div>
                <Textfield
                  id={"password"}
                  type={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={"Password"}
                  className={
                    "h-10 md:h-[60px] lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] md:w-[563px] lg:w-[563px]"
                  }
                />
                <div style={{ height: 15 }}></div>
                <Textfield
                  id={"confirmPassword"}
                  type={"password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={"Confirm Password"}
                  className={
                    "h-10 md:h-[60px] lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] md:w-[563px] lg:w-[563px]"
                  }
                />
              </div>
              <div className="flex items-start w-full pt-4 pl-1">
                <div className="flex flex-row justify-start">
                  <button
                    className="w-5 h-5 rounded-md border border-black flex items-center justify-center"
                    onClick={toggleCheck}
                  >
                    {isChecked && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                  <div style={{ width: 10 }}></div>
                  <div className="font-inter font-medium text-black text-xs md:text-base lg:text-base">
                    I agree with our{" "}
                    <span className="font-semibold">
                      Terms of Service and Privacy Policy
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-4 lg:h-8"></div>

              {/* Register Button */}
              <div>
                <form onSubmit={handleRegister}>
                  <button
                    className="h-10 md:h-[60px] lg:h-14 flex items-center justify-center rounded-lg lg:rounded-xl bg-primary text-white font-semibold font-inter text-sm lg:text-h5 w-[350px] md:w-[563px] lg:w-[563px]"
                    type="submit"
                  >
                    {loading ? "Loading..." : "Register"}
                  </button>
                </form>
                {success && (
                  <div className="flex items-center text-green-700 bg-green-100 border border-green-300 rounded-lg px-4 py-2 text-sm font-inter font-semibold mt-2">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {success}
                  </div>
                )}
                {error && (
                  <div className="flex items-center text-red-700 bg-red-100 border border-red-300 rounded-lg px-4 py-2 text-sm font-inter font-semibold mt-2">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636L5.636 18.364M5.636 5.636L18.364 18.364"
                      ></path>
                    </svg>
                    {error}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black backdrop-blur-sm  bg-opacity-40">
          <div className="relative  w-full max-w-xl bg-white rounded-3xl shadow ">
            <div className="flex flex-col items-center p-10">
              <h2 className="text-2xl font-semibold font-inter text-black">
                Feature Unavailable
              </h2>
              <div className="h-5"></div>
              <h4 className="text-lg font-normal font-inter text-black">
                This feature is currently unavailable. We are working hard to
                bring this feature to you soon 😊
              </h4>
            </div>
            <div className="py-4 border-t border-gray border-opacity-40 font-inter text-3xl font-bold text-primary cursor-pointer" onClick={handleCloseModal}>
              OK
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PembeliLoginPage;
