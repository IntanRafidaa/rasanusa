<template>
  <div class="p-4">
    <h1 class="text-lg font-bold mb-4">Pilih Alamat</h1>

    <!-- Jika belum ada alamat -->
    <div v-if="addressStore.addresses.length === 0" class="text-gray-500">
      Belum ada alamat
    </div>

    <!-- Daftar Alamat -->
    <div
      v-for="(addr, index) in addressStore.addresses"
      :key="index"
      class="border p-4 rounded-lg mb-3 shadow-sm hover:shadow-md transition flex justify-between items-start"
    >
      <div>
        <!-- Nama dan Telepon -->
        <p class="font-semibold text-gray-800">
          {{ addr.nama }}
          <span class="text-sm text-gray-500 ml-1">({{ addr.telepon }})</span>
        </p>

        <!-- Tipe dan Utama -->
        <div class="flex gap-2 mt-1">
          <span
            v-if="addr.tipe"
            class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600 font-medium"
          >
            {{ addr.tipe === 'rumah' ? '🏠 Rumah' : '🏢 Kantor' }}
          </span>
          <span
            v-if="addr.utama"
            class="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600 font-medium"
          >
            Alamat Utama
          </span>
        </div>

        <!-- Detail Alamat -->
        <p class="text-sm text-gray-600 mt-2 leading-snug">
          {{ addr.jalan }}<br />
          {{ addr.detail ? addr.detail + ',' : '' }} {{ addr.fullAlamat }}
        </p>
      </div>

      <!-- Tombol Pilih -->
      <div class="flex flex-col items-end">
        <button
          @click="pilihAlamat(index)"
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded mb-2 text-sm"
        >
          Pilih
        </button>
        <button
          @click="hapusAlamat(index)"
          class="text-red-500 hover:underline text-xs"
        >
          Hapus
        </button>
      </div>
    </div>

    <!-- Tombol Tambah -->
    <router-link
      to="/alamat-baru"
      class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded inline-block mt-3"
    >
      + Tambah Alamat Baru
    </router-link>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { useAddressStore } from "../stores/addressStore"

const router = useRouter()
const addressStore = useAddressStore()

function pilihAlamat(index) {
  const selected = addressStore.addresses[index]
  addressStore.selectAddress(selected)
  router.push("/checkout")
}

function hapusAlamat(index) {
  if (confirm("Yakin ingin menghapus alamat ini?")) {
    addressStore.removeAddress(index)
  }
}
</script>
