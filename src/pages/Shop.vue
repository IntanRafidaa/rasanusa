<template>
  <div class="max-w-7xl mx-auto px-6 py-6">
    <!-- Judul Kategori -->
    <h1 class="text-2xl font-bold mb-6">
      {{ currentCatLabel }}
    </h1>


    <!-- Grid Produk -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <router-link
        v-for="produk in produkTampil"
        :key="produk.id"
        :to="`/product/${produk.id}`"
        class="bg-white rounded-lg shadow p-3 hover:shadow-lg transition flex flex-col"
      >
        <img
          :src="produk.image"
          :alt="produk.name"
          class="w-full h-32 md:h-40 object-cover rounded-md mb-2"
        />
        <h3 class="text-sm font-semibold text-gray-700 truncate">
          {{ produk.name }}
        </h3>
        <p class="text-gray-500 text-xs truncate">{{ produk.brand }}</p>
        <p class="text-blue-600 font-bold mt-auto">
          Rp{{ produk.price.toLocaleString() }}
        </p>
      </router-link>
    </div>

    <!-- Jika produk kosong -->
    <p v-if="produkTampil.length === 0" class="text-center text-gray-500 mt-6">
      Produk tidak ditemukan 😢
    </p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { kategoriProduk } from "../data/produk"

const route = useRoute()
const router = useRouter()

// Semua produk (flatten)
const allProduk = kategoriProduk.flatMap((k) =>
  k.subkategori.flatMap((s) => s.produk)
)

// Current category dari query
const currentCat = computed(() => route.query.cat || "")

// Local search query untuk input
const searchQueryLocal = ref(route.query.q || "")

// Update query saat search
const updateSearch = () => {
  router.replace({
    query: { ...route.query, q: searchQueryLocal.value || undefined }
  })
}

// Label kategori
const currentCatLabel = computed(() => {
  if (!currentCat.value) return "Semua Produk"
  const kategori = kategoriProduk.find(
    (k) => k.nama.toLowerCase() === currentCat.value.toLowerCase()
  )
  return kategori ? kategori.nama : "Semua Produk"
})

// Filter produk
const produkTampil = computed(() => {
  let hasil = allProduk

  if (currentCat.value) {
    const kategori = kategoriProduk.find(
      (k) => k.nama.toLowerCase() === currentCat.value.toLowerCase()
    )
    hasil = kategori ? kategori.subkategori.flatMap((s) => s.produk) : []
  }

  if (searchQueryLocal.value) {
    hasil = hasil.filter((p) =>
      p.name.toLowerCase().includes(searchQueryLocal.value.toLowerCase())
    )
  }

  return hasil
})

// Watch query q untuk sinkron input
watch(
  () => route.query.q,
  (newQ) => {
    searchQueryLocal.value = newQ || ""
  }
)
</script>

<style scoped>
/* optional tambahan hover card */
</style>
