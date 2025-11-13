<template>
  <div class="pt-24 px-6 max-w-4xl mx-auto">
    <div v-if="resep" class="bg-white p-6 rounded-xl shadow-md">
      <img :src="resep.image" :alt="resep.nama" class="w-full h-72 object-cover rounded-lg mb-6" />
      <h1 class="text-3xl font-bold text-primary mb-4">{{ resep.nama }}</h1>
      <p class="text-gray-700 mb-4">{{ resep.deskripsi }}</p>

      <h2 class="text-xl font-semibold mb-2">Bahan-bahan:</h2>
      <ul class="list-disc ml-6 mb-4">
        <li v-for="b in resep.bahan" :key="b">{{ b }}</li>
      </ul>

      <h2 class="text-xl font-semibold mb-2">Langkah-langkah:</h2>
      <ol class="list-decimal ml-6 space-y-1">
        <li v-for="(l, index) in resep.langkah" :key="index">{{ l }}</li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import { useResepStore } from "../stores/useResepStore"
const store = useResepStore()
const route = useRoute()
const resep = store.reseps.find(r => r.id === Number(route.params.id))
</script>
