<template>
  <div class="font-sans bg-gray-50 min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1 relative">
      <router-view />

      <!-- Tombol WA Floating -->
      <a
        :href="waLink"
        target="_blank"
        class="fixed bottom-6 right-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
        title="Chat via WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WA"
          class="w-6 h-6"
        />
      </a>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"

// Nomor WA tujuan
const phoneNumber = "62882000076168" // ganti sesuai kebutuhan
const defaultMessage = encodeURIComponent("Halo, saya ingin bertanya mengenai pesanan saya")
const waLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`
</script>
