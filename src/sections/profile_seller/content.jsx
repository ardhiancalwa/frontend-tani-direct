import React, { useEffect, useRef, useState } from "react";
import TextfieldProfile from "../../components/common/textfieldProfile";
import ProfileImage from "../../assets/images/image_profile_page.png";

import UserIcon from "../../assets/images/user_profile.svg";
import HomeIcon from "../../assets/images/menu_pesanan.svg";
import TruckIcon from "../../assets/images/input.svg";
import HistoryIcon from "../../assets/images/history_profile.svg";
import NextIcon from "../../assets/images/next_profile.svg";
import BackIcon from "../../assets/images/back.svg";
import CloseIcon from "../../assets/images/close.svg";
import CheckIcon from "../../assets/images/check4.svg";
import Cookies from "universal-cookie";
import axios from "axios";
import request from "../../utils/request";
import DropdownValue from "../../components/common/dropdown_value";
import DropdownValueProfile from "../../components/common/dropdown_value_profile";
import LoadingScreen from "../../components/common/loading";
const cookies = new Cookies();

const provinces = [
  { label: "Aceh", value: "Aceh" },
  { label: "Bali", value: "Bali" },
  { label: "East Java", value: "East Java" },
  { label: "West Java", value: "West Java" },
  { label: "Central Java", value: "Central Java" },
  { label: "Yogyakarta", value: "Yogyakarta" },
  { label: "North Sumatra", value: "North Sumatra" },
  { label: "South Sulawesi", value: "South Sulawesi" },
  { label: "Papua", value: "Papua" },
  { label: "Riau", value: "Riau" },
];

const cities = [
  { label: "Pekanbaru", value: "Pekanbaru" },
  { label: "Dumai", value: "Dumai" },
  { label: "Bengkalis", value: "Bengkalis" },
  { label: "Rokan Hulu", value: "Rokan Hulu" },
  { label: "Siak", value: "Siak" },
  { label: "Kampar", value: "Kampar" },
  { label: "Indragiri Hulu", value: "Indragiri Hulu" },
  { label: "Kuantan Singingi", value: "Kuantan Singingi" },
  { label: "Pelalawan", value: "Pelalawan" },
  { label: "Rokan Hilir", value: "Rokan Hilir" },
];

const districts = [
  { label: "Pekanbaru Kota", value: "Pekanbaru Kota" },
  { label: "Sail", value: "Sail" },
  { label: "Tenayan Raya", value: "Tenayan Raya" },
  { label: "Marpoyan Damai", value: "Marpoyan Damai" },
  { label: "Rumbai", value: "Rumbai" },
  { label: "Rumbai Pesisir", value: "Rumbai Pesisir" },
  { label: "Bukit Raya", value: "Bukit Raya" },
  { label: "Tampan", value: "Tampan" },
  { label: "Sukajadi", value: "Sukajadi" },
  { label: "Lima Puluh", value: "Lima Puluh" },
];

const postalCodes = [
  { label: "28111", value: "28111" },
  { label: "28112", value: "28112" },
  { label: "28113", value: "28113" },
  { label: "28114", value: "28114" },
  { label: "28115", value: "28115" },
  { label: "28116", value: "28116" },
  { label: "28117", value: "28117" },
  { label: "28118", value: "28118" },
  { label: "28119", value: "28119" },
  { label: "28121", value: "28121" },
];

