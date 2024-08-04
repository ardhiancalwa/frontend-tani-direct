import React, { useState, useEffect } from "react";

import Animation1 from "../../assets/images/succes1.png";
import Animation2 from "../../assets/images/succes2.png";
import Animation3 from "../../assets/images/succes3.png";
import Animation4 from "../../assets/images/succes4.png";

const images = [Animation1, Animation2, Animation3, Animation4];

const SuccessPayment = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className=" h-64 w-64">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={` w-full h-full transition-opacity duration-500 ease-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`animation-${index}`}
          />
        ))}
        <div>
          {images.map((image, index) => (
            <p key={index}>{image}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessPayment;
