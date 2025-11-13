<template>
  <div class="pt-24 px-6 max-w-3xl mx-auto text-center">
    <h1 class="text-3xl font-bold text-orange-600 mb-4">Tentang RasaNusa</h1>
    <p class="text-gray-700 leading-relaxed mb-10">
      <strong>RasaNusa</strong> adalah portal kuliner yang menghadirkan berbagai resep makanan,
      minuman, dan camilan khas Nusantara.  
      Kami ingin menjaga warisan rasa Indonesia dan membantu kamu memasak dengan cinta ❤️  
      <br /><br />
      Selamat mencoba dan selamat berkreasi di dapur!
    </p>

    <!-- Form Kritik & Saran -->
    <div class="bg-white shadow-md rounded-xl p-6 text-left">
      <h2 class="text-2xl font-semibold text-orange-500 mb-4 text-center">
        Kritik, Saran, atau Pesan
      </h2>

      <form @submit.prevent="kirimPesan">
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2">Nama</label>
          <input
            v-model="nama"
            type="text"
            placeholder="Masukkan nama kamu"
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2">Pesan</label>
          <textarea
            v-model="pesan"
            rows="4"
            placeholder="Tulis kritik, saran, atau pesanmu..."
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        <div class="flex justify-center gap-4">
          <!-- Tombol Kirim via WhatsApp -->
          <button
            type="button"
            @click="kirimWhatsApp"
            class="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Kirim via WhatsApp
          </button>

          <!-- Tombol Kirim via Email -->
          <button
            type="button"
            @click="kirimEmail"
            class="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Kirim via Email
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const nama = ref("")
const pesan = ref("")

// Ganti nomor WA & email di sini 👇
const nomorWA = "62882000076168" // tanpa +, ganti dengan nomormu
const emailTujuan = "intanrm08@gmail.com" // ganti dengan emailmu

const kirimWhatsApp = () => {
  const text = `Halo, saya ${nama.value}.\n\n${pesan.value}`
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`
  window.open(url, "_blank")
}

const kirimEmail = () => {
  const subject = encodeURIComponent(`Pesan dari ${nama.value || "Pengunjung RasaNusa"}`)
  const body = encodeURIComponent(pesan.value)
  const url = `mailto:${emailTujuan}?subject=${subject}&body=${body}`
  window.open(url, "_blank")
}
</script>
