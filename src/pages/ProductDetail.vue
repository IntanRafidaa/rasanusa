<template>
  <div class="bg-gray-50 min-h-screen py-10">
    <div
      v-if="produk"
      class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      <!-- Gambar Produk -->
      <div>
        <img
          :src="produk.image"
          :alt="produk.name"
          class="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- Detail Produk -->
      <div>
        <h1 class="text-3xl font-bold text-gray-800 mb-3">
          {{ produk.name }}
        </h1>
        <p class="text-xl text-blue-600 font-bold mb-6">
          Rp{{ produk.price?.toLocaleString() }}
        </p>

        <!-- Pilihan Warna -->
        <div class="mb-4" v-if="produk.colors && produk.colors.length">
          <h2 class="text-lg font-medium text-gray-700 mb-2">Pilih Warna</h2>
          <div class="flex gap-3 flex-wrap">
            <button
              v-for="(warna, i) in produk.colors"
              :key="i"
              type="button"
              @click="warnaTerpilih = warna"
              :class="[ 
                'px-4 py-2 rounded-md border transition',
                warnaTerpilih === warna
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ warna }}
            </button>
          </div>
        </div>

        <!-- Pilihan Ukuran -->
        <div class="mb-6" v-if="produk.sizes && produk.sizes.length">
          <h2 class="text-lg font-medium text-gray-700 mb-2">Pilih Ukuran</h2>
          <div class="flex gap-3 flex-wrap">
            <button
              v-for="(ukuran, i) in produk.sizes"
              :key="i"
              type="button"
              @click="ukuranTerpilih = ukuran"
              :class="[ 
                'px-4 py-2 rounded-md border transition',
                ukuranTerpilih === ukuran
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ ukuran }}
            </button>
          </div>
        </div>

        <!-- Pilih Jumlah -->
        <div class="mb-6">
          <h2 class="text-lg font-medium text-gray-700 mb-2">Jumlah</h2>
          <div class="flex items-center gap-4">
            <button
              type="button"
              class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              @click="kurangiJumlah"
            >
              -
            </button>

            <span class="text-lg font-semibold w-8 text-center">{{ quantity }}</span>

            <button
              type="button"
              class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              @click="tambahJumlah"
            >
              +
            </button>
          </div>
        </div>

        <!-- Tombol Aksi -->
        <div class="flex gap-4 mb-6">
          <button
            type="button"
            class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
            @click="tambahKeKeranjang"
          >
            Tambah ke Keranjang
          </button>

          <button
            type="button"
            class="flex-1 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
            @click="buyNow"
          >
            Beli Sekarang
          </button>
        </div>

        <!-- Info Tambahan -->
        <div
          class="bg-white rounded-lg shadow-md p-6"
          v-if="produk.details && produk.details.length"
        >
          <h2 class="text-lg font-semibold text-gray-800 mb-3">Info Produk</h2>
          <ul class="list-disc pl-6 text-gray-600 space-y-1">
            <li v-for="(detail, i) in produk.details" :key="i">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Jika produk tidak ditemukan -->
    <div v-else class="text-center py-20 text-gray-500">
      <h2 class="text-2xl font-semibold mb-2">Produk tidak ditemukan 😢</h2>
      <p>Periksa kembali link atau ID produk kamu.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { kategoriProduk } from "../data/produk"
import { useCartStore } from "../stores/useCartStore"
import { useCheckoutStore } from "../stores/useCheckoutStore"

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const checkoutStore = useCheckoutStore()

const warnaTerpilih = ref(null)
const ukuranTerpilih = ref(null)
const quantity = ref(1)

const produk = computed(() => {
  const allProducts = kategoriProduk
    ?.flatMap(k => k.subkategori || [])
    .flatMap(sub => sub.produk || [])
  return allProducts.find(p => p.id?.toString() === route.params.id?.toString()) || null
})

onMounted(() => {
  console.log("Route ID:", route.params.id)
  console.log("Produk ditemukan:", produk.value)

  // Jika produk tidak punya warna atau ukuran, langsung set null
  if (!produk.value?.colors || produk.value.colors.length === 0) warnaTerpilih.value = null
  if (!produk.value?.sizes || produk.value.sizes.length === 0) ukuranTerpilih.value = null
})

const tambahJumlah = () => quantity.value++
const kurangiJumlah = () => { if (quantity.value > 1) quantity.value-- }

// Tambah ke keranjang
const tambahKeKeranjang = () => {
  if (!produk.value) { alert("Produk tidak ditemukan!"); return }

  // Cek hanya jika produk punya warna/ukuran
  if (produk.value.colors?.length && !warnaTerpilih.value) { alert("Pilih warna terlebih dahulu!"); return }
  if (produk.value.sizes?.length && !ukuranTerpilih.value) { alert("Pilih ukuran terlebih dahulu!"); return }

  cartStore.addToCart(
    produk.value,
    warnaTerpilih.value || "",
    ukuranTerpilih.value || "",
    quantity.value
  )
  alert("Produk berhasil ditambahkan ke keranjang!")
}

// Beli Sekarang
const buyNow = () => {
  if (!produk.value) { alert("Produk tidak ditemukan!"); return }

  if (produk.value.colors?.length && !warnaTerpilih.value) { alert("Pilih warna terlebih dahulu!"); return }
  if (produk.value.sizes?.length && !ukuranTerpilih.value) { alert("Pilih ukuran terlebih dahulu!"); return }

  const item = {
    ...produk.value,
    color: warnaTerpilih.value || "",
    size: ukuranTerpilih.value || "",
    qty: quantity.value
  }

  checkoutStore.setItems([item])
  router.push({ name: "Checkout" })
}
</script>
