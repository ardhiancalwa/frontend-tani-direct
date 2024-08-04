import React, { useEffect, useState } from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderCart from "../sections/keranjang/header";
import ContentCart from "../sections/keranjang/contentCart";
import FooterCart from "../sections/keranjang/footer";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemToRemove, setItemToRemove] = useState(null);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleItemCheck = (productId, isChecked, itemPrice) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [productId]: isChecked,
    }));

    if (isChecked) {
      setTotalItems((prevTotalItems) => prevTotalItems + 1);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + itemPrice);
    } else {
      setTotalItems((prevTotalItems) => prevTotalItems - 1);
      setTotalPrice((prevTotalPrice) => prevTotalPrice - itemPrice);
    }
  };

  const handleQuantityChange = (productId, newQuantity, itemPrice) => {
    const oldQuantity = cartItems.find(
      (item) => item.produkID === productId
    ).jumlah;
    const difference = newQuantity - oldQuantity;

    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.produkID === productId ? { ...item, jumlah: newQuantity } : item
      )
    );

    if (checkedItems[productId]) {
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + difference * itemPrice
      );
    }
  };

  const handleRemoveItem = () => {
    const updatedCart = cartItems.filter(
      (item) => !checkedItems[item.produkID]
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setItemToRemove(null); // Close the modal after removing the item
    alert("Item(s) successfully removed!"); // Show alert
    window.location.reload();
  };

  const handleCheckout = () => {
    const checkedProducts = cartItems.filter(
      (item) => checkedItems[item.produkID]
    );
    localStorage.setItem("checkedProducts", JSON.stringify(checkedProducts));
    // Redirect to payment page or perform any other actions
    window.location.href = "/payment";
  };

  const isAnyChecked = Object.values(checkedItems).some(
    (isChecked) => isChecked
  );
  return (
    <div>
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
        <NavbarPembeli />
        <HeaderCart
          item={isAnyChecked}
          onRemoveItem={() => setItemToRemove(true)}
          isAnyChecked={isAnyChecked}
        />{" "}
        <ContentCart
          cartItems2={cartItems}
          onItemCheck={handleItemCheck}
          onQuantityChange={handleQuantityChange}
        />
      </div>
      <div className="h-[160px]"></div>
      <FooterCart
        totalItems={totalItems}
        totalPrice={totalPrice}
        isAnyChecked={isAnyChecked}
        onCheckout={handleCheckout}
      />

      {itemToRemove && (
        <div
          id="popup-modal"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={() => setItemToRemove(null)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <button
                  onClick={handleRemoveItem}
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => setItemToRemove(null)}
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
