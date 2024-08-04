import React, { useEffect, useState } from "react";
import ContainerCart from "../../components/common/container_cart";
import HeaderCart from "./header";
import FooterCart from "./footer";

const ContentCart = ({ cartItems2, onItemCheck, onQuantityChange }) => {
  const [cartItems, setCartItems] = useState([]);
  // const [itemToRemove, setItemToRemove] = useState(null);
  // const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // const handleRemoveItem = () => {
  //   const updatedCart = cartItems.filter(
  //     (item) => !checkedItems[item.produkID]
  //   );
  //   setCartItems(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   setItemToRemove(null); // Close the modal after removing the item
  // };

  // const handleItemCheck = (productId, isChecked) => {
  //   setCheckedItems((prevCheckedItems) => ({
  //     ...prevCheckedItems,
  //     [productId]: isChecked,
  //   }));
  // };

  // const isAnyChecked = Object.values(checkedItems).some(
  //   (isChecked) => isChecked
  // );

  // const checkedItemsList = cartItems.filter(
  //   (item) => checkedItems[item.produkID]
  // );
  // const totalPrice = checkedItemsList.reduce(
  //   (total, item) => total + item.calculatedPrice * item.jumlah,
  //   0
  // );

  // const totalItems = checkedItemsList.length;

  // const handleCheckout = () => {
  //   // Save checked items to localStorage for the payment page
  //   localStorage.setItem("checkedItems", JSON.stringify(checkedItemsList));
  //   // Navigate to the payment page (implement navigation logic as needed)
  //   // e.g., window.location.href = "/payment";
  // };

  return (
    <div>
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