const ContentPetaniProfilePage = (profileDataPetani) => {
  const [isChecked, setIsChecked] = useState(false);
  const [profile, setProfile] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showModalAddress, setShowModalAddress] = useState(false);
  const [updatedAlamat, setUpdatedAlamat] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const openModalAddress = () => setShowModalAddress(true);
  const closeModalAddress = () => setShowModalAddress(false);
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleClick = () => {
    // setIsChecked(!isChecked);
    // onItemCheck(item.produkID, !isChecked);
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
  };

  const handleLogout = async () => {
    try {
      // Remove token from local storage
      cookies.remove("token_petani");
      cookies.remove("petaniID");

      // Redirect to login page
      window.location.href = "/loginseller";
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = (token) => {
    const petaniID = cookies.get("petaniID");
    setLoading(true);
    request
      .get(`/petani/${petaniID}`)
      .then((res) => {
        setProfile(res.data.data);
        setLoading(false);
        console.log(res.data.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    const userToken = cookies.get("token_petani");
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

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     // handle the file upload logic here
  //     console.log(file);
  //   }
  // };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setProfile((prevProfile) => ({
        ...prevProfile,
        image_petani: `user/${file.name}`,
      }));
      console.log(file);
    }
  };

  const handleUpdateImage = async () => {
    const petaniID = cookies.get("petaniID");
    setLoading(true);

    const formData = new FormData();
    if (selectedFile) {
      formData.append("image_petani", selectedFile);
    }

    try {
      const response = await axios.put(
        `https://backend-tanidirect-production.up.railway.app/petani/${petaniID}`,
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

  const handleInputDropdownChange = (name, value) => {
    setUpdatedAlamat((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="lg:pl-16 2xl:px-5 w-full mt-16 md:mt-36 2xl:mt-28 " key={profileDataPetani.petaniID}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="flex flex-col lg:flex-row lg:gap-5 ">
          <div className="h-[20px] md:h-[30px]"></div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-[173px] md:w-[223px] lg:w-[270px] 2xl:w-96 items-center border border-gray rounded-md 2xl:rounded-xl p-[15px]">
              <img
                src={`${imageUrl}${profile.image_petani}`}
                className="w-[139px] h-[121px] md:w-[189px] md:h-[155px] lg:w-[200px] lg:h-[200px] 2xl:w-72 2xl:h-72 rounded-full object-cover"
                alt="profile_photo"
              />
              <div style={{ height: 25 }}></div>
              <button
                className="flex items-center w-36 md:w-[189px] h-auto lg:w-full justify-center py-2 border border-black rounded active:scale-[0.98]"
                onClick={handleButtonClick}
              >
                <div className="font-inter text-[10px] md:text-[14px] lg:text-[18px] font-semibold text-black text-start">
                  Pilih foto
                </div>
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <div className="lg:h-[25px] md:h-[10px] h-[10px] "></div>
              <div className="w-auto">
                <div className="font-inter font-medium lg:font-semibold text-black text-start text-[8px] md:text-[10px] 2xl:text-sm">
                  Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi
                  file yang diperbolehkan: .JPG .JPEG .PNG
                </div>
              </div>
            </div>
            <div style={{ height: 20 }}></div>
            <div className="lg:w-[270px] 2xl:w-96 hidden lg:flex lg:flex-col">
              <div className="py-1">
                <button
                  className="flex items-center w-full justify-center py-2 border border-black rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-[1.02] active:bg-gray active:bg-opacity-10 active:scale-100"
                  onClick={() => (window.location.href = "/editprofiletoko")}
                >
                  <div className="font-inter font-semibold text-black text-start lg:text-[1rem]">
                    Edit Profile
                  </div>
                </button>
              </div>
              <div className="py-1">
                <button
                  className="flex items-center w-full justify-center py-2 border border-black rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-[1.02] active:bg-gray active:bg-opacity-10 active:scale-100"
                  // onClick={openModalAddress}
                  onClick={() => (window.location.href = "/editalamatseller")}
                >
                  <div className="font-inter font-semibold text-black text-start lg:text-[1rem]">
                    Edit Alamat
                  </div>
                </button>
              </div>
              <div className="py-1">
                <button
                  className="flex items-center w-full justify-center py-2 border border-black rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-[1.02] active:bg-gray active:bg-opacity-10 active:scale-100"
                  onClick={() => (window.location.href = "/myproduct")}
                >
                  <div className="font-inter font-semibold text-black text-start lg:text-[1rem]">
                    My Product
                  </div>
                </button>
              </div>
              <div className="py-1">
                <button
                  className="flex items-center w-full justify-center py-2 border border-black rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-[1.02] active:bg-gray active:bg-opacity-10 active:scale-100"
                  onClick={() => (window.location.href = "/menupesanan")}
                >
                  <div className="font-inter font-semibold text-black text-start lg:text-[1rem]">
                    Menu Pesanan
                  </div>
                </button>
              </div>
              <div className="py-1">
                <button
                  className="flex items-center w-full justify-center py-2 border border-black rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-[1.02] active:bg-gray active:bg-opacity-10 active:scale-100"
                  onClick={() => (window.location.href = "/historytransaction")}
                >
                  <div className="font-inter font-semibold text-black text-start lg:text-[1rem]">
                    History Transaction
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div style={{ width: 50 }}></div>
          <div className="w-full  flex  justify-center items-center  xl:items-start xl:justify-start">
            <div className="lg:w-full  flex flex-col ">
              <TextfieldProfile
                title="Nama Toko"
                placeholder={profile.nama_petani}
                type="text"
                readOnly={true}
                className={
                  "font-inter font-medium text-[1rem] md:text-[1.2rem] lg:text-[24px] focus:outline-none w-[80vw]  md:w-[626px] xl:w-[700px] lg:w-[480px] 2xl:w-full "
                }
              />
              <div className="pb-3">
                <div className="flex flex-col items-start">
                  <div className="font-inter font-semibold text-black text-[12px] md:text-[14px] lg:text-[24px]">
                    Deskripsi Toko
                  </div>
                  <div style={{ height: 7 }}></div>
                  <form className="flex items-center justify-start ">
                    <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
                      <textarea
                        placeholder={profile.deskripsi}
                        className="font-inter font-medium focus:outline-none text-[1rem] md:text-[1.2rem] lg:text-[24px] h-[67px] lg:h-[189px] resize-none w-[80vw]  md:w-[78vw] lg:w-[50vw] xl:w-[60vw] 2xl:w-[62vw]"
                        readOnly={true}
                      />
                    </span>
                  </form>
                </div>
              </div>

              <TextfieldProfile
                title="Contact Number"
                placeholder={profile.no_telepon_petani}
                type="text"
                readOnly={true}
                className={
                  "font-inter font-medium text-[1rem] md:text-[1.2rem] lg:text-[24px] focus:outline-none w-[80vw]  md:w-[626px] xl:w-[700px] lg:w-[480px] 2xl:w-full "
                }
              />

              <TextfieldProfile
                title="Email"
                placeholder={profile.email_petani}
                type="email"
                readOnly={true}
                className={
                  "font-inter font-medium text-[1rem] md:text-[1.2rem] lg:text-[24px] focus:outline-none w-[80vw]  md:w-[626px] xl:w-[700px] lg:w-[480px] 2xl:w-full "
                }
              />
              <div className=" hidden lg:flex justify-end">
                <button
                  type="button"
                  className="flex items-center w-24 h-8 lg:w-36 lg:h-12 justify-center focus:outline-none font-inter font-semibold text-white text-[12px] lg:text-[18px] bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition duration-200 ease-in-out transform hover:scale-105"
                  onClick={openModal}
                >
                  Logout
                </button>

                {showModal && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
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
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
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

                {showModalAddress && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-white backdrop-blur-sm bg-opacity-20">
                    <div className="relative p-4 w-full max-w-6xl max-h-full">
                      <div className="bg-primary bg-opacity-90 p-10 rounded-xl">
                        <div className="flex flex-row justify-between">
                          <div
                            className="flex flex-row items-center justify-start hover:scale-105 active:scale-100 cursor-pointer"
                            onClick={closeModalAddress}
                          >
                            <img src={BackIcon} alt="back" />
                            <div className="pl-[10px] font-inter text-[22px] font-bold text-white">
                              Back
                            </div>
                          </div>
                          <div className="font-inter text-[28px] font-bold text-white">
                            Edit Lokasi Produk Dihasilkan
                          </div>
                          <button>
                            <img
                              src=""
                              className="hover:scale-105 active:scale-100"
                            />
                          </button>
                        </div>
                        <div className="h-[60px]"></div>
                        <div className="hidden md:flex lg:flex flex-row justify-between md:w-[700px] lg:w-[1005px] 2xl:w-[900px]">
                          <DropdownValueProfile
                            title="Provinsi"
                            textColor={"text-white"}
                            name="provinsi"
                            value={updatedAlamat.provinsi || ""}
                            onChange={(value) =>
                              handleInputDropdownChange("provinsi", value)
                            }
                            className="relative w-[163px] md:w-[140px] lg:w-[258px] 2xl:w-[150px]"
                            placeholder={
                              updatedAlamat.provinsi || "Select Province"
                            }
                            options={provinces}
                          />
                          <DropdownValueProfile
                            title="Kota"
                            textColor={"text-white"}
                            name="kota"
                            value={updatedAlamat.kota || ""}
                            onChange={(value) =>
                              handleInputDropdownChange("kota", value)
                            }
                            className="relative w-[163px] md:w-[140px] lg:w-[258px] 2xl:w-[150px]"
                            placeholder={updatedAlamat.kota || "Select City"}
                            options={cities}
                          />
                          <DropdownValueProfile
                            title="Kecamatan"
                            textColor={"text-white"}
                            name="kecamatan"
                            value={updatedAlamat.kecamatan || ""}
                            onChange={(value) =>
                              handleInputDropdownChange("kecamatan", value)
                            }
                            className="relative w-[163px] md:w-[140px] lg:w-[258px] 2xl:w-[150px]"
                            placeholder={
                              updatedAlamat.kecamatan || "Select District"
                            }
                            options={districts}
                          />
                        </div>
                        <div className="h-[27px]"></div>
                        <div className="flex flex-row items-center justify-start">
                          <button
                            className={`lg:w-8 lg:h-8 border w-[15px] h-[15px] md:w-5 md:h-5 border-black  rounded-sm lg:rounded-lg bg-white flex items-center justify-center`}
                            onClick={handleClick}
                          >
                            {isChecked ? (
                              <img src={CheckIcon} alt="check" />
                            ) : (
                              ""
                            )}
                          </button>
                          <div className="w-[15px]"></div>
                          <div className="font-inter text-[20px] font-medium text-white">
                            Saya menyetujui Syarat & Ketentuan serta Kebijakan
                            Privasi pengaturan alamat di TaniDirect.
                          </div>
                        </div>
                        <div className="h-[64px]"></div>
                        <div className="flex items-center justify-center">
                          <button
                            className="flex items-center justify-center w-[428px] h-[44px] rounded-xl bg-white font-inter text-[20px] font-bold text-primary duration-100 hover:shadow-md shadow-none hover:shadow-primary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            data-ripple-light="true"
                            onClick={console.log("Update data adderess")}
                          >
                            Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:hidden py-5">
                <div className="px-[15px] py-[10px] md:w-[640px] w-full md:h-auto h-auto border border-black rounded-[10px] font-inter font-medium text-[14px] md:text-[20px]">
                  <div className="border-b-[1px] flex items-start font-semibold px-[10px] py-[7px] ">
                    Pengaturan
                  </div>
                  <button
                    className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                    onClick={() => (window.location.href = "/editprofiletoko")}
                  >
                    <div className="flex flex-row">
                      <img src={UserIcon} alt="user" />
                      <div className="w-[10px]"></div>
                      <div>Edit Profile</div>
                    </div>
                    <img src={NextIcon} alt="next" />
                  </button>
                  <button
                    className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                    onClick={() => (window.location.href = "/editalamatseller")}
                  >
                    <div className="flex flex-row">
                      <img src={UserIcon} alt="user" />
                      <div className="w-[10px]"></div>
                      <div>Edit Alamat</div>
                    </div>
                    <img src={NextIcon} alt="next" />
                  </button>
                  <button
                    className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                    onClick={() => (window.location.href = "/myproduct")}
                  >
                    <div className="flex flex-row">
                      <img src={HomeIcon} alt="user" />
                      <div className="w-[10px]"></div>
                      <div className="md:text-[16px]">My Product</div>
                    </div>
                    <img src={NextIcon} alt="next" />
                  </button>
                  <button
                    className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                    onClick={() => (window.location.href = "/menupesanan")}
                  >
                    <div className="flex flex-row">
                      <img src={HomeIcon} alt="user" />
                      <div className="w-[10px]"></div>
                      <div className="md:text-[16px]">Menu Pesanan</div>
                    </div>
                    <img src={NextIcon} alt="next" />
                  </button>
                  <button
                    className="flex flex-row w-full justify-between border-b-[1px] py-[10px] px-[15px]"
                    onClick={() =>
                      (window.location.href = "/historytransaction")
                    }
                  >
                    <div className="flex flex-row">
                      <img src={HomeIcon} alt="user" />
                      <div className="w-[10px]"></div>
                      <div className="md:text-[16px]">History Transaction</div>
                    </div>
                    <img src={NextIcon} alt="next" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentPetaniProfilePage;
