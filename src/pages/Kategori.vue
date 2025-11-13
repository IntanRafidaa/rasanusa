<template>
  <div class="pt-24 px-6 max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold text-primary mb-6 capitalize">Kategori: {{ jenis }}</h1>
    <div class="grid md:grid-cols-3 gap-6">
      <ResepCard v-for="r in resepKategori" :key="r.id" :resep="r" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useResepStore } from "../stores/useResepStore"
import ResepCard from "../components/ResepCard.vue"

const store = useResepStore()
const route = useRoute()
const jenis = route.params.jenis
const resepKategori = computed(() =>
  store.reseps.filter(r => r.kategori.toLowerCase() === jenis.toLowerCase())
)
</script>
