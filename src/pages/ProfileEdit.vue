<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
    <h2 class="text-xl font-bold mb-4">Edit Profil</h2>
    <form @submit.prevent="saveProfile" class="space-y-4">
      <div>
        <label class="block text-sm font-medium">Nama</label>
        <input v-model="user.name" type="text" class="w-full border rounded p-2" />
      </div>
      <div>
        <label class="block text-sm font-medium">Bio</label>
        <input v-model="user.bio" type="text" class="w-full border rounded p-2" />
      </div>
      <div>
        <label class="block text-sm font-medium">Jenis Kelamin</label>
        <select v-model="user.gender" class="w-full border rounded p-2">
          <option>Perempuan</option>
          <option>Laki-laki</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium">Tanggal Lahir</label>
        <input v-model="user.birthdate" type="date" class="w-full border rounded p-2" />
      </div>
      <div>
        <label class="block text-sm font-medium">No Handphone</label>
        <input v-model="user.phone" type="text" class="w-full border rounded p-2" />
      </div>
      <div>
        <label class="block text-sm font-medium">Email</label>
        <input v-model="user.email" type="email" class="w-full border rounded p-2" />
      </div>

      <button type="submit" class="w-full bg-orange-500 text-white py-2 rounded">
        Simpan
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const user = reactive({
  name: "Intan Rafida",
  email: "intan@email.com",
  phone: "08123456789",
  gender: "Perempuan",
  birthdate: "2008-04-14",
  bio: "Aku suka fashion ✨"
})

const saveProfile = () => {
  alert("Profil berhasil diperbarui!")
  router.push("/profile")
}
</script>
