import React from "react";
import UploadImageIcon from "../../assets/images/add_image2.png";
import MapImage from "../../assets/images/map.png";
import TextfieldProfile from "../../components/common/textfieldProfile";
import DropdownValue from "../../components/common/dropdown_value";

const options = [
  {
    label: "Book",
    value: "Book",
    price: 20000,
    discountPrice: 25000,
  },
  {
    label: "Book",
    value: "Book",
    price: 20000,
    discountPrice: 25000,
  },
  {
    label: "Book",
    value: "Book",
    price: 20000,
    discountPrice: 25000,
  },
];

const Produk = () => {
  return (
    <div className="flex flex-col">
      <div className="h-5"></div>
      <div id="informationProduct">
        <TextfieldProfile
          title={"Product Name"}
          readOnly={false}
          type={"text"}
          className={
            "font-inter font-medium text-[14px] md:text-[16px] lg:text-[26px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
          }
        />
        <div className="flex flex-col items-start">
          <div className="font-inter font-semibold text-[14px] md:text-[22px] lg:text-[26px] text-black pb-[10px]">
            Product Images
          </div>
          <div className="flex flex-col items-center justify-center w-[110px] h-[110px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] px-[24px] py-[28px] border-2 border-gray border-opacity-30 border-dashed rounded-md">
            <img
              src={UploadImageIcon}
              className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] lg:w-[80px] lg:h-[80px] "
              alt="upload_image"
            />
            <div className="font-inter font-medium text-[10px] md:text-[16px] lg:text-[22px] text-gray">
              Browser or Dekstop
            </div>
          </div>
        </div>
        <div className="flex items-start font-inter font-bold text-[16px] md:text-[26px] lg:text-[32px] text-black pt-[22px] pb-[15px]">
          Product Description
        </div>
        <div className="flex flex-row md:w-full justify-between items-center">
          <div className="font-inter font-semibold text-[14px] md:text-[18px] lg:text-[25px] text-black">
            Metode Pertanian
          </div>
          <DropdownValue
            options={options}
            className={"relative w-[82px] md:w-[190px] lg:w-[294px]"}
            value={"Select"}
            placeholder={"Select"}
          />
        </div>
        <div className="pb-3">
          <div className="flex flex-col items-start">
            <div className="font-inter font-semibold text-black text-[14px] md:text-[20px] lg:text-[22px]">
              Deskripsi lebih lanjut Metode Pertanian:
            </div>
            <div style={{ height: 7 }}></div>
            <form className="flex items-center justify-start ">
              <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
                <textarea
                  placeholder={
                    "Contoh: Menggunakan pupuk kompos dan pestisida alami"
                  }
                  className="font-inter font-medium focus:outline-none text-[12px] md:text-[16px] lg:text-[24px] h-[67px] lg:h-[171px] resize-none w-[350px] md:w-[700px] lg:w-[1380px]"
                  readOnly={false}
                  name={"deskripsi"}
                  value={`updatedProfile?.deskripsi || ""`}
                  onChange={`handleInputChange`}
                />
              </span>
            </form>
          </div>
        </div>
        <div className="flex flex-row md:flex-col justify-between md:items-start items-center">
          <div className="font-inter font-semibold text-black text-[12px] md:text-[20px] lg:text-[26px]">
            Kualitas Tanah:
          </div>
          <TextfieldProfile
            placeholder={"Contoh: Tanah liat"}
            name={"kualitas_tanah"}
            readOnly={false}
            type={"text"}
            className={
              "font-inter font-medium text-[12px] md:text-[16px] lg:text-[26px] focus:outline-none w-[194px] md:w-[700px] lg:w-[1380px]"
            }
          />
        </div>
        <div className="pb-3">
          <div className="flex flex-col items-start">
            <div className="font-inter font-semibold text-black text-[14px] md:text-[20px] lg:text-[26px]">
              Deskripsi lebih lanjut kualitas tanah:
            </div>
            <div style={{ height: 7 }}></div>
            <form className="flex items-center justify-start ">
              <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
                <textarea
                  placeholder={
                    "Menjelaskan lebih lanjut tentang kondisi tanah dan faktor lingkungan lainnya yang mungkin relevan"
                  }
                  className="font-inter font-medium focus:outline-none text-[12px] md:text-[16px] lg:text-[24px] h-[67px] lg:h-[171px] resize-none w-[350px] md:w-[700px] lg:w-[1380px]"
                  readOnly={false}
                  name={"deskripsi_tanah"}
                  value={`updatedProfile?.deskripsi || ""`}
                  onChange={`handleInputChange`}
                />
              </span>
            </form>
          </div>
        </div>
        <div className="flex flex-row md:w-full justify-between items-center">
          <div className="font-inter font-semibold text-[14px] md:text-[18px] text-black">
            Penggunaan Pestisida/Herbisida:
          </div>
          <DropdownValue
            options={options}
            className={"relative w-[82px] md:w-[190px] lg:w-[294px]"}
            value={"Select"}
            placeholder={"Select"}
          />
        </div>
      </div>
      <div id="information farmer">
        <div className="h-[40px]"></div>
        <div className="flex flex-col">
          <div className="flex items-start font-inter font-semibold text-[#2570EB] text-[16px] md:text-[25px] lg:text-[26px]">
            Information of Farmer
          </div>
          <div className="py-5">
            <div className="flex flex-col items-center justify-center w-[110px] h-[110px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] px-[24px] py-[28px] border-2 border-gray border-opacity-30 border-dashed rounded-md">
              <img
                src={UploadImageIcon}
                className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] lg:w-[80px] lg:h-[80px] "
                alt="upload_image"
              />
              <div className="font-inter font-medium text-[10px] md:text-[16px] lg:text-[22px] text-gray">
                Browser or Dekstop
              </div>
            </div>
          </div>
          <TextfieldProfile
            name={"nama_petani"}
            type={"text"}
            title={"Farmer's Name"}
            className={
              "font-inter font-medium text-[12px] md:text-[16px] lg:text-[26px] focus:outline-none w-[350px] md:w-[700px] lg:w-[1400px]"
            }
            readOnly={false}
          />
          <div className="pb-3">
            <div className="flex flex-col items-start">
              <div className="font-inter font-semibold text-black text-[14px] md:text-[20px] lg:text-[26px]">
                Profil Singkat Petani
              </div>
              <div style={{ height: 7 }}></div>
              <form className="flex items-center justify-start ">
                <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 w-full ring-opacity-50 focus:ring-gray">
                  <textarea
                    placeholder={
                      "A detailed description of the product helps customers to learn more about the product."
                    }
                    className="font-inter font-medium focus:outline-none text-[12px] md:text-[16px] lg:text-[24px] h-[67px] lg:h-[171px] resize-none w-[350px] md:w-[700px] lg:w-[1380px]"
                    readOnly={false}
                    name={"deskripsi_petani"}
                    value={`updatedProfile?.deskripsi || ""`}
                    onChange={`handleInputChange`}
                  />
                </span>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="font-inter font-semibold text-black text-[14px] md:text-[20px] lg:text-[26px] pb-[8px]">
              Lokasi Produk Dihasilkan
            </div>
            <div className="flex flex-row w-full justify-between">
              <DropdownValue
                options={options}
                placeholder={"Provinsi"}
                textColor={"text-gray"}
                value={""}
                className={"relative w-[102px] md:w-[184px] lg:w-[294px] "}
              />
              <DropdownValue
                options={options}
                placeholder={"Kota"}
                textColor={"text-gray"}
                value={""}
                className={"relative w-[109px] md:w-[184px] lg:w-[294px]"}
              />
              <DropdownValue
                options={options}
                placeholder={"Kecamatan"}
                textColor={"text-gray"}
                value={""}
                className={"relative w-[118px] md:w-[184px] lg:w-[294px]"}
              />
            </div>
          </div>
          <div className="flex items-start font-inter font-semibold text-[#2570EB] text-[16px] md:text-[22px] lg:text-[26px] pt-[31px] pb-[10px]">
            Peta Lokasi Produk Di hasilkan
          </div>
          <div className="flex items-start font-inter font-semibold text-black text-[10px] md:text-[18px] lg:text-[26px]">
            Nama Lokasi Produk Di Hasilkan:{" "}
            <span className="font-medium"> didapat dari informasi petani</span>
          </div>
          <div className="pt-[10px] pb-[34px] md:pt-[15px]">
            <img
              src={MapImage}
              className="rounded-lg w-[311px] h-[164px] md:w-[477px] md:h-[280px] lg:w-[706px] lg:h-[485px] "
              alt="map"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between pb-[42px]">
          <button className="w-[103px] h-[39px] md:w-[139px] md:h-[44px] lg:w-[160px] lg:h-[60px] bg-white border border-primary text-primary rounded-md font-inter font-semibold text-[16px] md:text-[22px]">
            Cancel
          </button>
          <button className="w-[103px] h-[39px] md:w-[139px] md:h-[44px] lg:w-[160px] lg:h-[60px] bg-primary  text-white rounded-md font-inter font-semibold text-[16px] md:text-[22px]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produk;
