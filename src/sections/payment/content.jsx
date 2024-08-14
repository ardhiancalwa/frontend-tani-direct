import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import EditAlamatIcon from "../../assets/images/edit_alamat.svg";
import CarrotImage from "../../assets/images/carrot.jpg";
import TrashIcon from "../../assets/images/sampah.svg";
import DropdownIcon from "../../assets/images/dropdown.svg";
import DropdownUpIcon from "../../assets/images/dropdown_up2.svg";
import ProductCardPayment from "../../components/common/card_produk_payment";
import axios from "axios";
import request from "../../utils/request";

const options = [
  {
    label: "J&T Express",
    value: "J&T Express",
    price: 30000,
    discountPrice: 35000,
  },
  {
    label: "JNE Express",
    value: "JNE Express",
    price: 25000,
    discountPrice: 30000,
  },
  {
    label: "Si Cepat Express",
    value: "Si Cepat Express",
    price: 15000,
    discountPrice: 20000,
  },
  {
    label: "Ninja Express",
    value: "Ninja Express",
    price: 15000,
    discountPrice: 20000,
  },
];

const ContentPayment = ({ setShippingCost }) => {
  const cookies = new Cookies();
  const [pembeli, setPembeli] = useState({});
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [productItems, setProductItems] = useState([]);
  const containerHeight = productItems.length > 1 ? "h-[300px]" : "h-[120px]";
  const [checkedProducts, setCheckedProducts] = useState([]);
  const imageUrl = "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("checkedProducts")) || [];
    setCheckedProducts(storedProducts);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShippingCost(option.price);
    setIsOpen(false);
  };

  const fetchData = (token) => {
    const pembeliID = cookies.get("pembeliID");
    request
      .get(`/pembeli/${pembeliID}`)
      .then((res) => {
        setPembeli(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    const userToken = cookies.get("token_pembeli");
    const product = JSON.parse(localStorage.getItem("checkedProducts") || []);
    setProductItems(product);
    if (userToken) {
      fetchData(userToken);
    } else {
      console.log("gada token");
    }
  }, []);

  const handleRemoveProduct = (productId) => {
    const updatedProducts = checkedProducts.filter(
      (product) => product.produkID !== productId
    );
    setCheckedProducts(updatedProducts);
    localStorage.setItem("checkedProducts", JSON.stringify(updatedProducts));
    alert("Product deleted");
    window.location.reload();
  };

  return (
    <div>
      <div className="flex flex-col w-[350px] md:w-full">
        <div style={{ height: 34 }}></div>
        <div className="flex flex-row justify-between items-center">
          <div className="font-inter text-[18px] md:text-[22px] font-semibold text-black">
            Delivery Address
          </div>
          <button onClick={() => (window.location.href = "/editalamat")}>
            <img
              src={EditAlamatIcon}
              className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] lg:mr-1"
              alt="edit_alamat"
            />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <div className="font-inter text-[14px] md:text-[18px] font-medium text-black">
            {pembeli.nama_pembeli}
          </div>
          <div className="font-inter text-[14px] md:text-[18px] font-medium text-black">
            {pembeli.kontak_pembeli}
          </div>
          <div className="font-inter text-[14px] md:text-[18px] font-medium text-black text-start">
            {`${pembeli.nama_alamat}, ${pembeli.detail_alamat}, ${pembeli.kecamatan}, ${pembeli.kota}, ${pembeli.provinsi}`}
          </div>
        </div>
        <div style={{ height: 20 }}></div>
        <div>
          <div
            className={`overflow-auto ${containerHeight}`}
            style={{
              overflowY: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {productItems.map((product, index) => (
              <ProductCardPayment
                key={index}
                product={product}
                quantity={product.jumlah}
                onRemove={handleRemoveProduct}
              />
            ))}
          </div>
        </div>
        <div style={{ height: 20 }}></div>
        <div className="flex flex-col items-start lg:pb-[210px]">
          <div className="font-inter font-bold text-black text-[16px] md:text-[22px]">
            Pilih Pengiriman
          </div>
          <div style={{ height: 15 }}></div>
          <div className="flex flex-col items-start">
            <div style={{ height: 7 }}></div>
            <div className="relative w-[350px] md:w-[583px] lg:w-[740px] ">
              <div
                className="flex flex-row justify-between h-[44px] md:h-[58px] items-center border border-gray-300 border-opacity-50 rounded-xl px-5 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="w-80 h-18 flex items-center font-medium font-inter text-xl">
                  {selectedOption.label}
                </div>
                {isOpen ? (
                  <img
                    src={DropdownUpIcon}
                    className="w-[24px] h-[24px] lg:w-[38px] lg:h-[38px]"
                    alt="dropdown up"
                  />
                ) : (
                  <img
                    src={DropdownIcon}
                    className="w-[24px] h-[24px] lg:w-[38px] lg:h-[38px]"
                    alt="dropdown"
                  />
                )}
              </div>
              {isOpen && (
                <div className="absolute w-full mt-3 bg-white border border-gray-300 rounded-xl font-inter shadow-lg z-10 max-h-96  overflow-y-auto">
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className="p-4 hover:bg-gray-200 cursor-pointer hover:bg-greenLight border-b-2 border-gray px-5 border-opacity-10 text-[14px] lg:text-[20px]"
                      onClick={() => handleOptionClick(option)}
                    >
                      <div className="flex flex-row justify-between font-inter font-semibold text-black text-[14px] md:text-[20px]">
                        <div>{option.label}</div>
                        <div className="flex flex-row">
                          <div className="ml-2">
                            Rp {option.price.toLocaleString('id-ID')}
                          </div>
                          <div className="ml-2 line-through text-gray text-opacity-30 text-[14px] lg:text-[20px]">
                            Rp {(option.price + 20000).toLocaleString('id-ID')}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPayment;
