import React, { useEffect, useState } from "react";
import TextfieldProfile from "../../components/common/textfieldProfile";
// import DropdownValue from "../../components/common/dropdown_value";
import Cookies from "universal-cookie";
import axios from "axios";
// import { useSnackbar } from "notistack";
import request from "../../utils/request";
import toast from "react-hot-toast";
import DropdownValueAlamat from "../../components/common/dropdown_value_alamat";
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

const ContentEditAlamat = () => {
  // const [updatedAlamat, setUpdatedAlamat] = useState({});
  // // const { enqueueSnackbar } = useSnackbar();
  // const [errorMessage, setErrorMessage] = useState("");
  // const [loading, setLoading] = useState(false);

  const [updatedAlamat, setUpdatedAlamat] = useState({});
  const [initialAlamat, setInitialAlamat] = useState({}); // State for initial data
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const userToken = cookies.get("token_pembeli");
  //   const pembeliID = cookies.get("pembeliID");

  //   if (!userToken || !pembeliID) {
  //     console.log("No token or pembeliID found");
  //     return;
  //   }

  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await request.get(`/pembeli/${pembeliID}`);
  //       console.log("Received data:", res.data.data);
  //       setUpdatedAlamat(res.data.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log("Error fetching data:", error);
  //       setErrorMessage(
  //         error.response ? error.response.data.message : error.message
  //       );
  //       toast.error(error.message);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const userToken = cookies.get("token_pembeli");
    const pembeliID = cookies.get("pembeliID");

    if (!userToken || !pembeliID) {
      console.log("No token or pembeliID found");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await request.get(`/pembeli/${pembeliID}`);
        setUpdatedAlamat(res.data.data);
        setInitialAlamat(res.data.data); // Set initial data here
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setErrorMessage(
          error.response ? error.response.data.message : error.message
        );
        toast.error(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUpdatedAlamat((prevProfile) => ({
  //     ...prevProfile,
  //     [name]: value,
  //   }));
  // };

  // const handleInputDropdownChange = (name, value) => {
  //   setUpdatedAlamat((prevProfile) => ({
  //     ...prevProfile,
  //     [name]: value,
  //   }));
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUpdatedAlamat((prevProfile) => ({
  //     ...prevProfile,
  //     [name]: value,
  //   }));
  // };
  
  // const handleInputDropdownChange = (name, value) => {
  //   setUpdatedAlamat((prevProfile) => ({
  //     ...prevProfile,
  //     [name]: value,
  //   }));
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAlamat((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleInputDropdownChange = (name, value) => {
    setUpdatedAlamat((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  

  // const handleUpdateAlamat = async (e) => {
  //   e.preventDefault();

  //   if (!updatedAlamat) {
  //     console.error("Updated alamat is undefined");
  //     return;
  //   }

  //   console.log("Updated alamat before update:", updatedAlamat);

  //   const { pembeliID, createdAt, updatedAt, ...dataToUpdate } = updatedAlamat;

  //   try {
  //     const res = await axios.put(
  //       `https://backend-tanidirect-production.up.railway.app/pembeli/${pembeliID}`,
  //       // `http://localhost:4000/pembeli/${pembeliID}`,
  //       dataToUpdate
  //     );
  //     console.log("Updated alamat res:", res.data.data);
  //     setUpdatedAlamat(res.data.data);
  //     toast.success("Successfully updated");
  //   } catch (error) {
  //     setLoading(false);
  //     console.log("Error response:", error.response);
  //     setErrorMessage(error.response?.data?.message || "An error occurred");
  //     toast.error(error.response?.data?.message || error.message);
  //   }
  // };

  // const handleUpdateAlamat = async (e) => {
  //   e.preventDefault();
  
  //   if (!updatedAlamat) {
  //     console.error("Updated alamat is undefined");
  //     return;
  //   }
  
  //   const { pembeliID, createdAt, updatedAt, ...dataToUpdate } = updatedAlamat;
  
  //   try {
  //     const res = await axios.put(
  //       `https://backend-tanidirect-production.up.railway.app/pembeli/${pembeliID}`,
  //       dataToUpdate
  //     );
  //     setUpdatedAlamat(res.data.data);
  //     toast.success("Successfully updated");
  //   } catch (error) {
  //     setLoading(false);
  //     setErrorMessage(error.response?.data?.message || "An error occurred");
  //     toast.error(error.response?.data?.message || error.message);
  //   }
  // };

  const handleUpdateAlamat = async (e) => {
    e.preventDefault();

    if (!updatedAlamat) {
      console.error("Updated alamat is undefined");
      return;
    }

    // Compare initial and updated data to find changed fields
    const dataToUpdate = {};
    Object.keys(updatedAlamat).forEach((key) => {
      if (updatedAlamat[key] !== initialAlamat[key]) {
        dataToUpdate[key] = updatedAlamat[key];
      }
    });

    if (Object.keys(dataToUpdate).length === 0) {
      toast("No changes to update");
      return;
    }

    const { pembeliID } = updatedAlamat; // Extract pembeliID

    try {
      const res = await axios.put(
        `https://backend-tanidirect-production.up.railway.app/pembeli/${pembeliID}`,
        dataToUpdate
      );
      setUpdatedAlamat(res.data.data);
      setInitialAlamat(res.data.data); // Update the initial state with new data
      toast.success("Successfully updated");
    } catch (error) {
      setLoading(false);
      console.log("Error response:", error.response);
      setErrorMessage(error.response?.data?.message || "An error occurred");
      toast.error(error.response?.data?.message || error.message);
    }
  };
  

  return (
    <div>
      {loading ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        <div>
          <div className="w-full">
            <TextfieldProfile
              title="Nama Lengkap"
              placeholder={updatedAlamat.nama_pembeli || ""}
              type="text"
              name="nama_pembeli"
              value={updatedAlamat.nama_pembeli || ""}
              onChange={handleInputChange}
              className="font-inter font-medium text-[0.8rem] md:text-[16px] lg:text-[24px] focus:outline-none w-[80vw] md:w-[80vw] lg:w-[80vw] 2xl:w-full"
            />
            <TextfieldProfile
              title="Contact Number"
              placeholder={updatedAlamat.kontak_pembeli || ""}
              type="text"
              name="kontak_pembeli"
              value={updatedAlamat.kontak_pembeli || ""}
              onChange={handleInputChange}
              className="font-inter font-medium text-[0.8rem] md:text-[16px] lg:text-[26px] focus:outline-none w-[80vw] md:w-[80vw] lg:w-[80vw] 2xl:w-full"
            />
            <div className="hidden md:flex lg:flex flex-row justify-between md:w-[668px] lg:w-[970px] xl:w-full 2xl:w-full  ">
              <DropdownValueAlamat
                title="Provinsi"
                name="provinsi"
                value={updatedAlamat.provinsi || ""}
                onChange={(value) =>
                  handleInputDropdownChange("provinsi", value)
                }
                className="relative w-[163px] md:w-[140px] xl:w-[18vw] 2xl:w-[100px] bg-red"
                placeholder={updatedAlamat.provinsi || "Select Province"}
                options={provinces}
              />
              <DropdownValueAlamat
                title="Kota"
                name="kota"
                value={updatedAlamat.kota || ""}
                onChange={(value) => handleInputDropdownChange("kota", value)}
                className="relative w-[163px] md:w-[140px] xl:w-[18vw]  2xl:w-[100px]"
                placeholder={updatedAlamat.kota || "Select City"}
                options={cities}
              />
              <DropdownValueAlamat
                title="Kecamatan"
                name="kecamatan"
                value={updatedAlamat.kecamatan || ""}
                onChange={(value) =>
                  handleInputDropdownChange("kecamatan", value)
                }
                className="relative w-[163px] md:w-[140px] xl:w-[18vw] 2xl:w-[100px]"
                placeholder={updatedAlamat.kecamatan || "Select District"}
                options={districts}
              />
              <DropdownValueAlamat
                title="Kode Pos"
                name="kode_pos"
                value={updatedAlamat.kode_pos || ""}
                onChange={(value) =>
                  handleInputDropdownChange("kode_pos", value)
                }
                className="relative w-[163px] md:w-[140px] xl:w-[18vw] lg:w-[258px] "
                placeholder={updatedAlamat.kode_pos || "Select Postal Code"}
                options={postalCodes}
              />
            </div>
            <div className="flex md:hidden lg:hidden flex-row justify-between">
              <DropdownValueAlamat
                title="Provinsi"
                name="provinsi"
                value={updatedAlamat.provinsi || ""}
                onChange={handleInputDropdownChange}
                placeholder={updatedAlamat.provinsi || "Select Province"}
                options={provinces}
                className="relative w-[163px] 2xl:w-[292px]"
              />
              <DropdownValueAlamat
                title="Kota"
                name="kota"
                value={updatedAlamat.kota || ""}
                onChange={handleInputDropdownChange}
                placeholder={updatedAlamat.kota || "Select City"}
                options={cities}
                className="relative w-[163px] 2xl:w-[292px]"
              />
            </div>
            <div className="h-[15px]"></div>
            <div className="flex md:hidden lg:hidden flex-row justify-between ">
              <DropdownValueAlamat
                title="Kecamatan"
                name="kecamatan"
                value={updatedAlamat.kecamatan || ""}
                onChange={handleInputDropdownChange}
                placeholder={updatedAlamat.kecamatan || "Select District"}
                options={districts}
                className="relative w-[163px] 2xl:w-[292px]"
              />
              <DropdownValueAlamat
                title="Kode Pos"
                name="kode_pos"
                value={updatedAlamat.kode_pos || ""}
                onChange={handleInputDropdownChange}
                placeholder={updatedAlamat.kode_pos || "Select Postal Code"}
                options={postalCodes}
                className="relative w-[163px] 2xl:w-[292px]"
              />
            </div>
            <div className="h-[15px] lg:h-[10px]"></div>
            <TextfieldProfile
              title="Detail Lainnya (Cth: Blok / Unit No., Patokan)"
              placeholder={updatedAlamat.detail_alamat || ""}
              name="detail_alamat"
              value={updatedAlamat.detail_alamat || ""}
              onChange={handleInputChange}
              type="text"
              className="font-inter font-medium text-[0.8rem] md:text-[16px] lg:text-[26px] focus:outline-none w-[80vw] md:w-[80vw] lg:w-[80vw] 2xl:w-screen"
            />
            <div className="pb-[25px] ">
              <div className="flex flex-col items-start">
                <div className="font-inter font-semibold text-black text-[14px] md:text-[20px] lg:text-[26px]">
                  Nama Jalan, Gedung atau Rumah
                </div>
                <div style={{ height: 7 }}></div>
                <form className="flex items-center justify-start w-full">
                  <div className="flex items-center justify-start rounded-md ring-1 ring-gray p-5  ring-opacity-50 focus:ring-gray">
                    <textarea
                      placeholder={updatedAlamat.nama_alamat || ""}
                      className="font-inter font-medium focus:outline-none text-[0.8rem] md:text-[16px] lg:text-[24px] h-[67px] lg:h-[189px] resize-none w-[80vw] md:w-[78vw] lg:w-[84vw] xl:w-[87vw] 2xl:w-[87vw]"
                      name="nama_alamat"
                      value={updatedAlamat.nama_alamat || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              </div>
            </div>
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
                onClick={handleUpdateAlamat}
              >
                Save
              </button>
            </div>
          </div>
          <div className="h-[40px]"></div>
        </div>
      )}
    </div>
  );
};

export default ContentEditAlamat;
