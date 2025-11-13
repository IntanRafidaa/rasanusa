<template>
<<<<<<< HEAD
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
      <!-- Logo (klik balik ke Home) -->
      <router-link to="/" class="flex items-center space-x-2">
        <img
          src="../assets/logoo.png"
          alt="Shopora Logo"
          class="h-10 w-auto object-contain cursor-pointer"
        />
      </router-link>

      <!-- Search Bar -->
      <div class="flex-1 mx-6">
        <form @submit.prevent="handleSearch" class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari produk, tren, atau merek"
            class="w-full border border-gray-300 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span class="material-icons absolute left-3 top-2.5 text-gray-500">
            search
          </span>
        </form>
      </div>

      <!-- Cart + Profil -->
      <div class="flex items-center space-x-6">
        <!-- Cart -->
        <router-link to="/cart" class="relative">
          <span class="material-icons text-2xl text-gray-700 hover:text-blue-500">
            shopping_cart
          </span>
          <span
            v-if="cartCount > 0"
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
          >
            {{ cartCount }}
          </span>
        </router-link>

        <!-- Profil Dropdown -->
        <div class="relative">
          <span
            class="material-icons text-3xl text-gray-700 cursor-pointer hover:text-blue-500"
            @click="toggleDropdown"
          >
            account_circle
          </span>
          <div
            v-if="showDropdown"
            class="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50"
          >
            <router-link
  :to="{ name: 'AccountProfile' }"
  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
>
  Profil
</router-link>

            <router-link
  :to="{ name: 'AccountOrders' }"
  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
>
  Pesanan Saya
</router-link>

            <button
              @click="logout"
              class="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Sub Navbar Kategori -->
    <div class="bg-blue-500 text-white text-sm">
      <div class="max-w-7xl mx-auto flex items-center space-x-6 px-6 py-2 overflow-x-auto">
        <!-- Link balik ke Home -->
        <router-link to="/" class="hover:underline whitespace-nowrap">
          Home
        </router-link>

        <!-- Loop kategori dari produk.js -->
        <router-link
          v-for="(cat, i) in kategoriProduk"
          :key="i"
          :to="{ path: '/shop', query: { cat: cat.nama.toLowerCase() } }"
          class="hover:underline whitespace-nowrap"
        >
          {{ cat.nama }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from "../stores/useCartStore"
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
import { kategoriProduk } from "../data/produk"

const cartStore = useCartStore()
const cartCount = computed(() => cartStore.items.length)

const router = useRouter()
const searchQuery = ref("")

// search logic
const handleSearch = () => {
  if (searchQuery.value.trim() !== "") {
    router.push({ path: "/shop", query: { q: searchQuery.value } })
  } else {
    router.push({ path: "/shop" })
  }
}

// dropdown profil
const showDropdown = ref(false)
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

// logout dummy
const logout = () => {
  alert("Berhasil logout!")
  router.push("/login")
  showDropdown.value = false
}
</script>
=======
  <nav class="bg-red-500 text-white shadow-md fixed top-0 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="/src/assets/logo-rasanusa.png" alt="RasaNusa Logo" class="w-10 h-10 rounded-full" />
        <RouterLink to="/" class="text-2xl font-bold hover:text-red-200 transition">
          RasaNusa
        </RouterLink>
      </div>

      <ul class="flex gap-6 items-center">
        <li><RouterLink to="/">Home</RouterLink></li>

        <li class="relative group">
          <span class="cursor-pointer">Kategori ▼</span>
          <ul class="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg">
            <li><RouterLink to="/kategori/makanan" class="block px-4 py-2 hover:bg-gray-100">Makanan</RouterLink></li>
            <li><RouterLink to="/kategori/minuman" class="block px-4 py-2 hover:bg-gray-100">Minuman</RouterLink></li>
            <li><RouterLink to="/kategori/camilan" class="block px-4 py-2 hover:bg-gray-100">Camilan</RouterLink></li>
          </ul>
        </li>

        <li><RouterLink to="/tentang">Tentang</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>
>>>>>>> da3dd62fb1b46002dcb031c258fa1b55dc7db935
