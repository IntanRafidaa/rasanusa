<template>
  <div class="max-w-3xl mx-auto px-4 py-6">
    <h1 class="text-xl font-bold mb-4">Keranjang Saya</h1>

    <div v-if="cartStore.items.length === 0" class="text-gray-500">
      Keranjang masih kosong.
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="item in cartStore.items"
        :key="item.key"
        class="flex items-center border rounded-lg p-3 bg-white"
      >
        <input
          type="checkbox"
          :checked="selectedItems.includes(item.key)"
          @change="toggleSelect(item.key)"
          class="w-5 h-5 mr-3"
        />

        <img :src="item.image" alt="" class="w-20 h-20 object-cover rounded" />

        <div class="flex-1 ml-3">
          <h2 class="font-semibold text-sm">{{ item.name }}</h2>

          <!-- Varian tampil -->
          <p v-if="item.color || item.size" class="text-xs text-gray-500">
            Varian:
            <span v-if="item.color">Warna: {{ item.color }}</span>
            <span v-if="item.color && item.size">, </span>
            <span v-if="item.size">Ukuran: {{ item.size }}</span>
          </p>

          <p class="text-red-600 font-bold mt-1">
            Rp{{ parsePrice(item.price).toLocaleString("id-ID") }}
          </p>

          <p class="text-xs text-gray-500 mt-1">Jumlah: {{ item.qty || 1 }}</p>
        </div>

        <div class="flex items-center space-x-2">
          <button class="px-2 py-1 border rounded" @click="item.qty > 1 ? item.qty-- : null">-</button>
          <span>{{ item.qty || 1 }}</span>
          <button class="px-2 py-1 border rounded" @click="item.qty++">+</button>
        </div>

        <button class="ml-3 text-red-500 hover:underline text-sm" @click="cartStore.removeItemByKey(item.key)">
          Hapus
        </button>
      </div>

      <!-- Footer -->
      <div class="sticky bottom-0 bg-white border-t py-4 px-3 flex justify-between items-center">
        <div>
          <input
            type="checkbox"
            class="w-5 h-5 mr-2"
            @change="toggleSelectAll($event.target.checked)"
            :checked="selectedItems.length === cartStore.items.length && cartStore.items.length > 0"
          />
          <span>Pilih Semua</span>
        </div>

        <div class="flex items-center space-x-4">
          <p class="text-lg font-bold text-red-600">Rp{{ selectedTotalFormatted }}</p>
          <button
            @click="goToCheckout"
            :disabled="filteredItems.length === 0"
            :class="[
              'px-6 py-2 rounded-lg',
              filteredItems.length > 0 ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-300 text-white'
            ]"
          >
            Checkout ({{ filteredItems.length }})
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useCartStore } from "../stores/useCartStore"
import { useCheckoutStore } from "../stores/useCheckoutStore"
import { useRouter } from "vue-router"

const cartStore = useCartStore()
const checkoutStore = useCheckoutStore()
const router = useRouter()
const selectedItems = ref([])

// Toggle pilih produk
const toggleSelect = (key) => {
  if (selectedItems.value.includes(key)) {
    selectedItems.value = selectedItems.value.filter((k) => k !== key)
  } else {
    selectedItems.value.push(key)
  }
}

// Toggle pilih semua
const toggleSelectAll = (checked) => {
  selectedItems.value = checked ? cartStore.items.map((i) => i.key) : []
}

// Parse harga
const parsePrice = (p) => {
  if (!p) return 0
  if (typeof p === "number") return p
  return Number(String(p).replace(/[^\d]/g, "")) || 0
}

// Filter item yang diceklis
const filteredItems = computed(() =>
  cartStore.items
    .filter((item) => selectedItems.value.includes(item.key))
    .map((item) => ({
      ...item,
      qty: item.qty || 1,
      price: parsePrice(item.price),
      color: item.color,
      size: item.size
    }))
)

// Total
const selectedTotal = computed(() =>
  filteredItems.value.reduce((sum, item) => sum + item.price * item.qty, 0)
)

const selectedTotalFormatted = computed(() => selectedTotal.value.toLocaleString("id-ID"))

// Checkout
const goToCheckout = () => {
  if (filteredItems.value.length === 0) return

  checkoutStore.setItems(filteredItems.value)
  router.push({ name: "Checkout" })
}

// Hapus berdasarkan key unik
cartStore.removeItemByKey = (key) => {
  const index = cartStore.items.findIndex((i) => i.key === key)
  if (index !== -1) cartStore.items.splice(index, 1)
}
</script>
