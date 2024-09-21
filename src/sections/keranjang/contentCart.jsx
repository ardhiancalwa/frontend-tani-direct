import React, { useEffect, useState } from "react";
import ContainerCart from "../../components/common/container_cart";

const ContentCart = ({ cartItems2, onItemCheck, onQuantityChange }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  return (
    <div className="mt-4 md:mt-2 lg:mt-0">
      {cartItems.map((item, index) => (
        <ContainerCart
          key={index}
          item={item}
          onItemCheck={onItemCheck}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </div>
  );
};

export default ContentCart;
