import React, { useEffect, useState } from "react";
import TextfieldProfile from "../../components/common/textfieldProfile";
import DropdownValue from "../../components/common/dropdown_value";
import Cookies from "universal-cookie";
import axios from "axios";
import { useSnackbar } from "notistack";
import request from "../../utils/config";

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
  const [updatedAlamat, setUpdatedAlamat] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const userToken = cookies.get("token_pembeli");
    const pembeliID = cookies.get("pembeliID");

    if (!userToken || !pembeliID) {
      console.log("No token or pembeliID found");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await request.get(
          `/pembeli/${pembeliID}`
        );
        console.log("Received data:", res.data.data);
        setUpdatedAlamat(res.data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
        setErrorMessage(
          error.response ? error.response.data.message : error.message
        );
      }
    };

    fetchData();
  }, []);

  const handleUpdateAlamat = async (e) => {
    e.preventDefault();
    const token = cookies.get("token_pembeli");
    const pembeliID = cookies.get("pembeliID");

    if (!updatedAlamat) {
      console.error("Updated alamat is undefined");
      return;
    }

    console.log("Updated alamat before update:", updatedAlamat);

    const dataToUpdate = {
      ...updatedAlamat,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.put(
        `http://localhost:4000/pembeli/${pembeliID}`,
        dataToUpdate,
        config
      );
      console.log("Updated alamat response:", response.data.data);
      setUpdatedAlamat(response.data);
      enqueueSnackbar("Alamat updated successfully", { variant: "success" });
      setErrorMessage("Successfully updated");
    } catch (error) {
      enqueueSnackbar("Error updating alamat", { variant: "error" });
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
    }
  };

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

  if (!updatedAlamat) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="h-[20px] lg:h-10"></div>
      <div className="w-full">
        <TextfieldProfile
          title="Nama Lengkap"
          placeholder={updatedAlamat.nama_pembeli || ""}
          type="text"
          name="nama_pembeli"
          value={updatedAlamat.nama_pembeli || ""}
          onChange={handleInputChange}
          className="font-inter font-medium text-[14px] md:text-[16px] lg:text-[24px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
        />
        <TextfieldProfile
          title="Contact Number"
          placeholder={updatedAlamat.kontak_pembeli || ""}
          type="text"
          name="kontak_pembeli"
          value={updatedAlamat.kontak_pembeli || ""}
          onChange={handleInputChange}
          className="font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
        />
        <div className="hidden md:flex lg:flex flex-row justify-between md:w-[700px] lg:w-[1390px]">
          <DropdownValue
            title="Provinsi"
            name="provinsi"
            value={updatedAlamat.provinsi || ""}
            onChange={(value) => handleInputDropdownChange("provinsi", value)}
            className="relative w-[163px] md:w-[140px] lg:w-[258px]"
            placeholder={updatedAlamat.provinsi || "Select Province"}
            options={provinces}
          />
          <DropdownValue
            title="Kota"
            name="kota"
            value={updatedAlamat.kota || ""}
            onChange={(value) => handleInputDropdownChange("kota", value)}
            className="relative w-[163px] md:w-[140px] lg:w-[258px]"
            placeholder={updatedAlamat.kota || "Select City"}
            options={cities}
          />
          <DropdownValue
            title="Kecamatan"
            name="kecamatan"
            value={updatedAlamat.kecamatan || ""}
            onChange={(value) => handleInputDropdownChange("kecamatan", value)}
            className="relative w-[163px] md:w-[140px] lg:w-[258px]"
            placeholder={updatedAlamat.kecamatan || "Select District"}
            options={districts}
          />
          <DropdownValue
            title="Kode Pos"
            name="kode_pos"
            value={updatedAlamat.kode_pos || ""}
            onChange={(value) => handleInputDropdownChange("kode_pos", value)}
            className="relative w-[163px] md:w-[140px] lg:w-[258px] "
            placeholder={updatedAlamat.kode_pos || "Select Postal Code"}
            options={postalCodes}
          />
        </div>
        <div className="flex md:hidden lg:hidden flex-row justify-between">
          <DropdownValue
            title="Provinsi"
            name="provinsi"
            value={updatedAlamat.provinsi || ""}
            onChange={handleInputDropdownChange}
            placeholder={updatedAlamat.provinsi || "Select Province"}
            options={provinces}
            className="relative w-[163px] lg:w-[292px]"
          />
          <DropdownValue
            title="Kota"
            name="kota"
            value={updatedAlamat.kota || ""}
            onChange={handleInputDropdownChange}
            placeholder={updatedAlamat.kota || "Select City"}
            options={cities}
            className="relative w-[163px] lg:w-[292px]"
          />
        </div>
        <div className="h-[15px]"></div>
        <div className="flex md:hidden lg:hidden flex-row justify-between">
          <DropdownValue
            title="Kecamatan"
            name="kecamatan"
            value={updatedAlamat.kecamatan || ""}
            onChange={handleInputDropdownChange}
            placeholder={updatedAlamat.kecamatan || "Select District"}
            options={districts}
            className="relative w-[163px] lg:w-[292px]"
          />
          <DropdownValue
            title="Kode Pos"
            name="kode_pos"
            value={updatedAlamat.kode_pos || ""}
            onChange={handleInputDropdownChange}
            placeholder={updatedAlamat.kode_pos || "Select Postal Code"}
            options={postalCodes}
            className="relative w-[163px] lg:w-[292px]"
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
          className="font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
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
                  className="font-inter font-medium focus:outline-none text-[12px] md:text-[16px] lg:text-[24px] h-[67px] lg:h-[189px] resize-none w-[350px] md:w-[700px] lg:w-[1385px]"
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
  );
};

export default ContentEditAlamat;
