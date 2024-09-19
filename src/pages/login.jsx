import React, { useEffect, useState } from "react";

import LoginImage from "../assets/images/login-image.png";
import GoogleIcon from "../assets/images/google.svg";
import AppleIcon from "../assets/images/apple.svg";
import FacebookIcon from "../assets/images/facebook.svg";

import ButtonWithImage from "../components/common/button";
import Textfield from "../components/common/textfield";
import Divider from "@mui/material/Divider";
// import axios from "axios";
import Cookies from "universal-cookie";
import request from "../utils/request";
import toast, { Toaster } from "react-hot-toast";
import TextfieldPassword from "../components/common/textfield_password";
const cookies = new Cookies();
const PembeliLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [emailRegis, setEmailRegis] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRegis, setPasswordRegis] = useState("");
  const [confirmPasswordRegis, setConfirmPasswordRegis] = useState("");
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

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    await request
      // .post(`https://api-tani-direct.vercel.app/pembeli/login`, {
      //   email_pembeli: email,
      //   password_pembeli: password,
      // })
      .post(`/pembeli/login`, {
        email_pembeli: email,
        password_pembeli: password,
      })
      .then(async (res) => {
        const { token, pembeliID } = await res.data.data;
        console.log(res.data.data);
        cookies.set("token_pembeli", token, { path: "/" });
        cookies.set("pembeliID", pembeliID, { path: "/" });
        // setSuccess("Login successful! Redirecting to home...");
        toast.success("Successfully Log in!");
        setError("");
        setLoading(false);
        setTimeout(() => {
          window.location.href = "/home";
        }, 2000);
      })
      .catch((error) => {
        // setError("Login failed. Please check your credentials.");
        toast.error("Log in failed!");
        setSuccess("");
        setLoading(false);
        console.log(error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    request
      .post("/pembeli/register", {
        email_pembeli: emailRegis,
        password_pembeli: passwordRegis,
        nama_pembeli: nama,
        kontak_pembeli: no_hp,
      })
      .then((res) => {
        if (passwordRegis !== confirmPasswordRegis) {
          // setError("Password and Confirm Password are not the same");
          toast.error("Password and Confirm Password are not the same");
        } else {
          // Lakukan registrasi
          const token = res.data.data.token;
          const pembeliID = res.data.data.newPembeli.pembeliID;
          console.log(res.data.data);
          cookies.set("token_pembeli", token, { path: "/" });
          cookies.set("pembeliID", pembeliID, { path: "/" });
          toast.success("Successfully Registered!");
          setLoading(false);
          setError("");
          setTimeout(() => {
            window.location.href = "/home";
          }, 2000);
        }
      })
      .catch((error) => {
        if (error.message === "Email already in use") {
          toast.error("Email sudah digunakan");
        } else {
          toast.error("Failed to create account!");
        }
        setLoading(false);
        setSuccess("");
        console.error("Error registering:", error);
      });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const LoadingSpinner = () => (
    <svg
      className="animate-spin mr-3 h-8 w-8 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  return (
    <div
      id="login"
      className=" flex flex-col max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl 2xl:max-w-full md:flex-row md:items-center md:justify-evenly bg-no-repeat min-h-screen bg-neutral"
    >
      {/* Login Image */}
      <div className="hidden lg:flex items-center">
        <img
          src={LoginImage}
          className="lg:w-[45vw] lg:h-[45vw] xl:w-[45vw] xl:h-[45vw] 2xl:w-[25vw] 2xl:h-[25vw] 2xl:mx-[8vw]"
          alt="login-image"
        />
      </div>
      <Toaster position="top-center" reverseOrder={false} />

      {/* Divider */}
      <Divider
        orientation="vertical"
        flexItem
        className="hidden lg:block bg-black3 opacity-50"
      />

      {/* Login Form */}
      <div>
        <div
          className={` ${
            isLogin ? "lg:mb-0" : "lg:mb-[16vw] xl:mb-[9.6vw]"
          } flex flex-col w-full items-center justify-center md:my-10 my-6`}
        >
          {/* Login/Register Button */}
          <div className="flex w-[62vw] h-[12vw] md:w-[50vw] md:h-[10vw] lg:w-[30vw] lg:h-[8vw] xl:w-[30vw] xl:h-[6vw] 2xl:w-[20vw] 2xl:h-[3.5vw] items-center justify-around bg-greenLight rounded-full p-4 shadow-lg shadow-greenLight">
            <div className="flex flex-row items-center justify-center w-full text-[0.875rem] md:text-[1.25rem] lg:text-[1.25rem] xl:text-[1.5rem] 2xl:text-[1.2rem]">
              <div
                className={`w-[40vw] h-[8vw] md:w-[25vw] md:h-[6vw] lg:w-[20vw] lg:h-[5vw] xl:w-[20vw] xl:h-[4vw] 2xl:w-[15vw] 2xl:h-[2.5vw] ${
                  isLogin ? "bg-primary text-neutral" : "bg-none text-primary"
                } rounded-full flex items-center justify-center  font-inter font-bold cursor-pointer transition duration-300 ease-in-out`}
                onClick={() => setIsLogin(true)}
              >
                Log in
              </div>
              <div
                className={`w-[40vw] h-[8vw] md:w-[25vw] md:h-[6vw] lg:w-[20vw] lg:h-[5vw] xl:w-[20vw] xl:h-[4vw] 2xl:w-[15vw] 2xl:h-[2.5vw] ${
                  isLogin ? "bg-none text-primary" : "bg-primary text-neutral"
                } rounded-full flex items-center justify-center font-inter font-bold cursor-pointer transition duration-300 ease-in-out`}
                onClick={() => setIsLogin(false)}
              >
                Register
              </div>
            </div>
          </div>

          {isLogin ? (
            // Login Form
            <div
              className={`${
                isLogin ? "translate-x-0" : "-translate-x-full"
              } transition duration-500 ease-in-out transform flex flex-col w-full items-center justify-center 2xl:mt-0`}
            >
              {/* Welcome Message */}
              <div className="font-semibold font-inter text-black text-center mt-6 md:mt-6 lg:my-4 xl:my-5 2xl:my-6 leading-normal text-[2.5rem] md:text-[3.438rem] lg:text-[3.75rem] xl:text-[4.375rem] 2xl:text-[4rem]">
                Welcome Back!
              </div>

              {/* Login Image (Mobile) */}
              <div className="md:flex lg:hidden md:justify-center items-center my-6 md:my-10 ">
                <img
                  src={LoginImage}
                  className="w-[65vw] h-[65vw] md:w-[50vw] md:h-[50vw]"
                  alt="login-image"
                />
              </div>

              {/* Email and Password Fields */}
              <div className="relative md:mt-0 lg:mt-10 xl:mt-0 flex flex-col max-w-screen-sm items-center">
                <Textfield
                  id={"email"}
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={"Email"}
                  className={
                    " w-[80vw] h-[10vw] md:w-[75vw] md:h-[10vw] lg:w-[45vw] lg:h-[6vw] 2xl:w-[40vw] 2xl:h-[4vw] border border-gray border-opacity-30 focus:outline-green-700 shadow-sm rounded-md lg:rounded-lg 2xl:rounded-2xl font-inter font-semibold text-sm md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl pl-5 2xl:pl-10 mb-[3vw] lg:mb-[2vw] 2xl:mb-[0.8vw]"
                  }
                />
                <TextfieldPassword
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  rounded={"rounded-md lg:rounded-lg 2xl:rounded-2xl"}
                  placeholder={"Password"}
                  width={"w-[80vw] md:w-[75vw] lg:w-[45vw] 2xl:w-[40vw]"}
                  height={"h-[10vw] md:h-[10vw] lg:h-[6vw] 2xl:h-[4vw] h-10"}
                />
              </div>

              <div className="h-4 lg:h-8"></div>

              {/* Login Button */}
              <div>
                <form onSubmit={handleLogin}>
                  <button
                    className={`h-[10vw] md:w-[75vw] md:h-[8vw] lg:h-[6vw] 2xl:h-[4vw] flex items-center justify-center rounded-lg lg:rounded-lg 2xl:rounded-2xl shadow-lg bg-primary ${
                      loading
                        ? "bg-opacity-70"
                        : "bg-opacity-100 hover:shadow-xl hover:shadow-greenLight"
                    } text-white font-semibold font-inter text-sm md:text-2xl lg:text-xl xl:text-2xl 2xl:text-2xl w-[80vw] md:w-[75vw] lg:w-[45vw] 2xl:w-[40vw]`}
                    type="submit"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <LoadingSpinner />
                        <span className="ml-2">Processing...</span>
                      </div>
                    ) : (
                      "Login"
                    )}
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
              <Divider
                className="font-inter text-sm md:text-xl lg:text-2xl 2xl:text-2xl font-semibold px-20 2xl:px-[5vw] md:px-0 pt-8"
                flexItem
              >
                or
              </Divider>

              {/* Social Media Buttons */}
              <div>
                <ButtonWithImage
                  imgSrc={GoogleIcon}
                  text="Continue with Google"
                  onClick={handleOpenModal}
                />
                <ButtonWithImage
                  imgSrc={AppleIcon}
                  text="Continue with Apple"
                  onClick={handleOpenModal}
                />
                <ButtonWithImage
                  imgSrc={FacebookIcon}
                  text="Continue with Facebook"
                  onClick={handleOpenModal}
                />
              </div>
              <button
                className=""
                onClick={() => {
                  toast("Redirecting to Seller Login...", {
                    icon: "🧑‍🌾",
                  });
                  setTimeout(() => {
                    window.location.href = "/loginseller";
                  }, 1000); // 1 second delay
                }}
              >
                <div className="text-sm md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl text-primary text-opacity-70 hover:text-opacity-100 font-inter font-semibold py-2 pt-10 2xl:pt-4">
                  Log in as a Seller
                </div>
              </button>
            </div>
          ) : (
            // Register Form
            <div
              className={`${
                isLogin ? "translate-x-full" : "translate-x-0"
              } transition duration-500 ease-in-out transform flex flex-col w-full items-center justify-center md:my-8m lg:my-0`}
            >
              {/* Welcome Message */}
              <div className="font-semibold font-inter text-black text-center mt-6 md:mt-6 lg:mt-6 leading-normal text-[2.188rem] md:text-[3.438rem] lg:text-[3.125rem] xl:text-[3.75rem]">
                Create an Account!
              </div>

              {/* Login Image (Mobile) */}
              <div className="md:flex lg:hidden md:justify-center items-center my-6 md:my-10 lg:mb-0">
                <img
                  src={LoginImage}
                  className="w-[65vw] h-[65vw] md:w-[50vw] md:h-[50vw]"
                  alt="login-image"
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
                    "w-[80vw] h-[10vw] md:w-[75vw] md:h-[10vw] lg:w-[45vw] lg:h-[6vw] 2xl:w-[40vw] 2xl:h-[4vw] border border-gray border-opacity-30 focus:outline-green-700 shadow-sm rounded-lg 2xl:rounded-2xl font-inter font-semibold text-sm md:text-xl lg:text-xl xl:text-2xl pl-5"
                  }
                />
                <div style={{ height: 15 }}></div>
                <Textfield
                  id={"email"}
                  type={"email"}
                  value={emailRegis}
                  onChange={(e) => setEmailRegis(e.target.value)}
                  placeholder={"Email"}
                  className={
                    "w-[80vw] h-[10vw] md:w-[75vw] md:h-[10vw] lg:w-[45vw] lg:h-[6vw] 2xl:w-[40vw] 2xl:h-[4vw] border border-gray border-opacity-30 focus:outline-green-700 shadow-sm rounded-lg 2xl:rounded-2xl font-inter font-semibold text-sm md:text-xl lg:text-xl xl:text-2xl pl-5"
                  }
                />
                <div style={{ height: 15 }}></div>
                <Textfield
                  id={"no_hp"}
                  type={"number"}
                  value={no_hp}
                  onChange={(e) => setNoHp(e.target.value)}
                  placeholder={"Phone Number"}
                  className={
                    "w-[80vw] h-[10vw] md:w-[75vw] md:h-[10vw] lg:w-[45vw] lg:h-[6vw] 2xl:w-[40vw] 2xl:h-[4vw] border border-gray border-opacity-30 focus:outline-green-700 shadow-sm rounded-lg 2xl:rounded-2xl font-inter font-semibold text-sm md:text-xl lg:text-xl xl:text-2xl pl-5"
                  }
                />
                <div style={{ height: 15 }}></div>
                <TextfieldPassword
                  onChange={(e) => setPasswordRegis(e.target.value)}
                  value={passwordRegis}
                  rounded={"rounded-md lg:rounded-lg 2xl:rounded-2xl"}
                  placeholder={"Password"}
                  width={"w-[80vw] md:w-[75vw] lg:w-[45vw] 2xl:w-[40vw]"}
                  height={"h-[10vw] md:h-[10vw] lg:h-[6vw] 2xl:h-[4vw]"}
                />
                <div style={{ height: 15 }}></div>
                <TextfieldPassword
                  onChange={(e) => setConfirmPasswordRegis(e.target.value)}
                  value={confirmPasswordRegis}
                  rounded={"rounded-md lg:rounded-lg 2xl:rounded-2xl"}
                  placeholder={"Confirm Password"}
                  width={"w-[80vw] md:w-[75vw] lg:w-[45vw] 2xl:w-[40vw]"}
                  height={"h-[10vw] md:h-[10vw] lg:h-[6vw] 2xl:h-[4vw]"}
                />
              </div>
              <div className="flex items-start w-full pt-4 pl-[10vw] md:pl-0 lg:pl-[0vw] 2xl:pl-1">
                <div className="flex flex-row justify-start">
                  <button
                    className="w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[2.5vw] lg:h-[2.5vw] xl:w-[1.5vw] xl:h-[1.5vw] rounded-md border border-black flex items-center justify-center"
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
                  <div className="font-inter font-medium text-black text-xs md:text-base lg:text-base xl:text-xl ml-2">
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
                    className={`h-[9vw] md:w-[70vw] md:h-[7vw] lg:h-[5vw] 2xl:h-[4vw] flex items-center justify-center rounded-lg lg:rounded-lg 2xl:rounded-xl shadow-lg bg-primary ${
                      loading
                        ? "bg-opacity-70 cursor-not-allowed"
                        : "bg-opacity-100 hover:shadow-xl hover:shadow-greenLight"
                    } text-white font-semibold font-inter text-sm md:text-xl lg:text-lg xl:text-xl 2xl:text-3xl w-[75vw] md:w-[70vw] lg:w-[40vw] 2xl:w-[40vw] transition duration-300 ease-in-out`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      "Login"
                    )}
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
            <div
              className="py-4 border-t border-gray border-opacity-40 font-inter text-3xl font-bold text-primary cursor-pointer"
              onClick={handleCloseModal}
            >
              OK
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PembeliLoginPage;
