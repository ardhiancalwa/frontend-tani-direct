import React from "react";

import QRISImage from "../../assets/images/qris_image.png";
import axios from "axios";
import Cookies from "universal-cookie";

const QRISPayment = () => {
  const handlePayment = async () => {
    try {
      // Mengambil data dari localStorage
      const products =
        JSON.parse(localStorage.getItem("checkedProducts")) || [];
      const totalHarga = products.reduce(
        (acc, item) => acc + item.harga * item.jumlah,
        0
      );

      // Mengambil pembeliID dari cookies
      const cookies = new Cookies();
      const pembeliID = cookies.get("pembeliID");

      if (!pembeliID) {
        alert("User not logged in");
        return;
      }

      const token = cookies.get("token_pembeli");

      // Membuat transaksi di backend
      const response = await axios.post(
        "http://localhost:4000/transaksi",
        {
          tanggal_transaksi: new Date().toISOString(),
          metode_pembayaran: "midtrans",
          pembeliID: pembeliID, // Ganti dengan ID pembeli yang sesuai
          produkID: products.map(({ produkID, jumlah }) => ({
            produkID,
            jumlah,
          })),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      

      // Menampilkan pop-up Snap
      if (response.data.data && response.data.data.midtransToken) {
        window.snap.pay(response.data.data.midtransToken, {
          onSuccess: function (result) {
            alert("Payment successful");
            window.location.href = "/success";
          },
          onPending: function (result) {
            alert("Waiting for payment confirmation");
          },
          onError: function (result) {
            alert("Payment failed");
          },
          onClose: function () {
            alert("Transaction canceled");
          },
        });
      } else if (response.data.data.redirect_url) {
        window.location.href = response.data.data.redirect_url; 
      } else {
        alert("Failed to get Midtrans token");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert(error);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col border border-black rounded-xl w-[240px] h-[303px] md:w-[369px] md:h-[440px] ">
        <div className="flex flex-col px-8 py-5">
          <div className=" flex items-start font-inter text-[20px] md:text-[25px] font-semibold text-black">
            QRIS
          </div>
          <div className="flex flex-col items-center">
            <div className="font-inter text-[14px] md:text-[20px] font-medium py-[16px] md:py-6">
              Nama yang dituju
            </div>
            <img
              src={QRISImage}
              className="md:w-[224px] md:h-[217px] w-[150px] h-[143px] "
              alt="qris"
            />
          </div>
        </div>
        <div>
          <hr className="w-full" />
          <div className="flex flex-row justify-between font-inter text-[12px] md:text-[20px] font-semibold px-3 py-[10px] md:py-4">
            <div>Total</div>
            <div>Rp 100.000</div>
          </div>
        </div>
      </div>
      <div className="lg:h-[35px] h-[160px] "></div>
      <div className="lg:hidden flex flex-col md:border-t-[1px] border-gray w-[350px] md:w-full py-3 lg:px-7">
        <div className="flex items-start">
          <div className="font-inter font-semibold text-black text-[16px] md:text-[22px]">
            Rincian Pembayaran
          </div>
        </div>
        <div style={{ height: 10 }}></div>
        <div className="flex flex-row justify-between">
          <div className="font-inter font-medium text-gray text-[13px] md:text-[20px]">
            Subtotal untuk Produk
          </div>
          <div className="font-inter font-medium text-gray text-[13px] md:text-[20px]">
            Rp 100.000
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="font-inter font-medium text-gray text-[13px] md:text-[20px]">
            Subtotal Pengiriman{" "}
          </div>
          <div className="font-inter font-medium text-gray text-[13px] md:text-[20px]">
            Rp 10.000
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="font-inter font-medium text-black text-[13px] md:text-[20px]">
            Total Pembayaran{" "}
          </div>
          <div className="font-inter font-medium text-black text-[13px] md:text-[20px]">
            Rp 110.000
          </div>
        </div>
      </div>
      <button className="bg-[#002F19] w-[221px] md:w-full rounded-xl text-[10px] md:text-[20px]">
        <div
          className="py-3 font-inter font-semibold text-white"
          onClick={handlePayment}
        >
          Buat Pesanan
        </div>
      </button>
    </div>
  );
};

export default QRISPayment;
