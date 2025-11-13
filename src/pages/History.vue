<template>
  <div class="p-6 max-w-5xl mx-auto">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">Riwayat Pesanan</h1>

    <!-- Tabs Filter -->
    <div class="flex flex-wrap gap-2 mb-6">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="selectedTab = tab"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
          selectedTab === tab
            ? 'bg-blue-500 text-white shadow'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        ]"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Jika belum ada pesanan -->
    <div
      v-if="filteredOrders.length === 0"
      class="flex flex-col items-center justify-center text-center p-10"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
        alt="No Order"
        class="w-32 h-32 mb-4 opacity-70"
      />
      <p class="text-gray-500 text-sm">Belum ada pesanan untuk kategori ini</p>
    </div>

    <!-- Jika ada pesanan -->
    <div v-else class="space-y-4">
      <div
        v-for="(order, index) in filteredOrders"
        :key="index"
        class="bg-white p-4 rounded-xl shadow border flex flex-col md:flex-row items-center gap-4"
      >
        <!-- Foto Produk -->
        <img
          :src="order.image || '/default-product.jpg'"
          alt="Produk"
          class="w-24 h-24 rounded-lg object-cover border"
        />

        <!-- Detail Pesanan -->
        <div class="flex-1 w-full">
          <h2 class="font-semibold text-gray-800 text-lg">{{ order.name }}</h2>
          <p class="text-sm text-gray-600">Jumlah: {{ order.quantity || 1 }}</p>
          <p class="text-sm text-gray-600 mb-1">
            <strong>Metode Pembayaran:</strong> {{ order.payment || '-' }}
          </p>
          <p class="text-sm text-gray-600">
            <strong>Status:</strong>
            <span
              :class="{
                'text-yellow-600': order.status === 'Belum Dibayar',
                'text-blue-600': order.status === 'Sedang Diproses',
                'text-purple-600': order.status === 'Dikirim',
                'text-green-600': order.status === 'Selesai',
                'text-red-600': order.status === 'Dibatalkan',
              }"
            >
              {{ order.status }}
            </span>
          </p>
          <p class="text-sm text-gray-500 mt-1">Tanggal: {{ order.date }}</p>
        </div>

        <!-- Total dan tombol -->
        <div class="flex flex-col items-end">
          <p class="font-semibold text-red-600 mb-2">
            Rp{{
              order.total?.toLocaleString() ||
              (order.price * (order.quantity || 1)).toLocaleString()
            }}
          </p>
          <button
            @click="$router.push({ name: 'OrderDetail', params: { id: index } })"
            class="text-blue-600 hover:underline text-sm"
          >
            Lihat Pesanan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import { useCheckoutStore } from "../stores/useCheckoutStore"

const checkoutStore = useCheckoutStore()
onMounted(() => checkoutStore.loadOrders())

const tabs = [
  "Semua",
  "Belum Dibayar",
  "Sedang Diproses",
  "Dikirim",
  "Selesai",
  "Dibatalkan",
]
const selectedTab = ref("Semua")

const filteredOrders = computed(() => {
  if (selectedTab.value === "Semua") return checkoutStore.orderHistory || []
  return (checkoutStore.orderHistory || []).filter(
    (order) => order.status === selectedTab.value
  )
})
</script>
