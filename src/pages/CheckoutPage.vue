<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Alamat -->
    <div class="bg-white p-4 flex justify-between items-center border-b cursor-pointer" @click="ubahAlamat">
      <div>
        <p class="font-semibold text-gray-800">Alamat Pengiriman</p>
        <template v-if="addressStore.selectedAddress">
          <p class="text-sm text-gray-600">{{ addressStore.selectedAddress.nama }} | {{ addressStore.selectedAddress.telepon }}</p>
          <p class="text-sm text-gray-600">{{ addressStore.selectedAddress.jalan }}</p>
          <p class="text-sm text-gray-600">{{ addressStore.selectedAddress.detail ? addressStore.selectedAddress.detail + ', ' : '' }}{{ addressStore.selectedAddress.alamat }}</p>
          <p class="text-xs text-gray-500 italic">{{ addressStore.selectedAddress.tipe }} <span v-if="addressStore.selectedAddress.utama">(Utama)</span></p>
        </template>
        <template v-else>
          <p class="text-sm text-gray-500 italic">Belum ada alamat, silakan tambahkan.</p>
        </template>
      </div>
      <span class="text-blue-500 text-sm">Ubah</span>
    </div>

    <!-- Produk -->
    <div class="flex-1 p-4 space-y-4">
      <div v-for="(item, i) in checkoutItems" :key="i" class="flex gap-4 items-center bg-white p-3 rounded-lg shadow-sm border">
        <img :src="item.image" class="w-20 h-20 object-cover rounded" />
        <div class="flex-1">
          <h3 class="font-semibold text-gray-800">{{ item.name }}</h3>
          <p class="text-gray-600 text-sm">Ukuran: {{ item.ukuran || item.size || '-' }}</p>
          <p class="text-gray-600 text-sm">Warna: {{ item.warna || item.color || '-' }}</p>
          <p class="text-blue-600 font-bold mt-1">Rp{{ (item.price * (item.qty || 1)).toLocaleString() }}</p>
          <p class="text-gray-500 text-sm">Jumlah: {{ item.qty || 1 }}</p>
        </div>
      </div>

      <!-- Metode Pengiriman -->
      <div class="bg-white p-4 rounded-lg shadow-sm border space-y-2">
        <h2 class="font-semibold text-gray-800 mb-2">Metode Pengiriman</h2>
        <div class="space-y-2">
          <label class="flex items-center gap-3 cursor-pointer" v-for="(kurir, index) in kurirOptions" :key="index">
            <input type="radio" :value="kurir" v-model="selectedKurir" class="form-radio h-4 w-4 text-red-600" />
            <span class="text-gray-700">{{ kurir.nama }} - Rp{{ kurir.biaya.toLocaleString() }}</span>
          </label>
        </div>
      </div>

      <!-- Rincian Pembayaran -->
      <div class="bg-white p-4 rounded-lg shadow-sm border space-y-2">
        <h2 class="font-semibold text-gray-800 mb-2">Rincian Pembayaran</h2>
        <div class="flex justify-between text-sm text-gray-600">
          <span>Subtotal Pesanan</span>
          <span>Rp{{ subtotal.toLocaleString() }}</span>
        </div>
        <div class="flex justify-between text-sm text-gray-600" v-if="totalProteksi > 0">
          <span>Total Proteksi Produk</span>
          <span>Rp{{ totalProteksi.toLocaleString() }}</span>
        </div>
        <div class="flex justify-between text-sm text-gray-600">
          <span>Biaya Layanan</span>
          <span>Rp{{ biayaLayanan.toLocaleString() }}</span>
        </div>
        <div class="flex justify-between text-sm text-gray-600">
          <span>Ongkos Kirim</span>
          <span>Rp{{ ongkir.toLocaleString() }}</span>
        </div>
        <div class="flex justify-between font-bold text-lg text-gray-800 border-t pt-2">
          <span>Total Pembayaran</span>
          <span class="text-red-600">Rp{{ totalPembayaran.toLocaleString() }}</span>
        </div>
      </div>

      <!-- Metode Pembayaran -->
      <div class="bg-white p-4 rounded-lg shadow-sm border space-y-2">
        <h2 class="font-semibold text-gray-800 mb-2">Metode Pembayaran</h2>
        <div class="space-y-2">
          <label class="flex items-center gap-3 cursor-pointer" v-for="(pay, index) in paymentOptions" :key="index">
            <input type="radio" :value="pay" v-model="selectedPayment" class="form-radio h-4 w-4 text-red-600" />
            <span class="text-gray-700">{{ pay }}</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="sticky bottom-0 bg-white border-t p-4 flex justify-between items-center">
      <p class="text-lg font-bold text-red-600">Rp{{ totalPembayaran.toLocaleString() }}</p>
      <button class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700" @click="buatPesanan">
        Buat Pesanan
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue"
import { useCartStore } from "../stores/useCartStore"
import { useCheckoutStore } from "../stores/useCheckoutStore"
import { useAddressStore } from "../stores/addressStore"
import { useRouter } from "vue-router"

const cartStore = useCartStore()
const checkoutStore = useCheckoutStore()
const addressStore = useAddressStore()
const router = useRouter()

const ubahAlamat = () => router.push({ name: "Alamat" })

onMounted(() => {
  if (cartStore.items.length > 0 && checkoutStore.items.length === 0) {
    checkoutStore.setItems(cartStore.items)
  }
})

const checkoutItems = computed(() => checkoutStore.items)
const subtotal = computed(() => checkoutItems.value.reduce((sum, item) => sum + item.price * (item.qty || 1), 0))
const totalProteksi = computed(() => checkoutItems.value.reduce((sum, item) => sum + (item.proteksi || 0), 0))
const biayaLayanan = 2000
const ongkir = ref(3500)
const kurirOptions = [
  { nama: "JNE", biaya: 3500 },
  { nama: "SiCepat", biaya: 4000 },
  { nama: "GrabExpress", biaya: 4500 },
]
const selectedKurir = ref(kurirOptions[0])
watch(selectedKurir, (n) => (ongkir.value = n.biaya))

const paymentOptions = ["Transfer Bank", "OVO", "GoPay", "COD"]
const selectedPayment = ref(paymentOptions[0])

const totalPembayaran = computed(() => subtotal.value + totalProteksi.value + biayaLayanan + ongkir.value)

const buatPesanan = () => {
  checkoutStore.setOrder({
    items: checkoutItems.value,
    address: addressStore.selectedAddress,
    kurir: selectedKurir.value,
    payment: selectedPayment.value,
    total: totalPembayaran.value,
  })
  checkoutStore.addOrderToHistory({
    items: checkoutItems.value,
    address: addressStore.selectedAddress,
    kurir: selectedKurir.value,
    payment: selectedPayment.value,
    total: totalPembayaran.value,
  })
  router.push({ name: "CheckoutSuccess" })
}
</script>
