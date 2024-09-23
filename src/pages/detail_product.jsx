import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/specific/navbar";
// import HeaderDetailProduct from "../sections/detailProduct/header";
import ContentDetailProduct from "../sections/detailProduct/content";
import PenjualSection from "../sections/detailProduct/penjual_section";
import ReviewRatings from "../sections/detailProduct/review_rating";
import Footer from "../components/specific/footer";
import Cookies from "universal-cookie";
import request from "../utils/request";
import Header from "../components/common/header";

import CartIcon from "../assets/images/keranjang.svg";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import LoadingScreen from "../components/common/loading";

const cookies = new Cookies();

const DetailProduct = () => {
  const isLg = useMediaQuery({ minWidth: 768 });
  const { produkID } = useParams();
  const [selectedWeight, setSelectedWeight] = useState(20);
  const [product, setProduct] = useState({});
  const [seller, setSeller] = useState(null);
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (token) => {
      setLoading(true);
      try {
        const response = await request.get(`/produk/${produkID}`);
        setProduct(response.data.data);
        setSeller(response.data.data.PetaniProduk[0].Petani);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    const tokenPembeli = cookies.get("token_pembeli");
    const tokenPetani = cookies.get("token_petani");

    if (tokenPembeli) {
      fetchData(tokenPembeli);
    } else if (tokenPetani) {
      fetchData(tokenPetani);
    } else {
      console.log("No token found");
    }
  }, [produkID]);

  useEffect(() => {
    if (product) {
      let price = product.harga;
      if (selectedWeight === 20) {
        price *= 1;
      } else if (selectedWeight === 50) {
        price *= 1.25; 
      } else if (selectedWeight === 75) {
        price *= 1.5; 
      } else if (selectedWeight === 100) {
        price *= 1.75;
      }
      setCalculatedPrice(price);
    }
  }, [selectedWeight, product]);

  useEffect(() => {
    if (product) {
      setProductDetails({
        product,
        quantity,
        selectedWeight,
        calculatedPrice,
      });
    }
  }, [product, quantity, selectedWeight, calculatedPrice, setProductDetails]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleBuyClick = () => {
    const tokenPetani = cookies.get("token_petani"); // Memeriksa token petani
    if (tokenPetani) {
      // Jika user login sebagai petani, tampilkan toast
      toast.error("Petani tidak bisa melakukan pembelian!", {
        icon: "🚫",
      });
    } else {
      // Jika user login sebagai pembeli, lanjutkan ke halaman pembayaran
      const checkedProducts =
        JSON.parse(localStorage.getItem("checkedProducts")) || [];
      const updatedProducts = [
        ...checkedProducts,
        {
          ...product,
          jumlah: quantity,
          selectedWeight: selectedWeight,
          calculatedPrice: calculatedPrice,
        },
      ];
      localStorage.setItem("checkedProducts", JSON.stringify(updatedProducts));
      window.location.href = "/userpayment";
    }
  };

  const handleWeightClick = (weight) => {
    setSelectedWeight(weight);
  };

  const handleAddToCartClick = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [
      ...cart,
      {
        ...product,
        jumlah: quantity,
        selectedWeight: selectedWeight,
        calculatedPrice: calculatedPrice,
      },
    ];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast("Added to cart", {
      icon: "🛒",
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="max-w-screen-sm md:max-w-full px-[5vw] md:px-[8vw] lg:px-[6vw] xl:px-[5vw] 2xl:px-[5vw]">
      <Navbar />
      <Header
        title={"Product Description"}
        onClick={() => window.history.back()}
      />
      <div>
        {loading ? (
          <LoadingScreen />
        ) : (
          <div>
            <ContentDetailProduct
              product={product}
              selectedWeight={selectedWeight}
              calculatedPrice={calculatedPrice}
              quantity={quantity}
              onWeightClick={handleWeightClick}
              onQuantityChange={handleQuantityChange}
              onBuyClick={handleBuyClick}
              onAddToCartClick={handleAddToCartClick}
            />
            <PenjualSection seller={seller} />
            <ReviewRatings />
            {/* {isLg && <Footer />} */}
            <div className="lg:hidden md:hidden flex flex-row py-2 lg:py-0">
              <button
                className="bg-primary rounded-md lg:rounded-xl w-full h-[27px] lg:w-[205px] lg:h-[64px] "
                onClick={handleBuyClick}
              >
                <div className="flex items-start justify-center text-white font-inter font-medium text-[10px] lg:text-[20px] ">
                  Buy
                </div>
              </button>
              <div style={{ width: 25 }}></div>
              <button
                className="flex flex-row row-auto items-center justify-center bg-white border border-primary rounded-md lg:rounded-xl w-full h-[27px] lg:w-[275px] lg:h-[64px]"
                onClick={handleAddToCartClick}
              >
                <img
                  src={CartIcon}
                  className="w-[10px] h-[10px] lg:w-6 lg:h-6"
                  alt="cart icon"
                />
                <div className="w-[7px] lg:w-[10px]"></div>
                <div className="flex items-center justify-center text-primary font-inter font-medium text-[10px] lg:text-[20px]">
                  Masukkan Keranjang
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailProduct;
