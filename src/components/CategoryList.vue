<template>
  <div class="bg-white py-6 px-6">
    <h2 class="text-xl font-bold mb-4">Kategori</h2>
    <div class="grid grid-cols-4 gap-6">
      <div v-for="(cat, i) in categories" :key="i" class="flex flex-col items-center">
        <img :src="cat.icon" class="w-16 h-16 mb-2 rounded-full border" />
        <p>{{ cat.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { name: "Wanita", icon: "https://via.placeholder.com/80" },
  { name: "Pria", icon: "https://via.placeholder.com/80" },
  { name: "Anak", icon: "https://via.placeholder.com/80" },
  { name: "Beauty", icon: "https://via.placeholder.com/80" },
]
</script>
