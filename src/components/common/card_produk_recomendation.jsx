import React from "react";

import imageDummy from "../../assets/images/sayur.jpg";

const CardProductRecomendations = ({
  image,
  title,
  totalSold,
  isActive,
  cardRef,
  onClick,
}) => {
  const cardStyle = isActive
    ? {
        transform: "scale(1)",
        zIndex: 30,
        transition: "transform 0.35s ease-in-out",
        filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))",
      }
    : {
        transform: "scale(0.8)",
        zIndex: 1,
        transition: "transform 0.35s ease-in-out",
      };

  return (
    <div
      className="lg:px-3 md:px-1 w-[25vw] h-auto md:w-[22vw] md:h-[25vw] lg:w-[26vw] xl:w-[27vw] 2xl:w-[28vw] "
      style={cardStyle}
      ref={cardRef}
      onClick={onClick}
    >
      <div className="lg:max-w-sm 2xl:max-w-full w-full bg-white border border-gray border-opacity-30 rounded-lg p-[1.5vw]  md:rounded-xl xl:rounded-2xl overflow-hidden  ">
        <div className="flex items-center justify-center rounded-xl">
          <img
            src={image}
            className="rounded-md w-[25vw] h-[20vw] md:w-[20vw] md:h-[15vw] lg:w-[30vw] lg:h-[20vw] xl:w-[24vw] xl:h-[18vw] 2xl:w-[25vw] 2xl:h-[20vw] 2xl:rounded-2xl object-cover "
            alt="sayur"
          />
        </div>
        <div className="flex flex-col mt-[1vw] xl:mt-[1.5vw] 2xl:mt-[0.5vw]">
          <div className="font-bold text-black font-inter text-start text-[0.5rem] md:text-[1rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2rem]">
            {title}
          </div>
          <div className="flex items-center justify-center mt-[0.8vw] bg-greenLight rounded-[0.25rem] lg:rounded-lg 2xl:w-[6vw] 2xl:h-[2vw] md:w-[10vw] md:h-[2.5vw] w-full h-auto ">
            <div className="font-inter font-normal text-primary md:text-[0.8rem] text-[0.5rem] lg:text-[1rem] xl:text-[1.2rem]  2xl:text-[1.2rem]">
              Quality
            </div>
          </div>
          <div className="mt-[2vw] xl:mt-[1vw] text-start font-inter font-normal text-[0.4rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] ">
            Produk {title} ini terjual sebanyak {totalSold} dalam kurun waktu
            kurang dari 1 minggu.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductRecomendations;
