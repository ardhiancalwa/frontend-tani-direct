import React, { useEffect, useState } from "react";
import TextfieldProfile from "../../components/common/textfieldProfile";
import DropdownValue from "../../components/common/dropdown_value";
import Cookies from "universal-cookie";
import axios from "axios";
import request from "../../utils/request";
import toast from "react-hot-toast";
import LoadingScreen from "../../components/common/loading";

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
  // // const [profile, setProfile] = useState({});
  // const [updatedProfile, setUpdatedProfile] = useState({});
  // // const { enqueueSnackbar } = useSnackbar();
  // const [errorMessage, setErrorMessage] = useState("");
  // const [loading, setLoading] = useState(false);

  const [updatedProfile, setUpdatedProfile] = useState({});
  const [originalProfile, setOriginalProfile] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const userToken = cookies.get("token_pembeli");
  //   const fetchData = () => {
  //     const pembeliID = cookies.get("pembeliID");
  //     setLoading(true);
  //     request
  //       .get(`/pembeli/${pembeliID}`)
  //       .then((res) => {
  //         const data = res.data.data;
  //         console.log("Received data:", data);
  //         const date = new Date(data.tanggal_lahir);
  //         setUpdatedProfile(res.data.data);
  //         setUpdatedProfile({
  //           ...data,
  //           tanggal_lahir: {
  //             day: date.getUTCDate(),
  //             month: date.getUTCMonth() + 1,
  //             year: date.getUTCFullYear(),
  //           },
  //         });
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log("Error fetching data:", error);
  //         setErrorMessage(
  //           error.response ? error.response.data.message : error.message
  //         );
  //         setLoading(false);
  //       });
  //   };

  //   if (userToken) {
  //     fetchData(userToken);
  //   } else {
  //     console.log("No token found");
  //   }
  // }, []);

  useEffect(() => {
    const userToken = cookies.get("token_pembeli");
    const fetchData = () => {
      const pembeliID = cookies.get("pembeliID");
      setLoading(true);
      request
        .get(`/pembeli/${pembeliID}`)
        .then((res) => {
          const data = res.data.data;
          const date = new Date(data.tanggal_lahir);

          // Simpan data asli di originalProfile
          setOriginalProfile({
            ...data,
            tanggal_lahir: {
              day: date.getUTCDate(),
              month: date.getUTCMonth() + 1,
              year: date.getUTCFullYear(),
            },
          });

          // Set data untuk di-update di updatedProfile
          setUpdatedProfile({
            ...data,
            tanggal_lahir: {
              day: date.getUTCDate(),
              month: date.getUTCMonth() + 1,
              year: date.getUTCFullYear(),
            },
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

  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   if (!updatedProfile) {
  //     console.error("Updated profile is undefined");
  //     return;
  //   }

  //   console.log("Updated profile before update:", updatedProfile);

  //   const { day, month, year } = updatedProfile.tanggal_lahir;

  //   // Format date to "YYYY-MM-DD"
  //   const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
  //     day
  //   ).padStart(2, "0")}`;

  //   // Exclude pembeliID, createdAt, and updatedAt from the dataToUpdate
  //   const { pembeliID, createdAt, updatedAt, tanggal_lahir, ...dataToUpdate } = updatedProfile;

  //   // Add the formatted date back to dataToUpdate
  //   dataToUpdate.tanggal_lahir = formattedDate;

  //   axios
  //     .put(
  //       `https://backend-tanidirect-production.up.railway.app/pembeli/${pembeliID}`,
  //       dataToUpdate
  //     )
  //     .then((response) => {
  //       const dataUser = response.data.data;
  //       setUpdatedProfile(dataUser);
  //       setLoading(false);
  //       toast.success("Successfully updated");
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       toast.error(
  //         error.response ? error.response.data.message : error.message
  //       );
  //     });
  // };

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!updatedProfile) {
      console.error("Updated profile is undefined");
      setLoading(false);
      return;
    }

    // Format tanggal lahir
    const { day, month, year } = updatedProfile.tanggal_lahir;
    const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    // Exclude pembeliID, createdAt, and updatedAt from the dataToUpdate
    const { pembeliID, createdAt, updatedAt, tanggal_lahir, ...dataToUpdate } =
      updatedProfile;

    // Add the formatted date back to dataToUpdate
    dataToUpdate.tanggal_lahir = formattedDate;

    // Filter hanya data yang diubah
    const filteredData = Object.keys(dataToUpdate).reduce((acc, key) => {
      if (dataToUpdate[key] !== originalProfile[key]) {
        acc[key] = dataToUpdate[key];
      }
      return acc;
    }, {});

    if (Object.keys(filteredData).length === 0) {
      console.log("No changes detected");
      setLoading(false);
      toast.error("No changes to update");
      return;
    }

    axios
      .put(
        `https://backend-tanidirect-production.up.railway.app/pembeli/${pembeliID}`,
        filteredData
      )
      .then((response) => {
        const dataUser = response.data.data;
        setUpdatedProfile(dataUser);
        setOriginalProfile(dataUser); // Update original profile setelah sukses
        setLoading(false);
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

  const handleDateChange = (name, value) => {
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      tanggal_lahir: {
        ...prevProfile.tanggal_lahir,
        [name]: value,
      },
    }));
  };

  return (
    <div>
      {loading ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        <div className="inline-flex flex-col w-full ">
          <div className="h-[20px] lg:h-10"></div>
          <div className="flex flex-col w-full justify-start items-start ">
            <div className="w-full ">
              <TextfieldProfile
                title={"Nama Lengkap"}
                placeholder={updatedProfile.nama_pembeli || ""}
                type={"text"}
                readOnly={false}
                name={"nama_pembeli"}
                value={updatedProfile?.nama_pembeli || ""}
                onChange={handleInputChange}
                className={
                  "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[320px] md:w-full lg:w-full 2xl:w-full"
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
                  "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[320px] md:w-full lg:w-full 2xl:w-full"
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
                  "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[320px] md:w-full lg:w-full 2xl:w-full"
                }
              />
            </div>
            <div className="flex flex-row w-full gap-5 justify-between">
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
                className={
                  " w-[110px] md:w-[130px] 2xl:w-[400px]  inline-flex lg:w-[280px]  "
                }
              />
              <DropdownValue
                title={"Bulan lahir"}
                placeholder={updatedProfile.tanggal_lahir?.month || ""}
                name="tanggal_lahir.month"
                options={months}
                value={updatedProfile.tanggal_lahir?.month || ""}
                onChange={(value) => handleDateChange("month", value)}
                className={
                  " w-[110px]  text-[12px] md:w-[130px]  2xl:w-[400px]  inline-flex lg:w-[280px]  "
                }
                // paddingLeft={"md:pl-28 lg:pl-[82px] 2xl:pl-0"}
              />
              <DropdownValue
                title={"Tahun lahir"}
                placeholder={updatedProfile.tanggal_lahir?.year || ""}
                name="tanggal_lahir.year"
                options={years}
                value={updatedProfile.tanggal_lahir?.year || ""}
                onChange={(value) => handleDateChange("year", value)}
                className={
                  " w-[104px] md:w-[135px] lg:w-[280px] 2xl:w-[400px]  inline-flex  pb-[10px]"
                }
                // paddingLeft={"md:pl-28 lg:pl-26 2xl:pl-0"}
              />
            </div>
            <div className="lg:h-[20px]"></div>
            <div className="w-full ">
              <TextfieldProfile
                title={"Password"}
                placeholder={"*************"}
                type={"password"}
                readOnly={false}
                name="password_pembeli"
                value={updatedProfile.password_pembeli || ""}
                onChange={handleInputChange}
                className={
                  "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[325px] md:w-full lg:w-full 2xl:w-full"
                }
              />
            </div>
          </div>
          <div className="h-[10px] lg:h-[0px]"></div>
          <div className="flex flex-row justify-start lg:py-10">
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
          </div>
          <div className="h-[174px] md:h-[80px] lg:h-0 "></div>
        </div>
      )}
    </div>
  );
};

export default ContentEditProfile;
