<template>
<<<<<<< HEAD
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Banner -->
    <HeroBanner />

    <!-- Top Banner Event -->
    <section class="bg-blue-600 text-white text-center py-2">
      <p class="text-sm font-semibold">
        🎉 10.10 Festival Belanja - Diskon Hingga 70% 🎉
      </p>
    </section>

    <!-- Banner Promo -->
    <section class="max-w-6xl mx-auto px-4 mt-4">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="bg-yellow-100 rounded-lg p-4 text-center font-bold text-gray-800">
          Diskon Hingga Rp50.000
        </div>
        <div class="bg-blue-100 rounded-lg p-4 text-center font-bold text-gray-800">
          Gratis Ongkir
        </div>
        <div class="bg-green-100 rounded-lg p-4 text-center font-bold text-gray-800">
          Cashback 20%
        </div>
      </div>
    </section>

    <!-- Flash Sale -->
    <section class="max-w-6xl mx-auto px-4 py-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold text-gray-800">🔥 Flash Sale</h2>
        <span class="text-sm text-red-500 font-semibold">01:52:15</span>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <router-link
          v-for="(produk, i) in rekomendasiProduk.slice(0, 5)"
          :key="produk.id || i"
          :to="`/product/${produk.id}`"
          class="bg-white rounded-lg shadow hover:shadow-lg transition p-3"
        >
          <img
            :src="produk.image"
            :alt="produk.name"
            class="w-full h-32 object-cover rounded-md mb-2"
          />
          <h3 class="text-sm font-semibold text-gray-700 truncate">
            {{ produk.name }}
          </h3>
          <p class="text-red-600 font-bold mt-1">
            Rp{{ (produk.price || 0).toLocaleString() }}
          </p>
        </router-link>
      </div>
    </section>

    <!-- Produk Rekomendasi -->
    <section class="max-w-6xl mx-auto px-4 py-8">
      <h2 class="text-lg font-bold text-gray-800 mb-4">Produk Rekomendasi</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <router-link
          v-for="(produk, i) in rekomendasiProduk"
          :key="produk.id || i"
          :to="`/product/${produk.id}`"
          class="bg-white rounded-lg shadow hover:shadow-lg transition p-3"
        >
          <img
            :src="produk.image"
            :alt="produk.name"
            class="w-full h-32 object-cover rounded-md mb-2"
          />
          <h3 class="text-sm font-semibold text-gray-700 truncate">
            {{ produk.name }}
          </h3>
          <p class="text-blue-600 font-bold mt-1">
            Rp{{ (produk.price || 0).toLocaleString() }}
          </p>
        </router-link>
      </div>
    </section>
=======
  <div class="pt-24 text-center px-6">
    <div class="flex flex-col items-center">
      <img
        src="/src/assets/logo-rasanusa.png"
        alt="Logo RasaNusa"
        class="w-24 h-24 mb-4 drop-shadow-lg"
      />
      <h1 class="text-4xl font-extrabold text-orange-600 mb-2">Selamat Datang di RasaNusa 🍴</h1>
      <p class="text-gray-600 max-w-xl mx-auto mb-8">
        Temukan cita rasa Nusantara dari dapur ke layar — resep autentik, sederhana, dan lezat.
      </p>
    </div>
    <input
      v-model="search"
      type="text"
      placeholder="Cari resep favoritmu..."
      class="w-full p-3 border rounded-lg mb-6 focus:ring-2 focus:ring-pink-400"
    />

    <!-- Menu Terbaru -->
    <h2 class="text-2xl font-bold mb-4 text-primary">🍳 Menu Terbaru</h2>
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <ResepCard v-for="r in filteredTerbaru" :key="r.id" :resep="r" />
    </div>

    <!-- Menu Populer -->
    <h2 class="text-2xl font-bold mb-4 text-primary">🔥 Menu Populer</h2>
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <ResepCard v-for="r in filteredPopuler" :key="r.id" :resep="r" />
    </div>

    <div class="text-center">
      <RouterLink
        to="/semua-resep"
        class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
      >Menu Lainnya 🍛</RouterLink>
    </div>
>>>>>>> da3dd62fb1b46002dcb031c258fa1b55dc7db935
  </div>
</template>

<script setup>
<<<<<<< HEAD
import HeroBanner from "../components/HeroBanner.vue"
import { kategoriProduk } from "../data/produk"

// Ambil semua produk dari semua kategori & subkategori
const rekomendasiProduk = kategoriProduk
  .flatMap((k) => k.subkategori || [])
  .flatMap((sub) => sub.produk || [])
=======
import { ref, computed } from "vue"
import { useResepStore } from "../stores/useResepStore"
import ResepCard from "../components/ResepCard.vue"

const store = useResepStore()
const search = ref("")

const filteredTerbaru = computed(() =>
  store.terbaru.filter(r => r.nama.toLowerCase().includes(search.value.toLowerCase()))
)
const filteredPopuler = computed(() =>
  store.populer.filter(r => r.nama.toLowerCase().includes(search.value.toLowerCase()))
)
>>>>>>> da3dd62fb1b46002dcb031c258fa1b55dc7db935
</script>
