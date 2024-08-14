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

const typeOption = [
  {
    label: "Reguler",
    value: "Reguler",
    price: 15000,
  },
  {
    label: "Express",
    value: "Express",
    price: 10000,
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
      (total, product) => total + product.calculatedPrice * product.jumlah,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const totalPayment = subtotal + totalShippingCost;

  const handlePayment = async () => {
    try {
      // Mengambil data dari localStorage
      const products =
        JSON.parse(localStorage.getItem("checkedProducts")) || [];
      const totalHarga = totalPayment;
      products.forEach(product => {
        const berat_produk = product.selectedWeight;
        console.log(`Berat produk dengan ID ${product.produkID} adalah ${berat_produk} gram.`);
      });

      // Mengambil pembeliID dari cookies
      const cookies = new Cookies();
      const pembeliID = cookies.get("pembeliID");

      if (!pembeliID) {
        toast.error("User not logged in");
        return;
      }

      const token = cookies.get("token_pembeli");
      const productData = products.map(product => ({
        produkID: product.produkID,
        jumlah: product.jumlah,
        berat_produk: product.selectedWeight, // Mengambil berat dari setiap produk
      }));
      try {
        const response = await request.post(
          "/transaksi/generate-token",
          {
            pembeliID: pembeliID, // Kirim data pembeli ke backend
            produkID: productData,
            totalHarga: totalHarga,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Menampilkan pop-up Snap
        if (response.data.data.midtransToken != null) {
          const midtransToken = response.data.data.midtransToken;
          const noTransaksi = response.data.data.no_transaksi;

          window.snap.pay(midtransToken, {
            onSuccess: async function (result) {
              try {
                // Memastikan data transaksi dikirim ke backend
                const transaksiResponse = await request.post(
                  "/transaksi",
                  {
                    no_transaksi: noTransaksi,
                    tanggal_transaksi: new Date().toISOString(),
                    metode_pembayaran: "midtrans",
                    pembeliID: pembeliID,
                    produkID: productData,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
                if (transaksiResponse.status === 201) {
                  toast.success("Payment successful");
                  window.location.href = "/trackingorder";
                } else {
                  throw new Error("Transaction not saved in the database");
                }
              } catch (error) {
                console.error("Error saving transaction:", error);
                toast.error("Failed to save transaction");
              }
            },
            onPending: function (result) {
              toast("Waiting for payment confirmation", { icon: "🔃" });
            },
            onError: function (result) {
              toast.error("Payment failed");
            },
            onClose: function () {
              console.log(response.data.message);
              toast("Transaction canceled", { icon: "❌" });
            },
          });
        } else {
          toast.error("Failed to get Midtrans token");
        }
      } catch (error) {
        console.log(error.message);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert(error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="py-8 border-b border-gray border-opacity-30">
        <div className="w-full h-auto bg-greenLight rounded-2xl">
          <div className="flex flex-row items-center p-6">
            <div className="flex flex-col w-full text-start">
              <div className="text-[22px] font-semibold font-inter">
                Delivery Address
              </div>
              <div>
                {loading ? (
                  <div className="font-inter text-[20px] font-medium">
                    Loading...
                  </div>
                ) : (
                  <div>
                    <div className="text-[20px] font-medium font-inter">
                      {pembeli.nama_pembeli}
                    </div>
                    <div className="text-[20px] font-medium font-inter">
                      {pembeli.kontak_pembeli}
                    </div>
                    <div className="text-[20px] font-medium font-inter">
                      {`${pembeli.nama_alamat}, ${pembeli.detail_alamat}, ${pembeli.kecamatan}, ${pembeli.kota}, ${pembeli.provinsi}`}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button onClick={() => (window.location.href = "/editalamat")}>
              <img src={EditAddressIcon} alt="edit alamat" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`overflow-auto py-6 ${containerHeight}`}
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
          <div className="font-inter font-bold text-black text-[16px] md:text-[22px]">
            Pilih Pengiriman
          </div>
          <div style={{ height: 15 }}></div>
          <div className="flex flex-col items-start">
            <div style={{ height: 7 }}></div>
            <div className="relative w-[350px] md:w-[583px] lg:w-[740px] 2xl:w-[900px] ">
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
        <div className="flex flex-col items-start lg:pb-[270px] w-full">
          <div className="font-inter font-bold text-black text-[16px] md:text-[22px]">
            Pilih Jenis Pengiriman
          </div>
          <div style={{ height: 15 }}></div>
          <div className="flex flex-col items-start">
            <div style={{ height: 7 }}></div>
            <div className="relative w-[350px] md:w-[583px] lg:w-[740px] 2xl:w-[948px]">
              <div
                className="flex flex-row justify-between h-[44px] md:h-[58px] items-center border border-gray-300 border-opacity-50 rounded-xl px-5 cursor-pointer"
                onClick={() => setIsTypeOpen(!isTypeOpen)}
              >
                <div className="w-80 h-18 flex items-center font-medium font-inter text-xl">
                  {selectedTypeOption.label}
                </div>
                {isTypeOpen ? (
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
              {isTypeOpen && (
                <div className="absolute w-full mt-3 bg-white border border-gray-300 rounded-xl font-inter shadow-lg z-10 max-h-96  overflow-y-auto">
                  {typeOption.map((typeOption) => (
                    <div
                      key={typeOption.value}
                      className="p-4 hover:bg-gray-200 cursor-pointer hover:bg-greenLight border-b-2 border-gray px-5 border-opacity-10 text-[14px] lg:text-[20px]"
                      onClick={() => handleTypeOptionClick(typeOption)}
                    >
                      <div className="flex flex-row justify-between font-inter font-semibold text-black text-[14px] md:text-[20px]">
                        <div>{typeOption.label}</div>
                        <div className="flex flex-row">
                          <div className="ml- text-[14px] lg:text-[20px]">
                            Rp{" "}
                            {typeOption?.price !== undefined
                              ? typeOption.price.toLocaleString('id-ID')
                              : "N/A"}
                          </div>
                          <div className="ml-2 line-through text-gray text-opacity-30 text-[12px] lg:text-[16px]">
                            Rp{" "}
                            {typeOption?.price !== undefined
                              ? (typeOption.price + 20000).toLocaleString('id-ID')
                              : "N/A"}
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
        <div className="flex flex-col px-6 py-4 bg-gray bg-opacity-20 rounded-2xl text-start">
          <div className="font-inter font-semibold text-[22px]">
            Rincian Pembayaran
          </div>
          <div className="h-5"></div>
          <div className="flex flex-row w-full justify-between font-inter font-medium text-[20px] text-gray text-opacity-50">
            <div>Subtotal untuk Produk</div>
            <div>Rp {subtotal.toLocaleString('id-ID')}</div>
          </div>
          <div className="flex flex-row w-full justify-between font-inter font-medium text-[20px] text-gray text-opacity-50">
            <div>Subtotal Pengiriman</div>
            <div>Rp {totalShippingCost.toLocaleString('id-ID')}</div>
          </div>
          <div className="flex flex-row w-full justify-between font-inter font-medium text-[20px] text-black">
            <div>Total Pembayaran</div>
            <div>Rp {totalPayment.toLocaleString('id-ID')}</div>
          </div>
        </div>
      </div>
      <div className="py-10 px-[400px]">
        <button
          className="w-full h-auto py-4 rounded-2xl bg-primary text-white font-inter font-semibold text-[20px]"
          onClick={handlePayment}
        >
          Buat Pesanan
        </button>
      </div>
    </div>
  );
};

export default ContentUserPayment;
