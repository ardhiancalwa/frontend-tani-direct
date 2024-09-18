import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import TextfieldProfile from "../../components/common/textfieldProfile";
// import { useSnackbar } from "notistack";
import axios from "axios";
import request from "../../utils/request";
import LoadingScreen from "../../components/common/loading";
import toast from "react-hot-toast";

const cookies = new Cookies();

const ContentEditProfileToko = () => {
  const [updatedProfile, setUpdatedProfile] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userToken = cookies.get("token_petani");
    const fetchData = () => {
      const petaniID = cookies.get("petaniID");
      setLoading(true);

      request
        .get(`/petani/${petaniID}`)
        .then((res) => {
          const data = res.data.data;
          console.log("Received data:", data);
          setUpdatedProfile(res.data.data);
          setUpdatedProfile({
            ...data,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
          setErrorMessage(
            error.response ? error.response.data.message : error.message
          );
          setLoading(false);
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
    setLoading(true);

    if (!updatedProfile) {
      console.error("Updated profile is undefined");
      return;
    }

    console.log("Updated profile before update:", updatedProfile);

    const { petaniID, createdAt, updatedAt, ...dataToUpdate  } = updatedProfile;
    axios
      .put(
        `https://backend-tanidirect-production.up.railway.app/petani/${petaniID}`,
        dataToUpdate
      )
      .then((response) => {
        const dataUser = response.data.data;
        // console.log("Updated profile response:", dataUser);
        // console.log(response.data.data);
        setUpdatedProfile(dataUser);
        setLoading(false);
        // toast.success("Profile updated successfully");
        toast.success("Successfully updated");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(
          error.response ? error.response.data.message : error.message
        );
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
      {loading ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        <div>
          <div key={updatedProfile.petaniID}>``
            <div className="h-[20px] lg:h-10"></div>
            <TextfieldProfile
              title={"Nama Toko"}
              placeholder={updatedProfile.nama_petani}
              type={"text"}
              name={"nama_petani"}
              value={updatedProfile?.nama_petani || ""}
              onChange={handleInputChange}
              className={
                "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[325px] md:w-[627px] lg:w-[900px] 2xl:w-screen"
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
                      className="font-inter font-medium focus:outline-none text-[12px] md:text-[16px] lg:text-[24px] h-[67px] lg:h-[171px] resize-none w-[325px] md:w-[627px] lg:w-[862px] 2xl:w-[1850px]"
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
                "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[325px] md:w-[627px] lg:w-[900px] 2xl:w-screen"
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
                "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[325px] md:w-[627px] lg:w-[900px] 2xl:w-screen"
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
                "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[325px] md:w-[627px] lg:w-[900px] 2xl:w-screen"
              }
            />
            <div className="flex flex-row justify-start py-5">
              <button
                className="flex items-center justify-center border-2 border-primary rounded-md w-[110px] h-[40px] md:w-[142px] md:h-[45px] lg:w-[180px] lg:h-[55px] md:px-[33px] lg:px-11 py-2 font-inter font-medium text-primary text-[16px] md:text-[20px] lg:text-[28px] "
                onClick={() => window.history.back()}
              >
                Cancel
              </button>
              <div className="w-[24px] lg:w-10"></div>
              <button
                className="flex items-center justify-center bg-primary rounded-md w-[110px] h-[40px] md:w-[142px] md:h-[45px] lg:w-[180px] lg:h-[55px] md:px-[33px] lg:px-11 py-2 font-inter font-medium text-white text-[16px] md:text-[20px] lg:text-[28px]"
                onClick={handleUpdate}
              >
                Save
              </button>
              {/* {errorMessage && (
                <div className="text-red-600 mt-4 text-[16px] md:text-[20px] lg:text-[28px]">
                  {errorMessage}
                </div>
              )} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentEditProfileToko;
