<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">Detail Pesanan</h2>

    <div v-if="order" class="bg-white shadow-md rounded-xl p-6 space-y-4">
      <!-- Produk -->
      <div v-for="(item, i) in order.items" :key="i" class="flex gap-4 items-center border-b pb-3">
        <img :src="item.image" alt="Produk" class="w-20 h-20 object-cover rounded" />
        <div class="flex-1">
          <h3 class="font-semibold text-gray-800">{{ item.name }}</h3>
          <p class="text-gray-600 text-sm">Ukuran: {{ item.size || item.ukuran || '-' }}</p>
          <p class="text-gray-600 text-sm">Warna: {{ item.color || item.warna || '-' }}</p>
          <p class="text-gray-600 text-sm">Jumlah: {{ item.qty || 1 }}</p>
          <p class="text-blue-600 font-bold">Rp{{ (item.price * (item.qty || 1)).toLocaleString() }}</p>
        </div>
      </div>

      <!-- Alamat Pengiriman -->
      <div class="mt-4">
        <p class="font-semibold text-gray-800 mb-1">Alamat Pengiriman</p>
        <p class="text-sm text-gray-600">{{ order.address.nama }} | {{ order.address.telepon }}</p>
        <p class="text-sm text-gray-600">
          {{ order.address.jalan }}
          <span v-if="order.address.detail">, {{ order.address.detail }}</span>
        </p>
      </div>

      <!-- Metode Pengiriman -->
      <div class="mt-4">
        <p class="font-semibold text-gray-800 mb-1">Metode Pengiriman</p>
        <p class="text-sm text-gray-600">{{ order.kurir.nama }} - Rp{{ order.kurir.biaya.toLocaleString() }}</p>
      </div>

      <!-- Metode Pembayaran -->
      <div class="mt-4">
        <p class="font-semibold text-gray-800 mb-1">Metode Pembayaran</p>
        <p class="text-sm text-gray-600">{{ order.payment }}</p>
      </div>

      <!-- Status & Total -->
      <div class="mt-4 flex justify-between items-center">
        <p class="text-gray-600">Status: <span :class="statusClass(order.status)">{{ order.status }}</span></p>
        <p class="font-bold text-red-600 text-lg">Rp{{ order.total.toLocaleString() }}</p>
      </div>

      <!-- Tombol -->
      <div class="mt-4 flex gap-2">
        <button v-if="order.status === 'Belum Dibayar'" @click="batalkanPesanan" class="bg-red-500 text-white px-4 py-2 rounded-lg">
          Batalkan Pesanan
        </button>
        <button @click="router.back()" class="bg-gray-200 px-4 py-2 rounded-lg">
          Kembali
        </button>
      </div>
    </div>

    <div v-else class="text-center text-gray-500 mt-10">
      Pesanan tidak ditemukan.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useCheckoutStore } from "../stores/useCheckoutStore"

const route = useRoute()
const router = useRouter()
const checkoutStore = useCheckoutStore()
const order = ref(null)

onMounted(() => {
  checkoutStore.loadOrders()
  order.value = checkoutStore.orderHistory[Number(route.params.id)]
})

const batalkanPesanan = () => {
  const index = checkoutStore.orderHistory.findIndex(o => o === order.value)
  if (index !== -1) {
    checkoutStore.updateOrderStatus(index, "Dibatalkan")
    router.back()
  }
}

const statusClass = (status) => {
  switch (status) {
    case "Belum Dibayar": return "text-yellow-500"
    case "Sedang Diproses": return "text-blue-500"
    case "Dikirim": return "text-orange-500"
    case "Selesai": return "text-green-600"
    case "Dibatalkan": return "text-red-600"
    default: return ""
  }
}
</script>
