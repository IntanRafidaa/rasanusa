import { createRouter, createWebHistory } from "vue-router"

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
