import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import TextfieldProfile from "../../components/common/textfieldProfile";
import { useSnackbar } from "notistack";
import axios from "axios";

const cookies = new Cookies();

const ContentEditProfileToko = () => {
  const [updatedProfile, setUpdatedProfile] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const userToken = cookies.get("token_petani");
    const fetchData = (token) => {
      const pembeliID = cookies.get("petaniID");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get(`http://localhost:4000/petani/${pembeliID}`, config)
        .then((res) => {
          const data = res.data.data;
          console.log("Received data:", data);
          setUpdatedProfile(res.data.data);
          setUpdatedProfile({
            ...data,
          });
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
          setErrorMessage(
            error.response ? error.response.data.message : error.message
          );
        });
    };

    if (userToken) {
      fetchData(userToken);
    } else {
      console.log("No token found");
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const token = cookies.get("token_pembeli");
    const petaniID = cookies.get("petaniID");

    if (!updatedProfile) {
      console.error("Updated profile is undefined");
      return;
    }

    console.log("Updated profile before update:", updatedProfile);

    const dataToUpdate = {
      ...updatedProfile,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .put(`http://localhost:4000/petani/${petaniID}`, dataToUpdate, config)
      .then((response) => {
        const dataUser = response.data.data;
        console.log("Updated profile response:", dataUser);
        console.log(response.data.data);
        setUpdatedProfile(response.data);
        enqueueSnackbar("Profile updated successfully", { variant: "success" });
        setErrorMessage("Successfully updated");
      })
      .catch((error) => {
        enqueueSnackbar("Error updating profile", { variant: "error" });
        if (error.message === "Network Error") {
          setErrorMessage(
            "Network error. Please check your internet connection."
          );
        } else {
          setErrorMessage(
            error.response ? error.response.data.message : error.message
          );
        }
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="h-[20px] lg:h-10"></div>
      <TextfieldProfile
        title={"Nama Toko"}
        placeholder={updatedProfile.nama_petani}
        type={"text"}
        name={"nama_petani"}
        value={updatedProfile?.nama_petani || ""}
        onChange={handleInputChange}
        className={
          "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
        }
        readOnly={false}
      />
      <div className="pb-3">
        <div className="flex flex-col items-start">
          <div className="font-inter font-semibold text-black text-[14px] md:text-[20px] lg:text-[26px]">
            Deskripsi Toko
          </div>
          <div style={{ height: 7 }}></div>
          <form className="flex items-center justify-start ">
            <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
              <textarea
                placeholder={updatedProfile.deskripsi}
                className="font-inter font-medium focus:outline-none text-[12px] md:text-[16px] lg:text-[24px] h-[67px] lg:h-[171px] resize-none w-[350px] md:w-[700px] lg:w-[1380px]"
                readOnly={false}
                name={"deskripsi"}
                value={updatedProfile?.deskripsi || ""}
                onChange={handleInputChange}
              />
            </span>
          </form>
        </div>
      </div>
      <TextfieldProfile
        title={"Email"}
        placeholder={updatedProfile.email_petani}
        type={"email"}
        name={"email_petani"}
        value={updatedProfile?.email_petani || ""}
        onChange={handleInputChange}
        className={
          "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
        }
        readOnly={false}
      />
      <TextfieldProfile
        title="Contact Number"
        placeholder={updatedProfile.no_telepon_petani}
        type="text"
        name={"no_telepon_petani"}
        value={updatedProfile?.no_telepon_petani || ""}
        onChange={handleInputChange}
        readOnly={false}
        className={
          "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
        }
      />
      <TextfieldProfile
        title="Password"
        placeholder="*************"
        type="password"
        name={"password_petani"}
        value={updatedProfile?.password_petani || ""}
        onChange={handleInputChange}
        readOnly={false}
        className={
          "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
        }
      />
      <div className="flex flex-row justify-start pt-[20px] lg:pt-0">
        <button className="border-2 border-primary rounded-md pl-[26px] pr-[26px] lg:pl-11 lg:pr-11 pt-2 pb-2 font-inter font-medium text-primary text-[16px] lg:text-[28px] ">
          Cancel
        </button>
        <div className="w-[24px] lg:w-10"></div>
        <button className="bg-primary rounded-md pl-[26px] pr-[26px] lg:pl-14  lg:pr-14 pt-2 pb-2 font-inter font-medium text-white text-[16px] lg:text-[28px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default ContentEditProfileToko;
