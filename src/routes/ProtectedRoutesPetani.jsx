import PetaniProfilePage from "../pages/seller/profile_seller";
import MenuPesanan from "../pages/seller/menu_pesanan";
import HistoryTransaction from "../pages/seller/history_transaction";
import EditProfileToko from "../pages/seller/edit_profile_toko";
import UploadProduct from "../pages/upload_product";
import ProductIn from "../pages/product_information";
import MyProduct from "../pages/my_product";
import EditAlamatSeller from "../pages/edit_alamat_seller";
import PaymentMethod from "../sections/payment/payment_method";

const ProtectedRoutesPetani = [
  { path: "/profileseller", element: PetaniProfilePage, allowedUserTypes: ["petani"] },
  { path: "/editprofiletoko", element: EditProfileToko, allowedUserTypes: ["petani"] },
  { path: "/menupesanan", element: MenuPesanan, allowedUserTypes: ["petani"] },
  { path: "/historytransaction", element: HistoryTransaction, allowedUserTypes: ["petani"] },
  { path: "/uploadproduct", element: UploadProduct, allowedUserTypes: ["petani"] },
  { path: "/informasiproduct", element: ProductIn, allowedUserTypes: ["petani"] },
  { path: "/myproduct", element: MyProduct, allowedUserTypes: ["petani"] },
  { path: "/editalamatseller", element: EditAlamatSeller, allowedUserTypes: ["petani"] },
  { path: "/paymentmethod", element: PaymentMethod, allowedUserTypes: ["petani"] },
];

export default ProtectedRoutesPetani;
