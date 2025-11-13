<template>
  <div class="p-4">
    <h1 class="text-lg font-bold mb-4">Alamat Baru</h1>

    <form @submit.prevent="saveAddress">
      <!-- Nama Lengkap -->
      <input v-model="nama" placeholder="Nama Lengkap"
        class="border w-full p-2 mb-2 rounded" />

      <!-- Nomor Telepon -->
      <input v-model="telepon" placeholder="Nomor Telepon"
        class="border w-full p-2 mb-2 rounded" />

      <!-- Pilih Alamat (gabung provinsi-kota-kecamatan-kelurahan) -->
      <div class="border w-full p-2 mb-2 rounded bg-gray-50 cursor-pointer" @click="showModal = true">
        <span v-if="fullAlamat">
          {{ fullAlamat }}
        </span>
        <span v-else class="text-gray-400">Pilih Provinsi, Kota, Kecamatan, Kelurahan</span>
      </div>

      <!-- Modal Pilih Alamat -->
      <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white w-96 p-4 rounded shadow">
          <h2 class="text-lg font-bold mb-4">Pilih Alamat</h2>

          <!-- Provinsi -->
          <select v-model="provinsi" @change="fetchKota"
            class="border w-full p-2 mb-2 rounded">
            <option value="">Pilih Provinsi</option>
            <option v-for="p in provinsiList" :key="p.id" :value="p.id">{{ p.name }}</option>
          </select>

          <!-- Kota -->
          <select v-model="kota" @change="fetchKecamatan"
            class="border w-full p-2 mb-2 rounded" :disabled="!provinsi">
            <option value="">Pilih Kota/Kabupaten</option>
            <option v-for="k in kotaList" :key="k.id" :value="k.id">{{ k.name }}</option>
          </select>

          <!-- Kecamatan -->
          <select v-model="kecamatan" @change="fetchKelurahan"
            class="border w-full p-2 mb-2 rounded" :disabled="!kota">
            <option value="">Pilih Kecamatan</option>
            <option v-for="kec in kecamatanList" :key="kec.id" :value="kec.id">{{ kec.name }}</option>
          </select>

          <!-- Kelurahan -->
          <select v-model="kelurahan"
            class="border w-full p-2 mb-2 rounded" :disabled="!kecamatan">
            <option value="">Pilih Kelurahan</option>
            <option v-for="kel in kelurahanList" :key="kel.id" :value="kel.id">{{ kel.name }}</option>
          </select>

          <!-- Tombol -->
          <div class="flex justify-end space-x-2 mt-4">
            <button type="button" @click="showModal = false" class="px-3 py-1 border rounded">Batal</button>
            <button type="button" @click="confirmAlamat" class="px-3 py-1 bg-red-500 text-white rounded">Simpan</button>
          </div>
        </div>
      </div>

      <!-- Nama Jalan, Gedung, No. Rumah -->
      <input v-model="jalan" placeholder="Nama Jalan, Gedung, No. Rumah"
        class="border w-full p-2 mb-2 rounded" />

      <!-- Detail -->
      <input v-model="detail" placeholder="Blok/Unit No., Patokan"
        class="border w-full p-2 mb-2 rounded" />

      <!-- Tandai Utama -->
      <div class="flex items-center mb-2">
        <input type="checkbox" v-model="utama" />
        <label class="ml-2">Atur sebagai alamat utama</label>
      </div>

      <!-- Tipe Alamat -->
      <div class="flex items-center mb-4 space-x-4">
        <label><input type="radio" value="rumah" v-model="tipe" /> Rumah</label>
        <label><input type="radio" value="kantor" v-model="tipe" /> Kantor</label>
      </div>

      <!-- Tombol -->
      <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded">
        Simpan
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"
import { useRouter } from "vue-router"
import { useAddressStore } from "../stores/addressStore"

const router = useRouter()
const addressStore = useAddressStore()

// form fields
const nama = ref("")
const telepon = ref("")
const jalan = ref("")
const detail = ref("")
const utama = ref(false)
const tipe = ref("rumah")

// alamat dari API
const provinsi = ref("")
const kota = ref("")
const kecamatan = ref("")
const kelurahan = ref("")
const fullAlamat = ref("")

const provinsiList = ref([])
const kotaList = ref([])
const kecamatanList = ref([])
const kelurahanList = ref([])

const showModal = ref(false)

// ambil provinsi saat pertama kali
onMounted(async () => {
  const res = await axios.get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
  provinsiList.value = res.data
})

async function fetchKota() {
  if (!provinsi.value) return
  kota.value = ""; kecamatan.value = ""; kelurahan.value = ""
  kotaList.value = []; kecamatanList.value = []; kelurahanList.value = []

  const res = await axios.get(
    `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsi.value}.json`
  )
  kotaList.value = res.data
}

async function fetchKecamatan() {
  if (!kota.value) return
  kecamatan.value = ""; kelurahan.value = ""
  kecamatanList.value = []; kelurahanList.value = []

  const res = await axios.get(
    `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${kota.value}.json`
  )
  kecamatanList.value = res.data
}

async function fetchKelurahan() {
  if (!kecamatan.value) return
  kelurahan.value = ""
  kelurahanList.value = []

  const res = await axios.get(
    `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${kecamatan.value}.json`
  )
  kelurahanList.value = res.data
}

function confirmAlamat() {
  const p = provinsiList.value.find(p => p.id == provinsi.value)?.name || ""
  const k = kotaList.value.find(k => k.id == kota.value)?.name || ""
  const c = kecamatanList.value.find(c => c.id == kecamatan.value)?.name || ""
  const l = kelurahanList.value.find(l => l.id == kelurahan.value)?.name || ""
  fullAlamat.value = `${l}, ${c}, ${k}, ${p}`
  showModal.value = false
}

function saveAddress() {
  const newAddr = {
    nama: nama.value,
    telepon: telepon.value,
    alamat: fullAlamat.value,
    jalan: jalan.value,
    detail: detail.value,
    utama: utama.value,
    tipe: tipe.value
  }

  addressStore.addAddress(newAddr)
  if (utama.value) {
    addressStore.selectAddress(newAddr)
  }

  router.push("/alamat")
}
</script>
