```vue
<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 font-sans">
    <div class="bg-white w-full max-w-4xl rounded-lg shadow-lg flex overflow-hidden">
      
      <!-- Left Side -->
      <div class="w-1/2 bg-gradient-to-b from-blue-400 to-blue-500 text-white p-10 flex flex-col justify-between">
        <div>
        
          <h2 class="text-3xl font-bold mb-4">Join Shopora ✨</h2>
          <p class="text-sm leading-relaxed">
            Buat akun Shopora dan nikmati pengalaman belanja terbaik dengan berbagai promo spesial untukmu.
          </p>
        </div>
        <p class="text-xs mt-6">© 2025 Shopora</p>
      </div>

      <!-- Right Side -->
      <div class="w-1/2 p-10">
        <h2 class="text-2xl font-bold text-blue-600 mb-2">Register</h2>
        <p class="text-gray-500 text-sm mb-6">
          Daftar sekarang untuk mulai belanja dan nikmati promo eksklusif Shopora.
        </p>

        <form @submit.prevent="handleRegister" class="space-y-4">
          <div>
            <label class="block text-sm mb-1">Full Name</label>
            <input 
              v-model="fullname" 
              type="text" 
              placeholder="Enter your full name" 
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
          </div>
          <div>
            <label class="block text-sm mb-1">Email</label>
            <input 
              v-model="email" 
              type="email" 
              placeholder="Enter your email" 
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
          </div>
          <div>
            <label class="block text-sm mb-1">Password</label>
            <input 
              v-model="password" 
              type="password" 
              placeholder="Enter your password" 
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
          </div>
          <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
            REGISTER
          </button>
        </form>

        <div class="flex justify-between text-sm mt-4">
          <p>Already have an account? 
            <router-link to="/login" class="text-blue-500 font-semibold">Login</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const fullname = ref("")
const email = ref("")
const password = ref("")

const handleRegister = () => {
  console.log("Register attempt:", {
    fullname: fullname.value,
    email: email.value,
    password: password.value,
  })
  // Tambahkan API register disini
}
</script>