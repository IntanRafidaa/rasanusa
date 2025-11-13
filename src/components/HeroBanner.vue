<template>
  <section class="max-w-7xl mx-auto px-6 py-6">
    <div
      class="grid grid-cols-3 gap-4 cursor-pointer"
      @click="$router.push('/shop')"
    >
      <!-- Banner utama -->
      <div class="col-span-2">
        <img
          :src="banner1"
          alt="Hero 1"
          class="rounded-lg shadow-lg w-full"
        />
      </div>

      <!-- Banner kecil -->
      <div class="flex flex-col gap-4">
        <img :src="banner2" alt="Hero 2" class="rounded-lg shadow" />
        <img :src="banner3" alt="Hero 3" class="rounded-lg shadow" />
      </div>
    </div>
  </section>
</template>

<script setup>
import banner1 from "../assets/1.jpg"
import banner2 from "../assets/2.jpg"
import banner3 from "../assets/3.jpg"
</script>
