<template>
  <div
    class="bg-white rounded-xl shadow hover:scale-105 transition overflow-hidden"
  >
    <img :src="resep.image" :alt="resep.nama" class="h-48 w-full object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ resep.nama }}</h3>
      <p class="text-sm text-gray-600 mb-2">{{ resep.deskripsi }}</p>
      <RouterLink :to="`/resep/${resep.id}`" class="text-primary font-semibold hover:underline">
        Lihat Resep →
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({ resep: Object })
</script>
