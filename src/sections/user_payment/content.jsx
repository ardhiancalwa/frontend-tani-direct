import React, { useEffect, useState } from "react";

import Cookies from "universal-cookie";
import request from "../../utils/request";
import ProductCardUserPayment from "../../components/common/card_produk_userpayment";
import LoadingScreen from "../../components/common/loading";
import toast from "react-hot-toast";
import EditAddressIcon from "../../assets/images/edit_alamat.svg";
import DropdownIcon from "../../assets/images/dropdown.svg";
import DropdownUpIcon from "../../assets/images/dropdown_up2.svg";

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

const ContentUserPayment = () => {
  const cookies = new Cookies();
  const [pembeli, setPembeli] = useState({});
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedTypeOption, setSelectedTypeOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [optionCost, setOptionCost] = useState(0);
  const [typeOptionCost, setTypeOptionCost] = useState(0);
  const [totalShippingCost, setTotalShippingCost] = useState(0);
  const [productItems, setProductItems] = useState([]);
  const containerHeight = productItems.length > 1 ? "h-[300px]" : "h-[210px]";
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  const fetchData = (token) => {
    const pembeliID = cookies.get("pembeliID");
    setLoading(true);
    request
      .get(`/pembeli/${pembeliID}`)
      .then((res) => {
        setPembeli(res.data.data);
        setLoading(false);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
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

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("checkedProducts")) || [];
    setCheckedProducts(storedProducts);
  }, []);

  const handleRemoveProduct = (productId) => {
    const updatedProducts = checkedProducts.filter(
      (product) => product.produkID !== productId
    );
    setCheckedProducts(updatedProducts);
    localStorage.setItem("checkedProducts", JSON.stringify(updatedProducts));
    toast("Product deleted", { icon: "🗑️" });
    window.location.reload();
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOptionCost(option.price);
    setTotalShippingCost(option.price + typeOptionCost);
    setIsOpen(false);
  };

  const handleTypeOptionClick = (typeOption) => {
    setSelectedTypeOption(typeOption);
    setTypeOptionCost(typeOption.price);
    setTotalShippingCost(optionCost + typeOption.price);
    setIsTypeOpen(false);
  };

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("checkedProducts")) || [];
    setCheckedProducts(storedProducts);
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProducts = checkedProducts.map((product) => {
      if (product.produkID === productId) {
        return { ...product, jumlah: newQuantity };
      }
      return product;
    });
    setCheckedProducts(updatedProducts);
    localStorage.setItem("checkedProducts", JSON.stringify(updatedProducts));
    window.location.reload();
  };

  const calculateSubtotal = () => {
    return checkedProducts.reduce(
      (total, product) => total + (product.calculatedPrice * product.jumlah),
      0
    );
  };

  const subtotal = calculateSubtotal();
  const totalPayment = subtotal + selectedOption.price;

  const handlePayment = async () => {
    try {
      const products = JSON.parse(localStorage.getItem("checkedProducts")) || [];
      console.log("harga pengiriman: ", selectedOption.price);
      
      const cookies = new Cookies();
      const pembeliID = cookies.get("pembeliID");
  
      if (!pembeliID) {
        toast.error("User not logged in");
        return;
      }
  
      const token = cookies.get("token_pembeli");
      const productData = products.map((product) => ({
        produkID: product.produkID,
        jumlah: product.jumlah,
        berat_produk: product.selectedWeight,
      }));
  
      // Mengirim request untuk mendapatkan Midtrans token
      const response = await request.post(
        "/transaksi",
        {
          pembeliID: pembeliID,
          produkID: productData,
          total_harga: totalPayment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const midtransToken = response.data.data?.midtransToken;
      if (!midtransToken) {
        toast.error("Failed to get Midtrans token");
        return;
      }
  
      const noTransaksi = response.data.data.no_transaksi;
  
      window.snap.pay(midtransToken, {
        onSuccess: async function (result) {
          toast.success("Payment successful! Please wait for confirmation.");
          // Transaksi dianggap berhasil di front-end, tapi status di backend di-update melalui notifikasi Midtrans
          window.location.href = "/trackingorder";
        },
        onPending: function () {
          toast("Waiting for payment confirmation", { icon: "🔃" });
        },
        onError: function () {
          toast.error("Payment failed");
        },
        onClose: function () {
          toast("Transaction canceled", { icon: "❌" });
        },
      });
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("An error occurred during payment processing");
    }
  }; 

  return (
    <div className="flex flex-col">
      <div className="py-3 border-b border-gray border-opacity-30">
        <div className="w-full h-auto bg-greenLight rounded-md">
          <div className="flex flex-row items-center p-2 xl:p-4 2xl:p-6">
            <div className="flex flex-col text-start w-full">
              <div className="text-[0.8rem] md:text-[1.2rem] lg:text-[1rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-semibold font-inter">
                Delivery Address
              </div>
              <div>
                {loading ? (
                  <div className="font-inter text-[20px] font-medium">
                    Loading...
                  </div>
                ) : (
                  <div>
                    <div className="text-[1rem] xl:text-[1rem] 2xl:text-[1.1rem] font-medium font-inter">
                      {pembeli.nama_pembeli}
                    </div>
                    <div className="text-[0.8rem] xl:text-[1rem] 2xl:text-[1.1rem] font-medium font-inter">
                      {pembeli.kontak_pembeli}
                    </div>
                    <div className="text-[0.8rem] xl:text-[1rem] 2xl:text-[1.1rem] font-medium font-inter">
                      {`${pembeli.nama_alamat}, ${pembeli.detail_alamat}, ${pembeli.kecamatan}, ${pembeli.kota}, ${pembeli.provinsi}`}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button className="px-3" onClick={() => (window.location.href = "/editalamat")}>
              <img src={EditAddressIcon} className="w-[5vw] h-[5vw] md:w-[3vw] md:h-[3vw] lg:w-[2vw] lg:h-[2vw] xl:w-[2vw] xl:h-[2vw] 2xl:w-[1.8vw] 2xl:h-[1.8vw] " alt="edit alamat" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`overflow-auto py-2 ${containerHeight}`}
          style={{
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {productItems.map((product, index) => (
            <ProductCardUserPayment
              key={index}
              product={product}
              quantity={product.jumlah}
              onRemove={handleRemoveProduct}
              onMaxQuantity={product.jumlah_stok}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(product.produkID, newQuantity)
              }
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col items-start lg:pb-[290px] w-full">
          <div className="py-2 font-inter font-bold text-black text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem]">
            Pilih Pengiriman
          </div>
          <div className="flex flex-col items-start">
            <div className="relative w-full md:w-[84vw] lg:w-[88vw] 2xl:w-[89vw] ">
              <div
                className="flex flex-row justify-between h-[8vw] md:h-[6vw] lg:h-[5vw] 2xl:h-[4vw] items-center border border-gray-300 border-opacity-50 rounded-md px-5 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="w-80 h-10 flex items-center font-medium font-inter text-[1rem] md:text-[1rem] 2xl:text-[1.2rem]">
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
                <div className="absolute w-full mt-3 bg-white border border-gray-300 rounded-md font-inter shadow-lg z-10 max-h-96 overflow-y-auto">
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className="p-4 hover:bg-gray-200 cursor-pointer hover:bg-greenLight border-b-2 border-gray px-5 border-opacity-10 text-[1rem] lg:text-[20px]"
                      onClick={() => handleOptionClick(option)}
                    >
                      <div className="flex flex-row justify-between font-inter font-semibold text-black text-[0.8rem] md:text-[1rem]">
                        <div>{option.label}</div>
                        <div className="flex flex-row items-center">
                          <div className="text-[0.8rem] md:text-[0.8rem] lg:text-[1rem]">
                            Rp {option.price.toLocaleString("id-ID")}
                          </div>
                          <div className="ml-1 line-through text-gray text-opacity-30 text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem]">
                            Rp {(option.price + 20000).toLocaleString("id-ID")}
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
      <div className="  border-t border-gray border-opacity-30 py-6">
        <div className="flex flex-col p-3 bg-gray bg-opacity-20 rounded-md text-start">
          <div className="font-inter font-semibold text-[1.2rem] md:text-[1.2rem]">
            Rincian Pembayaran
          </div>
          <div className="h-5"></div>
          <div className="flex flex-row w-full justify-between font-inter font-medium text-[1rem] text-gray text-opacity-50">
            <div>Subtotal untuk Produk</div>
            <div>Rp {subtotal.toLocaleString("id-ID")}</div>
          </div>
          <div className="flex flex-row w-full justify-between font-inter font-medium text-[1rem] text-gray text-opacity-50">
            <div>Subtotal Pengiriman</div>
            <div>Rp {selectedOption.price.toLocaleString("id-ID")}</div>
          </div>
          <div className="flex flex-row justify-between font-inter font-medium text-[1rem] text-black">
            <div>Total Pembayaran</div>
            <div>Rp {totalPayment.toLocaleString("id-ID")}</div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <button
          className="w-full h-auto py-2 rounded-md bg-primary text-white font-inter font-semibold text-[1rem]"
          onClick={handlePayment}
        >
          Buat Pesanan
        </button>
      </div>
    </div>
  );
};

export default ContentUserPayment;
