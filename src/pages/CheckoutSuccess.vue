<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
    <!-- Icon Berhasil -->
    <div class="bg-blue-100 rounded-full p-6 mb-6">
      <svg class="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <h1 class="text-2xl font-bold text-blue-700 mb-2">Checkout Berhasil!</h1>
    <p class="text-gray-700 mb-6 text-center">
      Terima kasih telah melakukan pemesanan. Pesanan Anda sedang diproses dan akan segera dikirim.
    </p>

    <!-- Ringkasan Pesanan -->
    <div class="bg-white p-4 rounded-lg shadow w-full max-w-md mb-6">
      <h2 class="font-semibold text-gray-800 mb-2">Ringkasan Pesanan</h2>
      <p class="text-sm text-gray-600">
        <strong>Alamat:</strong> {{ alamat?.nama || "-" }} - {{ alamat?.jalan || "-" }}
      </p>
      <p class="text-sm text-gray-600 mb-2">
        <strong>Metode Pembayaran:</strong> {{ payment || "-" }}
      </p>
    </div>

    <div class="bg-white p-4 rounded-lg shadow w-full max-w-md mb-6">
      <div class="flex justify-between text-gray-600 mb-1">
        <span>Subtotal Pesanan</span>
        <span>Rp{{ subtotal.toLocaleString() }}</span>
      </div>
      <div class="flex justify-between text-gray-600 mb-1" v-if="totalProteksi > 0">
        <span>Total Proteksi</span>
        <span>Rp{{ totalProteksi.toLocaleString() }}</span>
      </div>
      <div class="flex justify-between text-gray-600 mb-1">
        <span>Biaya Layanan</span>
        <span>Rp{{ biayaLayanan.toLocaleString() }}</span>
      </div>
      <div class="flex justify-between text-gray-600 mb-1">
        <span>Ongkir ({{ kurir.nama }})</span>
        <span>Rp{{ ongkir.toLocaleString() }}</span>
      </div>
      <div class="flex justify-between text-gray-600 mb-1 text-red-500" v-if="diskonOngkir > 0">
        <span>Diskon Ongkir</span>
        <span>-Rp{{ diskonOngkir.toLocaleString() }}</span>
      </div>
      <div class="flex justify-between font-bold text-gray-800 border-t pt-2 mt-2">
        <span>Total Pembayaran</span>
        <span class="text-blue-600">Rp{{ totalPembayaran.toLocaleString() }}</span>
      </div>
    </div>

    <!-- Tombol aksi -->
    <div class="flex gap-4">
      <button
        @click="kembaliHome"
        class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Kembali ke Beranda
      </button>

      <button
        @click="lihatPesanan"
        class="ml-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Lihat Pesanan
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRouter } from "vue-router"
import { useCheckoutStore } from "../stores/useCheckoutStore"
import { useCartStore } from "../stores/useCartStore"

const router = useRouter()
const checkoutStore = useCheckoutStore()
const cartStore = useCartStore()

// Ambil data pesanan terakhir
const order = computed(() => checkoutStore.order || {})

const items = computed(() => order.value.items || [])
const alamat = computed(() => order.value.address || {})
const kurir = computed(() => order.value.kurir || { nama: "JNE", biaya: 3500 })
const payment = computed(() => order.value.payment || "-")

// Perhitungan biaya
const subtotal = computed(() =>
  items.value.reduce((sum, item) => sum + (item.qty || 1) * (item.price || 0), 0)
)
const totalProteksi = computed(() =>
  items.value.reduce((sum, item) => sum + (item.proteksi || 0), 0)
)
const biayaLayanan = 2000
const ongkir = computed(() => kurir.value.biaya || 0)
const diskonOngkir = 3500
const totalPembayaran = computed(() =>
  subtotal.value + totalProteksi.value + biayaLayanan + ongkir.value - diskonOngkir
)

// Tombol kembali home
const kembaliHome = () => {
  checkoutStore.clear()
  cartStore.clearCart()
  router.push({ name: "Home" })
}

// Tombol lihat pesanan — navigasi aman (coba name dulu, fallback ke path)
const lihatPesanan = () => {
  if (checkoutStore.order) {
    checkoutStore.addOrderToHistory(checkoutStore.order)
  }

  checkoutStore.clear()
  cartStore.clearCart()

  router.push({ name: "AccountOrders", query: { tab: "Belum Bayar" } })
}
</script>
