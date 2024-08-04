import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductImage from "../../assets/images/carrot.jpg";
import ButtonWeightProduct from "../../components/common/button_weight_product";
import PlusMinusProduct from "../../components/common/button_plusminus_product";
import StatusPrice from "../../components/common/status_price";
import DetailImage from "../../components/common/detail_image";
import request from "../../utils/config";

import CartIcon from "../../assets/images/keranjang.svg";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const ContentDetailProduct = () => {
  const { produkID } = useParams();
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [product, setProduct] = useState({});
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState({});
  const imageUrl = "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  useEffect(() => {
    const fetchData = async (token) => {
      try {
        const response = await request.get(
          `/produk/${produkID}`
        );
        setProduct(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
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
      if (selectedWeight === 25) {
        price *= 1;
      } else if (selectedWeight === 50) {
        price *= 1.25; // Naik 25% untuk berat 50
      } else if (selectedWeight === 75) {
        price *= 1.5; // Naik 50% untuk berat 75
      } else if (selectedWeight === 100) {
        price *= 1.75; // Naik 75% untuk berat 100
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
    window.location.href = "/payment";
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
    alert("Produk berhasil ditambahkan ke keranjang!");
    window.location.reload();
  };

  return (
    <div key={product.produkID}>
      <div className="h-[30px] lg:h-[20px]"></div>
      <div className="flex flex-col md:flex-row row-auto">
        <div>
          {/* <img
            // src={product?.image_produk}
            // src={ProductImage}

            className="border border-gray border-opacity-50 md:rounded-lg lg:rounded-2xl w-[350px] h-[222px] lg:w-[700px] lg:h-[434px] "
            alt="productimage"
          /> */}
          <img
            src={`${imageUrl}${product.image_produk}`}
            class="border border-gray border-opacity-50 md:rounded-lg lg:rounded-2xl w-[350px] h-[222px] lg:w-[700px] lg:h-[434px] object-cover"
            alt="productimage"
          ></img>
          <DetailImage />
        </div>
        <div style={{ width: 36 }}></div>
        <div className="flex flex-col col-auto items-start h-[275px] lg:w-[505px] lg:h-[434px]">
          <div className="pt-[15px] lg:w-[505px] h-[150px] md:py-0 font-inter font-semibold text-black text-start text-[18px] md:text-[16px] lg:text-[32px]">
            {product.nama_produk}
          </div>
          <div className="py-[6px] lg:py-2 font-inter font-semibold text-black text-start text-[14px] md:text-[16px] lg:text-[26px]">
            Description
          </div>
          <div className="font-inter lg:w-[505px] lg:h-[96px] font-medium text-black text-start text-[12px] lg:text-[20px] break-words">
            {product.deskripsi_produk}
          </div>
          <div className="flex flex-row row-auto md:pt-2 lg:pt-20">
            {[20, 50, 75, 100].map((weight) => (
              <ButtonWeightProduct
                key={weight}
                weight={weight}
                isSelected={selectedWeight === weight}
                onClick={handleWeightClick}
              />
            ))}
          </div>
          <PlusMinusProduct
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            maxQuantity={product.jumlah_stok}
          />
          <StatusPrice />
          <div className="flex flex-col lg:pt-[10px] lg:h-[172px] col-auto p-1">
            <div className="flex flex-row row-auto items-center md:pt-[0px]">
              <span className="font-inter text-[20px] lg:text-[40px] font-bold text-primary">
                {calculatedPrice !== undefined
                  ? `Rp ${(calculatedPrice * 1).toLocaleString()}`
                  : "Loading..."}
              </span>
              <div style={{ width: 10 }}></div>
              <span className="font-inter text-[16px] md:text-[10px] lg:text-[25px] font-normal text-gray text-opacity-50 line-through">
                {calculatedPrice !== undefined
                  ? `Rp ${(calculatedPrice + 150000).toLocaleString()}`
                  : "Loading..."}
              </span>
            </div>
            <div className="flex items-start py-[8px]">
              <div className="font-inter text-[14px] md:text-[12px] lg:text-[25px] font-semibold text-black">
                Stok: {product.jumlah_stok}
              </div>
            </div>
            <div className="hidden md:flex flex-row row-auto">
              <button
                className="bg-primary md:rounded lg:rounded-xl md:w-[170px] md:h-[34px] lg:w-[300px] lg:h-[64px] "
                onClick={handleBuyClick}
              >
                <div className="flex items-start justify-center text-white font-inter font-semibold md:text-[10px] lg:text-[20px]">
                  Buy
                </div>
              </button>
              <div style={{ width: 25 }}></div>
              <button
                className="flex flex-row row-auto items-center justify-center bg-white border border-primary md:rounded lg:rounded-xl md:w-[180px] md:h-[34px] lg:w-[350px] lg:h-[64px]"
                onClick={handleAddToCartClick}
              >
                <img
                  src={CartIcon}
                  className="md:w-[10px] md:h-[10px] lg:w-6 lg:h-6"
                  alt="cart icon"
                />
                <div style={{ width: 10 }}></div>
                <div className="flex items-center justify-center text-primary font-inter font-semibold md:text-[10px] lg:text-[20px]">
                  Masukkan Keranjang
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailProduct;
