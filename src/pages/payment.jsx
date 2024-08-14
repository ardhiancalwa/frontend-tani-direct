import React, { useEffect, useState } from "react";
import HeaderPayment from "../sections/payment/header";
import Divider from "@mui/material/Divider";
import PaymentMethod from "../sections/payment/payment_method";
import ContentPayment from "../sections/payment/content";

const Payment = () => {
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("checkedProducts")) || [];
    setCheckedProducts(products);
  }, []);

  const calculateSubtotal = () => {
    return checkedProducts.reduce(
      (total, product) => total + product.calculatedPrice * product.jumlah,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const totalPayment = subtotal + shippingCost;

  return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen bg-neutral max-w-screen-sm md:max-w-screen-md lg:w-full px-5 md:px-[70px] lg:px-[0px]">
      <div className="flex flex-col px-5 lg:px-0">
        <div className="flex flex-col lg:px-[100px] lg:pb-20  lg:w-[950px]">
          <HeaderPayment />
          <ContentPayment setShippingCost={setShippingCost} />
        </div>
        <div>
          <hr className="hidden lg:flex w-full" />
          <div className="h-[301px] lg:h-0 "></div>
          <div className="flex flex-col w-[350px] md:w-full py-3 lg:px-[100px]">
            <div className="flex items-start">
              <div className="font-inter font-semibold text-black text-[16px] lg:text-[22px]">
                Rincian Pembayaran
              </div>
            </div>
            <div style={{ height: 10 }}></div>
            <div className="flex flex-row justify-between">
              <div className="font-inter font-medium text-gray text-[13px] lg:text-[20px]">
                Subtotal untuk Produk
              </div>
              <div className="font-inter font-medium text-gray text-[13px] lg:text-[20px]">
                Rp {subtotal.toLocaleString('id-ID')}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="font-inter font-medium text-gray text-[13px] lg:text-[20px]">
                Subtotal Pengiriman{" "}
              </div>
              <div className="font-inter font-medium text-gray text-[13px] lg:text-[20px]">
                Rp {shippingCost.toLocaleString('id-ID')}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="font-inter font-medium text-black text-[13px] lg:text-[20px]">
                Total Pembayaran{" "}
              </div>
              <div className="font-inter font-medium text-black text-[13px] lg:text-[20px]">
                Rp {totalPayment.toLocaleString('id-ID')}
              </div>
            </div>
          </div>
          <div className="lg:hidden w-[350px] md:w-[600px]  flex justify-center py-[10px]">
            <button
              className="flex items-center justify-center rounded-[7px] w-[271px] md:w-[600px] md:h-[54px] h-[32px] bg-primary"
              onClick={() => (window.location.href = "/paymentmethod")}
            >
              <div className="font-inter font-semibold text-white text-[10px] md:text-[20px]">
                Pilih Pembayaran
              </div>
            </button>
          </div>
        </div>
      </div>
      <Divider
        orientation="vertical"
        flexItem
        className="hidden lg:flex bg-black3 opacity-50"
      />
      <div className="hidden lg:flex">
        <PaymentMethod />
      </div>
    </div>
  );
};

export default Payment;
