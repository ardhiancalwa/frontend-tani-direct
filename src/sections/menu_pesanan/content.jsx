import React, { useEffect, useState } from "react";

import ImageProduct from "../../assets/images/bayam_mini.png";
import CheckIcon from "../../assets/images/check4.svg";
import Cookies from "universal-cookie";
import request from "../../utils/request";
import LoadingScreen from "../../components/common/loading";

const ContentMenuPesanan = () => {
  const cookies = new Cookies();
  const [isChecked, setIsChecked] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";
  const handleProductCheck = (index) => {
    const newIsChecked = [...isChecked];
    newIsChecked[index] = !newIsChecked[index];
    setIsChecked(newIsChecked);
  };

  const handleSelectAll = () => {
    const allChecked = isChecked.every((check) => check);
    const newIsChecked = products.map(() => !allChecked);
    setIsChecked(newIsChecked);
  };

  const fetchData = async () => {
    const petaniID = cookies.get("petaniID");
    setLoading(true);
    try {
      const produkResponse = await request.get(`/produk/petani/${petaniID}`);
      const transaksiResponse = await request.get("/transaksi");

      const produkData = produkResponse.data.data;
      const transaksiData = transaksiResponse.data.data.productDetails;

      const mergedData = produkData.map((product) => {
        const foundTransaksi = transaksiData.find(
          (transaksi) => transaksi.produkID === product.produkID
        );
        return {
          ...product,
          totalSold: foundTransaksi ? foundTransaksi.totalSold : 0,
        };
      });

      setProducts(mergedData);
      setIsChecked(new Array(mergedData.length).fill(false));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const tokenPembeli = cookies.get("token_pembeli");
    const tokenPetani = cookies.get("token_petani");

    if (tokenPembeli || tokenPetani) {
      fetchData();
    } else {
      console.log("No token found");
    }
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <div className="flex flex-row items-center justify-between  pt-[20px] md:pb-[18px] py-5">
            <div className="font-inter md:text-[20px] lg:text-[30px] font-semibold text-black ">
              {products.length} Produk
            </div>
            <button
              className="border border-primary font-inter font-semibold text-primary hover:ring-4 hover:ring-greenLight active:scale-95 rounded-md text-[10px] px-2 py-[6px] md:text-[16px] md:px-5 md:py-3 lg:px-5 lg:py-3 "
              onClick={() => (window.location.href = "/uploadproduct")}
            >
              + Add Your New Product
            </button>
          </div>
          <div className="overflow-x-auto pt-0 md:pt-[20px] md:py-0">
            <table className="w-full text-xl font-inter text-black">
              <thead className=" ">
                <tr className="text-[10px] md:text-[16px] lg:text-2xl font-bold bg-greenLight bg-opacity-70">
                  <th
                    scope="col"
                    className=" px-3 md:px-6 py-3 text-left rounded-s-lg"
                  >
                    Nama Produk
                  </th>
                  <th className=" px-3 md:px-6 py-3 ">Harga</th>
                  <th className=" px-3 md:px-6  py-3 ">Stok</th>
                  <th className=" px-3 md:px-6 py-3 rounded-e-lg">Penjualan</th>
                </tr>
              </thead>
              <tbody className="font-inter font-medium  w-max text-black text-[10px] md:text-[16px]  lg:text-[20px] ">
                {products.map((product, index) => (
                  <tr key={product.produkID} className="border-b  ">
                    <td className=" px-1 md:px-6  py-4 flex w-[180px] items-center gap-1">
                      <button
                        className={`border w-[15px] px-[6px]
                          ] py-1 h-[15px] md:w-6 md:h-6   border-gray rounded-sm lg:rounded-sm flex items-center justify-center ${
                          isChecked ? "bg-none" : ""
                        }`}
                        onClick={() => handleProductCheck(index)}
                      >
                        {isChecked[index] ? (
                          <img src={CheckIcon} alt="check" />
                        ) : (
                          ""
                        )}
                      </button>
                      <div className=" md:w-[15px]"></div>
                      <img
                        src={`${imageUrl}${product.image_produk[0]}`}
                        alt="bayam"
                        className="w-8 h-8 md:w-10 md:h-10 mr-[8px] lg:h-16 lg:w-16 object-cover"
                      />
                      <div className="mr-3">{product.nama_produk}</div>
                    </td>
                    <td className=" px-1 md:px-6    py-4  ">
                      <div className=" w-[80px] flex justify-center items-center ">
                      Rp {product.harga.toLocaleString("id-ID")}
                      </div>
                     
                    </td>
                    <td className=" px-3 md:px-6  py-4">
                      {product.jumlah_stok}
                    </td>
                    <td className=" px-3 md:px-6  py-4">{product.totalSold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="h-[100px]"></div>
          <div className="fixed bottom-0 right-0 left-0 h-[45px] md:h-[60px] lg:h-[80px] w-full bg-neutral px-5 md:px-[50px] lg:px-[60px] 2xl:px-[100px]">
            <div className=" py-2 md:py-4 lg:py-5 border-t-2 border-gray">
              <div className="flex flex-row justify-between px-3 md:px-6">
                <div className="flex flex-row items-center">
                  <button
                    className="w-[14px] h-[14px] md:w-[24px] md:h-[24px] lg:w-5 lg:h-5 border-[1px] border-black rounded-sm"
                    onClick={handleSelectAll}
                  >
                    {isChecked.every((check) => check) ? (
                      <img src={CheckIcon} alt="" />
                    ) : (
                      ""
                    )}
                  </button>
                  <div className="pl-[10px] md:pl-[14px] lg:pl-[16px] font-inter font-semibold text-[10px] md:text-[16px] lg:text-[20px]">
                    Pilih Semua
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="font-inter font-semibold text-[10px] md:text-[16px] lg:text-[20px] pr-[11px] md:pr-[16px] lg:pr-[20px]">
                    {isChecked.filter((checked) => checked).length} produk
                    dipilih
                  </div>
                  <div className="pr-[7px] md:pr-[12px] lg:pr-[20px]">
                    <button className="w-[64px] h-[20px] md:w-[84px] md:h-[30px] lg:w-[104px] lg:h-[40px] flex items-center justify-center border-2 border-primary rounded-md font-inter font-semibold text-[8px] md:text-[12px] lg:text-[16px]">
                      Hapus
                    </button>
                  </div>
                  <div>
                    <button
                      className="w-[64px] h-[20px] md:w-[84px] md:h-[30px] lg:w-[104px] lg:h-[40px] flex items-center justify-center bg-primary rounded-md font-inter font-semibold text-[8px] md:text-[12px] lg:text-[16px] text-white hover:shadow-lg active:scale-95"
                      onClick={() => (window.location.href = "/myproduct")}
                    >
                      Tampilkan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentMenuPesanan;
