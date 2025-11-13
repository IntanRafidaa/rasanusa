<template>
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
  </div>
</template>

<script setup>
import HeroBanner from "../components/HeroBanner.vue"
import { kategoriProduk } from "../data/produk"

// Ambil semua produk dari semua kategori & subkategori
const rekomendasiProduk = kategoriProduk
  .flatMap((k) => k.subkategori || [])
  .flatMap((sub) => sub.produk || [])
</script>
