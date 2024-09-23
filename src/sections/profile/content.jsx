import React, { useEffect, useRef, useState } from "react";

// import ProfileImage from "../../assets/images/image_profile_page.png";
import TextfieldProfile from "../../components/common/textfieldProfile";

import UserIcon from "../../assets/images/user_profile.svg";
import HomeIcon from "../../assets/images/home_profile.svg";
import TruckIcon from "../../assets/images/truck_profile.svg";
import HistoryIcon from "../../assets/images/history_profile.svg";
import NextIcon from "../../assets/images/next_profile.svg";
import Cookies from "universal-cookie";
import axios from "axios";
import request from "../../utils/request";
import LoadingScreen from "../../components/common/loading";

const cookies = new Cookies();

const ContentProfile = (profileData) => {
  const [profile, setProfile] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  const fileInputRef = useRef(null);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleLogout = async () => {
    try {
      // Remove token from local storage
      cookies.remove("token_pembeli");
      cookies.remove("pembeliID");
      localStorage.removeItem("bookmarks");
      localStorage.removeItem("cart");

      // Redirect to login page
      window.location.href = "/login";
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = (token) => {
    const pembeliID = cookies.get("pembeliID");
    setLoading(true);
    request
      .get(`/pembeli/${pembeliID}`)
      .then((res) => {
        setProfile(res.data?.data);
        console.log(res.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    const userToken = cookies.get("token_pembeli");
    if (userToken) {
      fetchData(userToken);
    } else {
      console.log("gada token");
    }
  }, []);

  useEffect(() => {
    if (selectedFile) {
      handleUpdateImage();
    }
  }, [selectedFile]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setProfile((prevProfile) => ({
        ...prevProfile,
        image_pembeli: `user/${file.name}`,
      }));
      console.log(file);
    }
  };

  const handleUpdateImage = async () => {
    const pembeliID = cookies.get("pembeliID");
    setLoading(true);

    const formData = new FormData();
    if (selectedFile) {
      formData.append("image_pembeli", selectedFile);
    }

    try {
      const response = await axios.put(
        `https://backend-tanidirect-production.up.railway.app/pembeli/${pembeliID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setProfile(response.data.data);
      setLoading(false);
      console.log("Profile updated successfully", response);
    } catch (error) {
      setLoading(false);
      console.error("Error updating profile:", error);
    }
  };

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("id-ID", options).format(new Date(date));
  };

  return (
    <div>
      {loading ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        <div
          className="lg:pl-[5vw] 2xl:px-[3vw] w-full mt-16 md:mt-36 2xl:mt-28 "
          key={profileData.pembeliID}
        >
          <div className="flex flex-col lg:flex-row lg:gap-5 ">
            <div className="flex flex-col items-center ">
              <div className="flex flex-col w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[20vw] items-center border border-gray rounded-md 2xl:rounded-xl p-[15px]">
                <img
                  src={`${imageUrl}${profile.image_pembeli}`}
                  className="w-[50vw] md:w-[40vw] lg:w-[25vw] 2xl:w-72 2xl:h-72 mb-4 md:mb-6 rounded-full object-cover"
                  alt="profile_photo"
                />
                <button
                  className="flex items-center h-auto w-full justify-center py-2 border border-black rounded active:scale-[0.98]"
                  onClick={handleButtonClick}
                >
                  <div className="font-inter text-[0.65rem] md:text-[0.8rem] lg:text-[1rem] font-semibold text-black text-start">
                    Pilih foto
                  </div>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <div className="w-auto mt-2 md:mt-3">
                  <div className="font-inter font-medium text-black text-start text-[0.5rem] md:text-[0.5rem] lg:text-[0.6rem] 2xl:text-sm">
                    Besar file: maksimum 10.000.000 bytes (10 Megabytes).
                    Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG
                  </div>
                </div>
              </div>
              <div className="w-full hidden lg:flex lg:flex-col mt-4">
                <div className="py-1 xl:py-[0.4vw] 2xl:py-1">
                  <button
                    className="flex items-center w-full justify-center py-2 border border-black rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-[1.02] active:bg-gray active:bg-opacity-10 active:scale-100"
                    onClick={() => (window.location.href = "/editprofile")}
                  >
                    <div
                      className="font-inter font-semibold text-black text-start lg:text-[1rem]"
                    >
                      Edit Profile
                    </div>
                  </button>
                </div>
                <div className="py-1 xl:py-[0.4vw] 2xl:py-1">
                  <button
                    className="flex items-center w-full justify-center py-2 border border-black rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-[1.02] active:bg-gray active:bg-opacity-10 active:scale-100"
                    onClick={() => (window.location.href = "/editalamat")}
                  >
                    <div
                      className="font-inter font-semibold text-black text-start lg:text-[1rem]"
                    >
                      Edit Alamat
                    </div>
                  </button>
                </div>
                <div className="py-1 xl:py-[0.4vw] 2xl:py-1">
                  <button
                    className="flex items-center w-full justify-center py-2 border border-black rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-[1.02] active:bg-gray active:bg-opacity-10 active:scale-100"
                    onClick={() => (window.location.href = "/riwayatpesanan")}
                  >
                    <div
                      className="font-inter font-semibold text-black text-start lg:text-[1rem]"
                    >
                      Riwayat Pesanan
                    </div>
                  </button>
                </div>
                <div className="py-1 xl:py-[0.4vw] 2xl:py-1">
                  <button
                    className="flex items-center w-full justify-center py-2 border border-black rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-[1.02] active:bg-gray active:bg-opacity-10 active:scale-100"
                    onClick={() => (window.location.href = "/trackingorder")}
                  >
                    <div
                      className="font-inter font-semibold text-black text-start lg:text-[1rem]"
                    >
                      Tracking My Order
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center  xl:items-start xl:justify-start">
              <div className="w-full flex flex-col ">
                <TextfieldProfile
                  title="Nama"
                  placeholder={profile.nama_pembeli}
                  type="text"
                  readOnly={true}
                  className={
                    "font-inter font-medium text-[1rem] md:text-[1.2rem] lg:text-[24px] focus:outline-none w-[80vw]  md:w-[626px] xl:w-[700px] lg:w-[480px] 2xl:w-full "
                  }
                />
                <TextfieldProfile
                  title="Email"
                  placeholder={profile.email_pembeli}
                  className={
                    "font-inter font-medium text-[1rem] md:text-[1.2rem] lg:text-[24px] focus:outline-none w-[80vw]  md:w-[626px] xl:w-[700px] lg:w-[480px] 2xl:w-full"
                  }
                  type="email"
                  readOnly={true}
                />
                <TextfieldProfile
                  title="Contact Number"
                  placeholder={profile.kontak_pembeli}
                  className={
                    "font-inter font-medium text-[1rem] md:text-[1.2rem] lg:text-[24px] focus:outline-none w-[80vw]  md:w-[626px] xl:w-[700px] lg:w-[480px] 2xl:w-full"
                  }
                  type="text"
                  readOnly={true}
                />
                <TextfieldProfile
                  title="Tanggal Lahir"
                  placeholder={
                    profile.tanggal_lahir
                      ? formatDate(profile.tanggal_lahir)
                      : "Tanggal tidak tersedia"
                  }
                  className={
                    "font-inter font-medium text-[1rem] md:text-[1.2rem] lg:text-[24px] focus:outline-none w-[80vw]  md:w-[626px] xl:w-[700px] lg:w-[480px] 2xl:w-full"
                  }
                  type="text"
                  readOnly={true}
                />
                <TextfieldProfile
                  title="Password"
                  placeholder="*************"
                  className={
                    "font-inter font-medium text-[1rem] md:text-[1.2rem] lg:text-[24px] focus:outline-none w-[80vw]  md:w-[626px] xl:w-[700px] lg:w-[480px] 2xl:w-full"
                  }
                  type="password"
                  readOnly={true}
                />
                <div className="lg:h-[15px]"></div>
                <div className=" hidden lg:flex justify-end">
                  <button
                    type="button"
                    className="flex items-center w-24 h-8 lg:w-36 lg:h-12 justify-center focus:outline-none font-inter font-semibold text-white text-[1rem] lg:text-[18px] bg-red-600 hover:bg-red-700 focus:ring-2 active:scale-95 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5  mb-2 transition duration-200 ease-in-out transform hover:scale-105"
                    onClick={openModal}
                  >
                    Logout
                  </button>

                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black backdrop-blur-sm bg-opacity-40">
                      <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                            onClick={closeModal}
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                          <div className="p-4 md:p-5 text-center">
                            <svg
                              className="mx-auto mb-4 text-red-600 w-12 h-12"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                              Are you sure you want to logout?
                            </h3>
                            <button
                              type="button"
                              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                              onClick={handleLogout}
                            >
                              Yes, I'm sure
                            </button>
                            <button
                              type="button"
                              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray"
                              onClick={closeModal}
                            >
                              No, cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col lg:hidden py-5">
                  <div className="p-[15px]  md:w-full lg:hidden w-full md:h-auto h-[230px] border border-black rounded-[10px] font-inter font-medium text-[14px] md:text-[20px] ">
                    <div className="border-b-[1px] flex items-start font-semibold px-[10px] py-[7px] ">
                      Pengaturan
                    </div>
                    <button
                      className="flex flex-row w-full justify-between border-b-[1px] p-[15px]"
                      onClick={() => (window.location.href = "/editprofile")}
                    >
                      <div className="flex flex-row">
                        <img src={UserIcon} alt="user" />
                        <div className="w-[10px]"></div>
                        <div className="md:text-[16px]">Edit Profile</div>
                      </div>
                      <img src={NextIcon} alt="next" />
                    </button>
                    <button
                      className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                      onClick={() => (window.location.href = "/editalamat")}
                    >
                      <div className="flex flex-row">
                        <img src={HomeIcon} alt="user" />
                        <div className="w-[10px]"></div>
                        <div className="md:text-[16px] ">Edit Alamat</div>
                      </div>
                      <img src={NextIcon} alt="next" />
                    </button>
                    <button
                      className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                      onClick={() => (window.location.href = "/riwayatpesanan")}
                    >
                      <div className="flex flex-row">
                        <img src={HistoryIcon} alt="user" />
                        <div className="w-[10px]"></div>
                        <div className="md:text-[16px] ">Riwayat Pesanan</div>
                      </div>
                      <img src={NextIcon} alt="next" />
                    </button>
                    <button
                      className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                      onClick={() => (window.location.href = "/trackingorder")}
                    >
                      <div className="flex flex-row">
                        <img src={TruckIcon} alt="user" />
                        <div className="w-[10px]"></div>
                        <div className="md:text-[16px] ">Tracking My Order</div>
                      </div>
                      <img src={NextIcon} alt="next" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentProfile;
