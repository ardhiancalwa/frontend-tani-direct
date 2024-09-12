import React, { useEffect, useState } from "react";
import CarrotImage from "../../assets/images/carrot2.png";
import SlideLeft from "../../assets/images/slide_left.svg";
import SlideRight from "../../assets/images/slide_right.svg";
import "react-horizontal-scrolling-menu/dist/styles.css";
import request from "../../utils/request";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const LeftArrow = () => {
  var el = document.getElementById("slider");
  el.scrollLeft = el.scrollLeft - 200;
};

const RightArrow = () => {
  var el = document.getElementById("slider");
  el.scrollLeft = el.scrollLeft + 200;
};

const DetailImage = () => {
  const { produkID } = useParams();
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);

  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get(`/produk/${produkID}`);
        setProduct(response.data.data);
        // Pastikan image_produk ada dan merupakan array
        if (
          response.data.data.image_produk &&
          Array.isArray(response.data.data.image_produk)
        ) {
          setImages(response.data.data.image_produk);
        } else {
          setImages([]); // Setel ke array kosong jika tidak ada gambar
        }

        console.log(response.data.data.image_produk);
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

  return (
    <div>
      <div className="h-[10px] lg:h-[25px]"></div>
      <div className="relative flex items-center ">
        <div className="pb-1">
          <button
            onClick={LeftArrow}
            className="bg-greenLight h-[75px] lg:h-[85px] 2xl:h-[176px] rounded-l-xl"
          >
            <img
              src={SlideLeft}
              className="w-10 h-10 md:w-7 md:h-7 opacity-50 hover:opacity-100"
              alt=""
            />
          </button>
        </div>
        <div
          id="slider"
          className="w-[600px] md:w-[350px] 2xl:w-[745px] h-full overflow-x-scroll scroll whitespace-nowrap  scroll-smooth scrollbar-hide"
        >
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="inline-block p-2">
                <img
                  src={`${imageUrl}${image}`} // Pastikan image adalah string URL yang benar
                  className="border border-gray object-cover cursor-pointer border-opacity-30 shadow-md rounded-lg w-[80px] h-[70px] lg:w-[80px] lg:h-[80px] 2xl:w-[170px] 2xl:h-[170px]"
                  alt={product.nama_produk}
                />
              </div>
            ))
          ) : (
            <p>No images available</p> // Tampilan jika tidak ada gambar
          )}
        </div>
        <div className="pb-1">
          <button
            onClick={RightArrow}
            className="bg-greenLight h-[75px] lg:h-[85px] 2xl:h-[176px] rounded-r-md"
          >
            <img
              src={SlideRight}
              className="w-10 h-10 md:w-7 md:h-7 opacity-80 hover:opacity-100"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailImage;
