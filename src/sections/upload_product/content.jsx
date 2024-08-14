import React, { useState, useRef } from "react";
import UploadProductField from "../../components/common/upload_product_field";
import AddProductIcon from "../../assets/images/add_product.svg";
import AddImagesIcon from "../../assets/images/add_image2.png";
import axios from "axios";
import Cookies from "universal-cookie";
import { useSnackbar } from "notistack";
import toast from "react-hot-toast";
// import request from "../../utils/config";
const cookies = new Cookies();

const ContentUploadProduct = () => {
  const [namaProduk, setNamaProduk] = useState("");
  const [deskripsiProduk, setDeskripsiProduk] = useState("");
  const [hargaProduk, setHargaProduk] = useState("");
  const [stokProduk, setStokProduk] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const { enqueueSnackbar } = useSnackbar();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleUploadProduct = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("nama_produk", namaProduk);
    formData.append("deskripsi_produk", deskripsiProduk);
    formData.append("harga", hargaProduk);
    formData.append("jumlah_stok", stokProduk);
    if (selectedFile) {
      formData.append("image_produk", selectedFile);
    }
  
    // Retrieve petaniID from cookies
    const petaniID = cookies.get("petaniID");
    formData.append("petaniID", petaniID);
  
    const token = cookies.get("token_petani");
  
    const uploadPromise = axios.post(
      `https://backend-tanidirect-production.up.railway.app/produk`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    toast.promise(
      uploadPromise,
      {
        loading: "Uploading product...",
        success: "Product uploaded successfully!",
        error: "Failed to upload product.",
      },
      {
        success: {
          duration: 4000,
        },
      }
    );
  
    try {
      const res = await uploadPromise;
      window.location.href = "/menupesanan";
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log(file);
    }
  };
  return (
    <div>
      <div className="py-3">
        <div className="flex flex-col items-start">
          <div className="font-inter font-semibold text-gray text-[16px] lg:text-[20px] 2xl:text-[24px]">
            Product Name
          </div>
          <div style={{ height: 7 }}></div>
          <form className="flex flex-row items-center justify-start w-[365px] md:w-[668px] lg:w-[904px] 2xl:w-[1895px]">
            <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 ring-opacity-50 focus:ring-gray w-full h-auto  md:h-[46px] ">
              <img src={AddProductIcon} className="pr-2" alt="add_product" />
              <input
                type={"text"}
                value={namaProduk}
                onChange={(e) => setNamaProduk(e.target.value)}
                className="font-inter w-full font-medium focus:outline-none text-[16px] md:text-[20px] lg:text-[24px]"
                readOnly={false}
              />
            </span>
          </form>
        </div>
      </div>
      <div className="py-3">
        <div className="flex flex-col items-start">
          <div className="font-inter font-semibold text-gray text-[16px] lg:text-[20px] 2xl:text-[24px]">
            Product Images
          </div>
          <div style={{ height: 7 }}></div>
          <button
            className="flex flex-col h-[206px] md:h-[263px] lg:h-[300px] md:w-[668px] w-[226px] lg:w-[904px] 2xl:w-[1895px] items-center justify-center border-4 border-dashed border-gray border-opacity-30 rounded-xl"
            onClick={handleButtonClick}
          >
            <img
              src={AddImagesIcon}
              className="w-[30px] h-[30px] md:w-[56px] md:h-[56px] "
              alt="add_image"
            />
            <div className="font-inter font-normal text-gray text-[12px] lg:text-[20px]">
              Browser or Dekstop
            </div>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {selectedFile && (
            <div className="mt-2 text-sm text-gray-600">
              Selected file: {selectedFile.name}
            </div>
          )}
        </div>
      </div>
      <div className="py-3">
        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-between w-[365px] md:w-[668px] lg:w-[904px] 2xl:w-[1895px]">
            <div className="font-inter font-semibold text-gray text-[16px] lg:text-[20px] 2xl:text-[24px]">
              Product Description
            </div>
            <div className="flex items-end font-inter font-light text-gray text-[10px] md:text-[13px]">
              {(deskripsiProduk?.length || 0)}/800
            </div>
          </div>
          <div style={{ height: 7 }}></div>
          <form className="flex items-center justify-start ">
            <span className="flex items-start justify-start rounded-md ring-1 ring-gray p-2 2xl:p-5 ring-opacity-50 focus:ring-gray  w-[365px] md:w-[668px] lg:w-[904px] 2xl:w-[1895px] h-auto overflow-y-scroll ">
              <textarea
                placeholder="A detailed description of the product helps customers to learn more about the product."
                value={deskripsiProduk}
                onChange={(e) => setDeskripsiProduk(e.target.value)}
                className="font-inter font-medium focus:outline-none text-[12px] lg:text-[16px] 2xl:text-[20px] w-full resize-none"
                readOnly={false}
              />
            </span>
          </form>
        </div>
      </div>
      <UploadProductField
        title={"Product Price"}
        type={"text"}
        width={750}
        height={46}
        value={hargaProduk}
        onChange={(e) => setHargaProduk(e.target.value)}
        readOnly={false}
      />
      <UploadProductField
        title={"Product Quantity"}
        type={"text"}
        width={750}
        value={stokProduk}
        onChange={(e) => setStokProduk(e.target.value)}
        height={46}
        readOnly={false}
      />
      <div className="flex flex-row justify-start pt-[20px] lg:py-10">
        <button className="border-2 border-primary rounded-md pl-[26px] pr-[26px] lg:pl-11 lg:pr-11 pt-2 pb-2 font-inter font-medium text-primary text-[16px] lg:text-[28px] ">
          Cancel
        </button>
        <div className="w-[24px] lg:w-10"></div>
        <button
          className="bg-primary rounded-md pl-[26px] pr-[26px] lg:pl-14 lg:pr-14 pt-2 pb-2 font-inter font-medium text-white text-[16px] lg:text-[28px]"
          onClick={handleUploadProduct}
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ContentUploadProduct;
