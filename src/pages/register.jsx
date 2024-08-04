import React, { useState } from "react";

import LoginImage from "../assets/images/login-image.png";
import Divider from "@mui/material/Divider";
import Textfield from "../components/common/textfield";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const PembeliRegisterPage = () => {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [no_hp, setNoHp] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/pembeli/register`, {
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
  return (
    <div
      id="register"
      className="flex flex-col max-w-screen-sm md:max-w-screen-md lg:max-w-full md:flex-row md:items-center md:justify-evenly lg:flex-row items-center justify-evenly bg-no-repeat min-h-screen bg-neutral"
    >
      <div className="hidden lg:flex items-center lg:mb-0">
        <img src={LoginImage} alt="login-image" />
      </div>
      <Divider
        orientation="vertical"
        flexItem
        className="hidden lg:block bg-black3 opacity-50"
      />
      <div className="flex flex-col items-center justify-center md:mt-8 md:mb-0 mb-28 pb-10 lg:pb-16">
        <div
          className="flex items-center justify-around bg-greenLight rounded-full p-3"
          style={{ width: 329, height: 59 }}
        >
          <div className="flex flex-row  w-full">
            <div
              className="flex items-center justify-center font-inter text-primary font-semibold cursor-pointer"
              style={{ width: 146, height: 40 }}
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </div>
            <div
              className="bg-primary rounded-full flex items-center justify-center text-neutral font-inter font-bold"
              style={{ width: 146, height: 40 }}
              onClick={() => (window.location.href = "/register")}
            >
              Register
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold font-inter text-black text-center text-3xl md:text-[50px] lg:text-6xl  mt-10">
            Create your account
          </div>
          <div className="md:flex lg:hidden md:justify-center items-center py-4 md:pt-[52px] md:pb-[40px] lg:py-0 lg:mb-0">
            <img
              src={LoginImage}
              className="w-60 h-40 md:w-[309px] md:h-[206px]"
              alt="login-image"
            />
          </div>
          <div className="relative md:mt-0 lg:mt-10">
            <div>
              <Textfield
                id={"username"}
                type={"text"}
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder={"Username"}
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
                id={"phone"}
                type={"text"}
                value={no_hp}
                onChange={(e) => setNoHp(e.target.value)}
                placeholder={"Phone"}
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
                id={"confirm-password"}
                type={"password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  // validatePassword();
                }}
                placeholder={"Confirm Password"}
                className={
                  "h-10 md:h-[60px] lg:h-16 border border-gray rounded-xl font-inter font-semibold lg:text-h5 pl-5 w-[350px] md:w-[563px] lg:w-[563px]"
                }
              />
              {/* {passwordError && (
              <div className="text-red-600 text-sm mt-2">{passwordError}</div>
            )} */}
            </div>
            <div style={{ height: 20 }}></div>
            <div className="flex items-start">
              <div className="flex flex-row items-center">
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
            {/* {checkboxError && (
            <div className="text-red-600 text-sm mt-2">{checkboxError}</div>
          )} */}
            <div style={{ height: 20 }}></div>
          </div>

          <div>
            <form onSubmit={handleRegister}>
              {/* Your form elements here */}
              <button
                className="h-10 md:h-[60px] lg:h-14 flex items-center justify-center rounded-lg lg:rounded-xl bg-primary text-white font-semibold font-inter text-sm lg:text-h5 w-[350px] md:w-[563px] lg:w-[563px]"
                type="submit"
              >
                {loading ? "Loading..." : "Create account"}{" "}
                {/* Show loading text while loading */}
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
        <div style={{ height: 30 }}></div>
      </div>
    </div>
  );
};

export default PembeliRegisterPage;
