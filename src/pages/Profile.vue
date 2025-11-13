<template>
  <div class="bg-white rounded-lg shadow p-8 max-w-3xl mx-auto mt-10">
    <h2 class="text-xl font-bold mb-6 text-gray-800">Profil Saya</h2>
    <p class="text-gray-600 mb-8">
      Kelola informasi profil Anda untuk mengontrol, melindungi, dan mengamankan akun.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Form Profil -->
      <div class="md:col-span-2 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Username</label>
          <input
            v-model="profil.username"
            type="text"
            class="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-orange-200"
            disabled
          />
          <p class="text-xs text-gray-500 mt-1">
            Username hanya dapat diubah satu (1) kali.
          </p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Nama</label>
          <input
            v-model="profil.nama"
            type="text"
            class="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-orange-200"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="profil.email"
            type="email"
            class="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-orange-200"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Nomor Telepon</label>
          <input
            v-model="profil.telepon"
            type="text"
            class="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-orange-200"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
          <div class="flex items-center gap-4 mt-1">
            <label class="flex items-center gap-1">
              <input type="radio" value="Laki-laki" v-model="profil.kelamin" />
              <span>Laki-laki</span>
            </label>
            <label class="flex items-center gap-1">
              <input type="radio" value="Perempuan" v-model="profil.kelamin" />
              <span>Perempuan</span>
            </label>
            <label class="flex items-center gap-1">
              <input type="radio" value="Lainnya" v-model="profil.kelamin" />
              <span>Lainnya</span>
            </label>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
          <input
            v-model="profil.tanggalLahir"
            type="date"
            class="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring focus:ring-orange-200"
          />
        </div>

        <button
          @click="simpanProfil"
          class="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition mt-4"
        >
          Simpan
        </button>
      </div>

      <!-- Foto Profil -->
      <div class="flex flex-col items-center">
        <div class="relative">
          <img
            :src="profil.foto || defaultFoto"
            alt="Foto Profil"
            class="w-32 h-32 rounded-full object-cover border border-gray-300"
          />
          <label
            for="upload"
            class="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100"
          >
            📷
          </label>
          <input
            id="upload"
            type="file"
            class="hidden"
            accept="image/*"
            @change="uploadFoto"
          />
        </div>
        <p class="text-sm text-gray-500 mt-2">Ukuran gambar maks. 2MB</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const defaultFoto = "https://cdn-icons-png.flaticon.com/512/847/847969.png"

const profil = ref({
  username: "intanrafidamulyani",
  nama: "Intan",
  email: "in*******@gmail.com",
  telepon: "08********06",
  kelamin: "Perempuan",
  tanggalLahir: "2008-04-14",
  foto: "",
})

onMounted(() => {
  const saved = localStorage.getItem("userProfile")
  if (saved) profil.value = JSON.parse(saved)
})

function simpanProfil() {
  localStorage.setItem("userProfile", JSON.stringify(profil.value))
  alert("Profil berhasil disimpan!")
}

function uploadFoto(e) {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => (profil.value.foto = reader.result)
  reader.readAsDataURL(file)
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
