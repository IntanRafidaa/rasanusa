<template>
  <div class="pt-24 text-center px-6">
    <div class="flex flex-col items-center">
      <img
        src="/src/assets/logo-rasanusa.png"
        alt="Logo RasaNusa"
        class="w-24 h-24 mb-4 drop-shadow-lg"
      />
      <h1 class="text-4xl font-extrabold text-orange-600 mb-2">Selamat Datang di RasaNusa 🍴</h1>
      <p class="text-gray-600 max-w-xl mx-auto mb-8">
        Temukan cita rasa Nusantara dari dapur ke layar — resep autentik, sederhana, dan lezat.
      </p>
    </div>
    <input
      v-model="search"
      type="text"
      placeholder="Cari resep favoritmu..."
      class="w-full p-3 border rounded-lg mb-6 focus:ring-2 focus:ring-pink-400"
    />

    <!-- Menu Terbaru -->
    <h2 class="text-2xl font-bold mb-4 text-primary">🍳 Menu Terbaru</h2>
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <ResepCard v-for="r in filteredTerbaru" :key="r.id" :resep="r" />
    </div>

    <!-- Menu Populer -->
    <h2 class="text-2xl font-bold mb-4 text-primary">🔥 Menu Populer</h2>
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <ResepCard v-for="r in filteredPopuler" :key="r.id" :resep="r" />
    </div>

    <div class="text-center">
      <RouterLink
        to="/semua-resep"
        class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
      >Menu Lainnya 🍛</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useResepStore } from "../stores/useResepStore"
import ResepCard from "../components/ResepCard.vue"

const store = useResepStore()
const search = ref("")

const filteredTerbaru = computed(() =>
  store.terbaru.filter(r => r.nama.toLowerCase().includes(search.value.toLowerCase()))
)
const filteredPopuler = computed(() =>
  store.populer.filter(r => r.nama.toLowerCase().includes(search.value.toLowerCase()))
)
</script>
