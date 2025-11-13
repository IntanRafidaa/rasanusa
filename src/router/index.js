import { createRouter, createWebHistory } from "vue-router"

<<<<<<< HEAD
// Pages utama
import Home from "../pages/Home.vue"
import Shop from "../pages/Shop.vue"
import Cart from "../pages/Cart.vue"
import CheckoutPage from "../pages/CheckoutPage.vue"
import History from "../pages/History.vue"
import About from "../pages/About.vue"
import ProductDetail from "../pages/ProductDetail.vue"
import Profile from "../pages/Profile.vue"
import ProfileEdit from "../pages/ProfileEdit.vue"
import CheckoutSuccess from "../pages/CheckoutSuccess.vue"

// Address Pages
import PilihAlamat from "../pages/PilihAlamat.vue"
import AlamatBaru from "../pages/AlamatBaru.vue"

// Auth Pages
import LoginPage from "../LoginPage.vue"
import RegisterPage from "../RegisterPage.vue"

// Layout untuk akun (dropdown akun saya)
import AccountLayout from "../layouts/AccountLayout.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/shop", name: "Shop", component: Shop },
  { path: "/shop/:kategori?", name: "ShopKategori", component: Shop, props: true },
  { path: "/product/:id", name: "ProductDetail", component: ProductDetail, props: true },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/checkout", name: "Checkout", component: CheckoutPage },
  { path: "/about", name: "About", component: About },

  // Profile
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/edit-profile", name: "ProfileEdit", component: ProfileEdit },

  // Address
  { path: "/alamat", name: "Alamat", component: PilihAlamat },
  { path: "/alamat-baru", name: "AlamatBaru", component: AlamatBaru },

  // Auth Routes
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/checkout-success", name: "CheckoutSuccess", component: CheckoutSuccess },

  // Account Layout (untuk dropdown "Akun Saya")
  {
    path: "/account",
    component: AccountLayout,
    children: [
      { path: "profile", name: "AccountProfile", component: Profile },
      { path: "address", name: "AccountAddress", component: () => import("../pages/AccountAddress.vue") },
      { path: "orders", name: "AccountOrders", component: History },
    ],
  },

  // Order Detail (pisah biar bisa diakses dari riwayat)
  {
    path: "/order/:id",
    name: "OrderDetail",
    component: () => import("../pages/OrderDetail.vue"),
  },
=======
// import halaman
import Home from "../pages/Home.vue"
import Kategori from "../pages/Kategori.vue"
import Tentang from "../pages/Tentang.vue"
import SemuaResep from "../pages/SemuaResep.vue"
import DetailResep from "../pages/DetailResep.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/kategori/:jenis?", component: Kategori },
  { path: "/tentang", component: Tentang },
  { path: "/semua-resep", component: SemuaResep },
  { path: "/resep/:id", component: DetailResep },
>>>>>>> da3dd62fb1b46002dcb031c258fa1b55dc7db935
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
