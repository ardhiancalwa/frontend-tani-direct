import React, { useState, useEffect, useRef } from "react";

import CardProductRecomendations from "../../components/common/card_produk_recomendation";
import ArrowRight from "../../assets/images/arrow_right.svg";
import ArrowLeft from "../../assets/images/arrow_left.svg";
import request from "../../utils/request";

const Recomendation = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePreviousCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const fetchTopSellingProducts = async () => {
      setLoading(true);
      try {
        const response = await request.get("/transaksi/recomendations/top-selling-products");
        setCards(response.data.data);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top-selling products:", error);
        setLoading(false);
      }
    };

    fetchTopSellingProducts();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRefs.current[currentCard];
    if (container && card) {
      // Get container width and card width
      const containerWidth = container.offsetWidth;
      const cardWidth = card.offsetWidth;

      // Calculate the scroll position to center the card
      const cardOffsetLeft = card.offsetLeft;
      const cardCenterOffset = cardOffsetLeft + cardWidth / 2;
      const containerCenter = containerWidth / 1.2;
      const scrollPosition = cardCenterOffset - containerCenter;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentCard]);

  return (
    <div
      className="flex flex-col items-start justify-center 2xl:pt-[63px]"
    >
      <div className="font-bold font-inter text-black text-[15px] md:text-[25px] lg:text-[30px] 2xl:text-[45px]">
        Must-Have Items
      </div>
      <div className="flex flex-row gap-2 w-full justify-between items-center">
        <img
          src={ArrowLeft}
          alt="arrow left"
          onClick={handlePreviousCard}
          className="cursor-pointer w-[6vw] md:w-[5vw] xl:w-[60px] xl:h-[60px]"
        />
        <div
          className="pt-[30px] snap-x h-[55vw] md:h-[50vw] lg:h-[55vw] xl:h-[38vw] 2xl:h-[38vw] snap-mandatory overflow-hidden"
          ref={containerRef}
        >
          <div className="flex flex-wrap items-center flex-row w-max">
          {cards.slice(0,3).map((card, index) => (
              <CardProductRecomendations
                key={card.id}
                image={`${imageUrl}${card.image_produk[0]}`} 
                title={card.nama_produk}
                totalSold={card.totalSold} 
                isActive={index === currentCard}
                cardRef={(el) => (cardRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>
        <img
          src={ArrowRight}
          alt="arrow right"
          onClick={handleNextCard}
          className="cursor-pointer w-[6vw] md:w-[5vw] md:h-[42px] xl:w-[60px] xl:h-[60px]"
        />
      </div>
    </div>
  );
};

export default Recomendation;