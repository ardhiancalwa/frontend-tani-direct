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
      <div className="relative flex items-center mt-[1vw] ">
        <div className="pb-1">
          <button
            onClick={LeftArrow}
            className="bg-greenLight h-[15vw] md:h-[10vw]  lg:h-[8vw] xl:h-[6.5vw] 2xl:h-[7vw] rounded-l-lg"
          >
            <img
              src={SlideLeft}
              className="w-[8vw] h-[8vw] md:w-7 md:h-7 opacity-50 hover:opacity-100"
              alt=""
            />
          </button>
        </div>
        <div
          id="slider"
          className="w-[110vw] md:w-[40vw] 2xl:w-[745px] h-full overflow-x-scroll scroll whitespace-nowrap  scroll-smooth scrollbar-hide"
        >
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="inline-block p-2 md:p-1">
                <img
                  src={`${imageUrl}${image}`} // Pastikan image adalah string URL yang benar
                  className="border border-gray object-cover cursor-pointer border-opacity-30 shadow-md rounded-lg w-[15.5vw] h-[15.5vw] md:w-[10vw] md:h-[10vw] lg:w-[7.85vw] lg:h-[7.85vw] xl:w-[6.5vw] xl:h-[6.5vw] 2xl:w-[7vw] 2xl:h-[7vw]"
                  alt={product.nama_produk}
                />
              </div>
            ))
          ) : (
            <p>No images available</p> // Tampilan jika tidak ada gambar
          )}
        </div>
        <div className="pb-1">
          <buttonus
            onClick={RightArrow}
            className="bg-greenLight h-[15vw] md:h-[10vw] lg:h-[8vw] xl:h-[6.5vw] 2xl:h-[7vw] rounded-r-lg"
          >
            <img
              src={SlideRight}
              className="w-[8vw] h-[8vw] md:w-7 md:h-7 opacity-80 hover:opacity-100"
              alt=""
            />
          </buttonus>
        </div>
      </div>
    </div>
  );
};

export default DetailImage;
