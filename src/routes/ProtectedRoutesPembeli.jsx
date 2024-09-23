import PembeliHomePage from "../pages/home";
import AboutUs from "../pages/aboutus";
import Wishlist from "../pages/wishlist";
import AllProducts from "../pages/all_product";
import DetailProduct from "../pages/detail_product";
import ChatPage from "../pages/chat";
import CartPage from "../pages/keranjang";
import MarketPrice from "../pages/market_price";
import DetailBlog from "../pages/detail_blog";
import ProfilePage from "../pages/profile";
import EditProfile from "../pages/edit_profile";
import EditAlamat from "../pages/edit_alamat";
import RiwayatPesanan from "../pages/riwayat_pesanan";
import TrackingOrder from "../pages/tracking_order";
import Payment from "../pages/payment";
import PembayaranPage from "../sections/payment/pembayaran";
import SuccessPayment from "../components/specific/success";
import UserPayment from "../pages/user_payment";
import AnimatedImages from "../pages/success/animate_success";

const ProtectedRoutesPembeli = [
  { path: "/home", element: PembeliHomePage, allowedUserTypes: ["pembeli", "petani"] },
  { path: "/aboutus", element: AboutUs, allowedUserTypes: ["pembeli", "petani"] },
  { path: "/wishlist", element: Wishlist, allowedUserTypes: ["pembeli", "petani"] },
  { path: "/allproducts", element: AllProducts, allowedUserTypes: ["pembeli", "petani"] },
  { path: "/detailproduct/:produkID", element: DetailProduct, allowedUserTypes: ["pembeli", "petani"] },
  { path: "/chat", element: ChatPage, allowedUserTypes: ["pembeli"] },
  { path: "/cart", element: CartPage, allowedUserTypes: ["pembeli", "petani"] },
  { path: "/marketprice", element: MarketPrice, allowedUserTypes: ["pembeli", "petani"] },
  { path: "/marketprice/detailblog", element: DetailBlog, allowedUserTypes: ["pembeli", "petani"] },
  { path: "/profile", element: ProfilePage, allowedUserTypes: ["pembeli"] },
  { path: "/editprofile", element: EditProfile, allowedUserTypes: ["pembeli"] },
  { path: "/editalamat", element: EditAlamat, allowedUserTypes: ["pembeli"] },
  { path: "/riwayatpesanan", element: RiwayatPesanan, allowedUserTypes: ["pembeli"] },
  { path: "/trackingorder", element: TrackingOrder, allowedUserTypes: ["pembeli"] },
  { path: "/userpayment", element: UserPayment, allowedUserTypes: ["pembeli", "petani"] },
  { path: "/success", element: AnimatedImages, allowedUserTypes: ["pembeli"] },
];

export default ProtectedRoutesPembeli;
