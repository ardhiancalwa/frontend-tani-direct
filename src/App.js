import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

// import LoginPage from "./pages/login";
import AboutUs from "./pages/aboutus";
import Wishlist from "./pages/wishlist";
import AllProducts from "./pages/all_product";
import DetailProduct from "./pages/detail_product";
import PetaniDetailProduct from "./pages/seller/detail_product_seller";
import ChatPage from "./pages/chat";
import CartPage from "./pages/keranjang";
import MarketPrice from "./pages/market_price";
import DetailBlog from "./pages/detail_blog";
import ProfilePage from "./pages/profile";
import EditProfile from "./pages/edit_profile";
import EditAlamat from "./pages/edit_alamat";
import RiwayatPesanan from "./pages/riwayat_pesanan";
import TrackingOrder from "./pages/tracking_order";
import Payment from "./pages/payment";
import PembayaranPage from "./sections/payment/pembayaran";
import SuccessPayment from "./components/specific/success";
import PembeliLoginPage from "./pages/login";
import PembeliHomePage from "./pages/home";
import PetaniHomePage from "./pages/seller/home_seller";
import PetaniProfilePage from "./pages/seller/profile_seller";
import MenuPesanan from "./pages/seller/menu_pesanan";
import HistoryTransaction from "./pages/seller/history_transaction";
import EditProfileToko from "./pages/seller/edit_profile_toko";
import UploadProduct from "./pages/upload_product";
import PembeliRegisterPage from "./pages/register";
import MarketPricePetani from "./pages/seller/market_price_seller";
import WishlistPetani from "./pages/seller/wishlist_seller";
import PaymentMethod from "./sections/payment/payment_method";
import PetaniLoginPage from "./pages/seller/login_seller";
import PetaniRegisterPage from "./pages/seller/register_seller";
import ProtectedRoute from "./components/specific/protectedRoute";
import StepOne from "./pages/biodata/step1";
import StepTwo from "./pages/biodata/step2";
import StepThree from "./pages/biodata/step3";
import ProductIn from "./pages/product_information";
import MyProduct from "./pages/my_product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={<PembeliLoginPage userType="pembeli" />}
          />
          <Route path="/register" element={<PembeliRegisterPage />} />
          <Route
            path="/loginseller"
            element={<PetaniLoginPage userType="petani" />}
          />
          <Route path="/registerseller" element={<PetaniRegisterPage />} />
          <Route path="/stepone" element={<StepOne />} />
          <Route path="/steptwo" element={<StepTwo />} />
          <Route path="/stepthree" element={<StepThree />} />

          {/* Protected Routes for Pembeli */}
          <Route
            path="/home"
            element={
              <ProtectedRoute
                element={PembeliHomePage}
                allowedUserTypes={["pembeli"]}
              />
            }
          />
          <Route
            path="/aboutus"
            element={
              <ProtectedRoute
                element={AboutUs}
                allowedUserTypes={["pembeli", "petani"]}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute
                element={Wishlist}
                allowedUserTypes={["pembeli"]}
              />
            }
          />
          <Route
            path="/allproducts"
            element={
              <ProtectedRoute
                element={AllProducts}
                allowedUserTypes={["pembeli", "petani"]}
              />
            }
          />
          <Route
            path="/detailproduct/:produkID"
            element={
              <ProtectedRoute
                element={DetailProduct}
                allowedUserTypes={["pembeli", "petani"]}
              />
            }
          />
          <Route
            path="/chat"
            element={
              <ProtectedRoute
                element={ChatPage}
                allowedUserTypes={["pembeli"]}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute
                element={CartPage}
                allowedUserTypes={["pembeli", "petani"]}
              />
            }
          />
          <Route
            path="/marketprice"
            element={
              <ProtectedRoute
                element={MarketPrice}
                allowedUserTypes={["pembeli"]}
              />
            }
          />
          <Route
            path="/detailblog"
            element={
              <ProtectedRoute
                element={DetailBlog}
                allowedUserTypes={["pembeli", "petani"]}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={ProfilePage}
                allowedUserTypes={["pembeli"]}
              />
            }
          />
          <Route
            path="/editprofile"
            element={
              <ProtectedRoute
                element={EditProfile}
                allowedUserTypes={["pembeli"]}
              />
            }
          />
          <Route
            path="/editalamat"
            element={
              <ProtectedRoute
                element={EditAlamat}
                allowedUserTypes={["pembeli", "petani"]}
              />
            }
          />
          <Route
            path="/riwayatpesanan"
            element={
              <ProtectedRoute
                element={RiwayatPesanan}
                allowedUserTypes={["pembeli"]}
              />
            }
          />
          <Route
            path="/trackingorder"
            element={
              <ProtectedRoute
                element={TrackingOrder}
                allowedUserTypes={["pembeli"]}
              />
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute
                element={Payment}
                allowedUserTypes={["pembeli", "petani"]}
              />
            }
          />
          <Route
            path="/paymentmethod"
            element={
              <ProtectedRoute
                element={PaymentMethod}
                allowedUserTypes={["pembeli", "petani"]}
              />
            }
          />
          <Route
            path="/pembayaran"
            element={
              <ProtectedRoute
                element={PembayaranPage}
                allowedUserTypes={["pembeli", "petani"]}
              />
            }
          />
          <Route
            path="/success"
            element={
              <ProtectedRoute
                element={SuccessPayment}
                allowedUserTypes={["pembeli", "petani"]}
              />
            }
          />

          {/* Protected Routes for Petani */}
          <Route
            path="/homeseller"
            element={
              <ProtectedRoute
                element={PetaniHomePage}
                allowedUserTypes={["petani"]}
              />
            }
          />
          <Route
            path="/wishlistseller"
            element={
              <ProtectedRoute
                element={WishlistPetani}
                allowedUserTypes={["petani"]}
              />
            }
          />
          <Route
            path="/marketpriceseller"
            element={
              <ProtectedRoute
                element={MarketPricePetani}
                allowedUserTypes={["petani"]}
              />
            }
          />
          <Route
            path="/detailproductseller"
            element={
              <ProtectedRoute
                element={PetaniDetailProduct}
                allowedUserTypes={["petani"]}
              />
            }
          />
          <Route
            path="/profileseller"
            element={
              <ProtectedRoute
                element={PetaniProfilePage}
                allowedUserTypes={["petani"]}
              />
            }
          />
          <Route
            path="/editprofiletoko"
            element={
              <ProtectedRoute
                element={EditProfileToko}
                allowedUserTypes={["petani"]}
              />
            }
          />
          <Route
            path="/menupesanan"
            element={
              <ProtectedRoute
                element={MenuPesanan}
                allowedUserTypes={["petani"]}
              />
            }
          />
          <Route
            path="/historytransaction"
            element={
              <ProtectedRoute
                element={HistoryTransaction}
                allowedUserTypes={["petani"]}
              />
            }
          />
          <Route
            path="/uploadproduct"
            element={
              <ProtectedRoute
                element={UploadProduct}
                allowedUserTypes={["petani"]}
              />
            }
          />
          <Route
            path="/informasiproduct"
            element={
              <ProtectedRoute
                element={ProductIn}
                allowedUserTypes={["petani"]}
              />
            }
          />
          <Route
            path="/myproduct"
            element={
              <ProtectedRoute
                element={MyProduct}
                allowedUserTypes={["petani"]}
              />
            }
          />

          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
