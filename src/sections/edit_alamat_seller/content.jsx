import React, { useEffect, useState } from "react";
import TextfieldProfile from "../../components/common/textfieldProfile";
import Cookies from "universal-cookie";
import axios from "axios";
import request from "../../utils/request";
import toast from "react-hot-toast";
import DropdownValueAlamat from "../../components/common/dropdown_value_alamat";
import LoadingScreen from "../../components/common/loading";

const cookies = new Cookies();

// const postalCodes = [
//   { label: "28111", value: "28111" },
//   { label: "28112", value: "28112" },
//   { label: "28113", value: "28113" },
//   { label: "28114", value: "28114" },
//   { label: "28115", value: "28115" },
//   { label: "28116", value: "28116" },
//   { label: "28117", value: "28117" },
//   { label: "28118", value: "28118" },
//   { label: "28119", value: "28119" },
//   { label: "28121", value: "28121" },
// ];

const ContentEditAlamatSeller = () => {
  const [updatedAlamat, setUpdatedAlamat] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userToken = cookies.get("token_petani");
    const petaniID = cookies.get("petaniID");

    if (!userToken || !petaniID) {
      console.log("No token or petaniID found");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await request.get(`/petani/${petaniID}`);
        console.log("Received data:", res.data.data);
        setUpdatedAlamat(res.data.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setErrorMessage(
          error.response ? error.response.data.message : error.message
        );
        setLoading(false);
      }
    };

    const fetchProvinces = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://ardhiancalwa.github.io/api-wilayah-indonesia/api/provinces.json`);
        console.log(response);
        setProvinces(
          response.data.map((province) => ({
            label: province.name,
            value: province.id,
          }))
        );
        setLoading(false);
      } catch (error) {
        console.log("Error fetching provinces:", error);
        setErrorMessage(
          error.response? error.response.data.message : error.message
        );
        setLoading(false);
      }
    }

    fetchData();
    fetchProvinces();
  }, []);

  const fetchCities = async (provinceId) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://ardhiancalwa.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`)
      console.log(response);
      setCities(
        response.data.map((city) => ({
          label: city.name,
          value: city.id,
        }))
      );
      setLoading(false);
    } catch (error) {
      console.log("Error fetching cities:", error);
      setErrorMessage(
        error.response? error.response.data.message : error.message
      );
      setLoading(false);
    }
  }

  const fetchDistricts = async (regencyId) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://ardhiancalwa.github.io/api-wilayah-indonesia/api/districts/${regencyId}.json`)
      console.log(response);
      setDistricts(
        response.data.map((district) => ({
          label: district.name,
          value: district.id,
        }))
      );
      setLoading(false);
    } catch (error) {
      console.log("Error fetching cities:", error);
      setErrorMessage(
        error.response? error.response.data.message : error.message
      );
      setLoading(false);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAlamat((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));

    if (name === "provinsi") {
      fetchCities(value);
    } else if (name === "kota") {
      fetchDistricts(value);
    }
  };

  const handleInputDropdownChange = (name, value) => {
    setUpdatedAlamat((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
    if (name === "provinsi") {
      fetchCities(value);
    } else if (name === "kota") {
      fetchDistricts(value);
    }
  };

  const handleUpdateAlamat = async (e) => {
    e.preventDefault();

    if (!updatedAlamat) {
      console.error("Updated alamat is undefined");
      return;
    }

    console.log("Updated alamat before update:", updatedAlamat);

    const { petaniID, createdAt, updatedAt, ...dataToUpdate } = updatedAlamat;

    try {
      const response = await axios.put(
        `https://backend-tanidirect-production.up.railway.app/petani/${petaniID}`,
        dataToUpdate
      );
      console.log("Updated alamat response:", response.data.data);
      setUpdatedAlamat(response.data.data);
      toast.success("Successfully updated");
    } catch (error) {
      setLoading(false);
      toast.error(error.response ? error.response.data.message : error.message);
    }
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUpdatedAlamat((prevProfile) => ({
  //     ...prevProfile,
  //     [name]: value,
  //   }));
    
  //   if (name === "provinsi") {
  //     fetchCities(value);
  //   } else if (name === "kota") {
  //     fetchDistricts(value);
  //   }
  // };

  // const handleInputDropdownChange = (name, value) => {
  //   setUpdatedAlamat((prevProfile) => ({
  //     ...prevProfile,
  //     [name]: value,
  //   }));
  //   if (name === "provinsi") {
  //     fetchCities(value);
  //   } else if (name === "kota") {
  //     fetchDistricts(value);
  //   }
  // };

  return (
    <div>
      {loading ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        <div>
          <div className="h-[20px] lg:h-10"></div>
          <div className="w-full">
            <TextfieldProfile
              title="Nama Lengkap"
              placeholder={updatedAlamat.nama_petani || ""}
              type="text"
              name="nama_petani"
              value={updatedAlamat.nama_petani || ""}
              onChange={handleInputChange}
              className="font-inter font-medium text-[14px] md:text-[16px] lg:text-[24px] focus:outline-none w-[325px] md:w-[627px] lg:w-[900px] 2xl:w-screen"
            />
            <TextfieldProfile
              title="Contact Number"
              placeholder={updatedAlamat.no_telepon_petani || ""}
              type="text"
              name="no_telepon_petani"
              value={updatedAlamat.no_telepon_petani || ""}
              onChange={handleInputChange}
              className="font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[325px] md:w-[627px] lg:w-[900px] 2xl:w-screen"
            />
            <div className="hidden md:flex lg:flex flex-row justify-between md:w-[668px] lg:w-[970px] 2xl:w-[1750px]">
              <DropdownValueAlamat
                title="Provinsi"
                name="provinsi"
                value={updatedAlamat.provinsi || ""}
                onChange={(value) =>
                  handleInputDropdownChange("provinsi", value)
                }
                className="relative w-[163px] md:w-[140px] 2xl:w-[258px]"
                placeholder={updatedAlamat.provinsi || "Select Province"}
                options={provinces}
              />
              <DropdownValueAlamat
                title="Kota"
                name="kota"
                value={updatedAlamat.kota || ""}
                onChange={(value) => handleInputDropdownChange("kota", value)}
                className="relative w-[163px] md:w-[140px] 2xl:w-[258px]"
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
                className="relative w-[163px] md:w-[140px] 2xl:w-[258px]"
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
                className="relative w-[163px] md:w-[140px] lg:w-[258px] "
                placeholder={updatedAlamat.kode_pos || "Select Postal Code"}
                // options={postalCodes}
              />
            </div>
            <div className="flex md:hidden lg:hidden flex-row justify-between">
              <DropdownValueAlamat
                title="Provinsi"
                name="provinsi"
                value={updatedAlamat.provinsi || ""}
                onChange={(value) =>
                  handleInputDropdownChange("provinsi", value)
                }
                placeholder={updatedAlamat.provinsi || "Select Province"}
                options={provinces}
                className="relative w-[163px] 2xl:w-[292px]"
              />
              <DropdownValueAlamat
                title="Kota"
                name="kota"
                value={updatedAlamat.kota || ""}
                onChange={(value) =>
                  handleInputDropdownChange("kota", value)
                }
                placeholder={updatedAlamat.kota || "Select City"}
                options={cities}
                className="relative w-[163px] 2xl:w-[292px]"
              />
            </div>
            <div className="h-[15px]"></div>
            <div className="flex md:hidden lg:hidden flex-row justify-between">
              <DropdownValueAlamat
                title="Kecamatan"
                name="kecamatan"
                value={updatedAlamat.kecamatan || ""}
                onChange={(value) =>
                  handleInputDropdownChange("kecamatan", value)
                }
                placeholder={updatedAlamat.kecamatan || "Select District"}
                options={districts}
                className="relative w-[163px] 2xl:w-[292px]"
              />
              <DropdownValueAlamat
                title="Kode Pos"
                name="kode_pos"
                value={updatedAlamat.kode_pos || ""}
                onChange={(value) =>
                  handleInputDropdownChange("kode_pos", value)
                }
                placeholder={updatedAlamat.kode_pos || "Select Postal Code"}
                // options={postalCodes}
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
              className="font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[325px] md:w-[627px] lg:w-[900px] 2xl:w-screen"
            />
            <div className="pb-[25px]">
              <div className="flex flex-col items-start">
                <div className="font-inter font-semibold text-black text-[14px] md:text-[20px] lg:text-[26px]">
                  Nama Jalan, Gedung atau Rumah
                </div>
                <div style={{ height: 7 }}></div>
                <form className="flex items-center justify-start">
                  <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
                    <textarea
                      placeholder={updatedAlamat.nama_alamat || ""}
                      className="font-inter font-medium focus:outline-none text-[12px] md:text-[16px] lg:text-[24px] h-[67px] lg:h-[189px] resize-none w-[325px] md:w-[627px] lg:w-[862px] 2xl:w-[1850px]"
                      name="nama_alamat"
                      value={updatedAlamat.nama_alamat || ""}
                      onChange={handleInputChange}
                    />
                  </span>
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
              {errorMessage && (
                <div className="text-red-600 mt-4 text-[16px] md:text-[20px] lg:text-[28px]">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
          <div className="h-[40px]"></div>
        </div>
      )}
    </div>
  );
};

export default ContentEditAlamatSeller;
