import React, { useEffect, useState } from "react";
import TextfieldProfile from "../../components/common/textfieldProfile";
import DropdownValue from "../../components/common/dropdown_value";
import Cookies from "universal-cookie";
import axios from "axios";
import { useSnackbar } from "notistack";

const cookies = new Cookies();

const months = [
  { label: "January", value: 1 },
  { label: "February", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
];

const years = Array.from({ length: 100 }, (_, i) => ({
  label: (new Date().getFullYear() - i).toString(),
  value: new Date().getFullYear() - i,
}));

const ContentEditProfile = () => {
  // const [profile, setProfile] = useState({});
  const [updatedProfile, setUpdatedProfile] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const userToken = cookies.get("token_pembeli");
    const fetchData = (token) => {
      const pembeliID = cookies.get("pembeliID");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get(`http://localhost:4000/pembeli/${pembeliID}`, config)
        .then((res) => {
          const data = res.data.data;
          console.log("Received data:", data);
          const date = new Date(data.tanggal_lahir);
          setUpdatedProfile(res.data.data);
          setUpdatedProfile({
            ...data,
            tanggal_lahir: {
              day: date.getUTCDate(),
              month: date.getUTCMonth() + 1,
              year: date.getUTCFullYear(),
            },
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
    const pembeliID = cookies.get("pembeliID");

    if (!updatedProfile) {
      console.error("Updated profile is undefined");
      return;
    }

    console.log("Updated profile before update:", updatedProfile);

    const { day, month, year } = updatedProfile.tanggal_lahir;

    // Format date to "YYYY-MM-DDTHH:MM:SS.SSSZ"
    const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}T00:00:00.000Z`;

    const dataToUpdate = {
      ...updatedProfile,
      tanggal_lahir: formattedDate,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .put(`http://localhost:4000/pembeli/${pembeliID}`, dataToUpdate, config)
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

  const handleDateChange = (name, value) => {
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      tanggal_lahir: {
        ...prevProfile.tanggal_lahir,
        [name]: value,
      },
    }));
  };

  if (!updatedProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="h-[20px] lg:h-10"></div>
      <TextfieldProfile
        title={"Nama Lengkap"}
        placeholder={updatedProfile.nama_pembeli || ""}
        type={"text"}
        readOnly={false}
        name={"nama_pembeli"}
        value={updatedProfile?.nama_pembeli || ""}
        onChange={handleInputChange}
        className={
          "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
        }
      />
      <TextfieldProfile
        title={"Email"}
        placeholder={updatedProfile.email_pembeli || ""}
        type={"email"}
        readOnly={false}
        name={"email_pembeli"}
        value={updatedProfile?.email_pembeli || ""}
        onChange={handleInputChange}
        className={
          "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
        }
      />
      <TextfieldProfile
        title={"Contact Number"}
        placeholder={updatedProfile.kontak_pembeli || ""}
        type={"text"}
        readOnly={false}
        name={"kontak_pembeli"}
        value={updatedProfile?.kontak_pembeli || ""}
        onChange={handleInputChange}
        className={
          "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
        }
      />
      <div className="flex flex-row md:w-[700px] lg:w-[1525px] justify-between">
        <DropdownValue
          title={"Tanggal lahir"}
          placeholder={updatedProfile.tanggal_lahir?.day || ""}
          name="tanggal_lahir.day"
          options={Array.from({ length: 31 }, (_, i) => ({
            label: i + 1,
            value: i + 1,
          }))}
          value={updatedProfile.tanggal_lahir?.day || ""}
          onChange={(value) => handleDateChange("day", value)}
          className={"relative w-[104px] md:w-[184px] lg:w-[400px] "}
        />
        <DropdownValue
          title={"Bulan lahir"}
          placeholder={updatedProfile.tanggal_lahir?.month || ""}
          name="tanggal_lahir.month"
          options={months}
          value={updatedProfile.tanggal_lahir?.month || ""}
          onChange={(value) => handleDateChange("month", value)}
          className={"relative w-[104px] md:w-[184px] lg:w-[400px] "}
          paddingLeft={"md:pl-24 lg:pl-0"}
        />
        <DropdownValue
          title={"Tahun lahir"}
          placeholder={updatedProfile.tanggal_lahir?.year || ""}
          name="tanggal_lahir.year"
          options={years}
          value={updatedProfile.tanggal_lahir?.year || ""}
          onChange={(value) => handleDateChange("year", value)}
          className={"relative w-[104px] md:w-[184px] lg:w-[400px] pb-[10px]"}
          paddingLeft={"md:pl-24 lg:pl-0"}
        />
      </div>
      <div className="lg:h-[20px]"></div>
      <TextfieldProfile
        title={"Password"}
        placeholder={"*************"}
        type={"password"}
        readOnly={false}
        name="password_pembeli"
        value={updatedProfile.password_pembeli || ""}
        onChange={handleInputChange}
        className={
          "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
        }
      />
      <div className="h-[10px] lg:h-[26px]"></div>
      <div className="flex flex-row justify-start">
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
        {errorMessage && (
          <div className="text-red-600 mt-4 text-[16px] md:text-[20px] lg:text-[28px]">
            {errorMessage}
          </div>
        )}
      </div>
      <div className="h-[174px] md:h-[80px] lg:h-0 "></div>
    </div>
  );
};

export default ContentEditProfile;
