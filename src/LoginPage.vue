```vue
<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 font-sans">
    <div class="bg-white w-full max-w-4xl rounded-lg shadow-lg flex overflow-hidden">
      
      <!-- Left Side -->
      <div class="w-1/2 bg-gradient-to-b from-blue-400 to-blue-500 text-white p-10 flex flex-col justify-between">
        <div>
          <h2 class="text-3xl font-bold mb-4">Welcome to Shopora ✨</h2>
          <p class="text-sm leading-relaxed">
            Belanja mudah, cepat, dan menyenangkan bersama Shopora. Temukan produk favoritmu sekarang juga.
          </p>
        </div>
        <p class="text-xs mt-6">© 2025 Shopora</p>
      </div>

      <!-- Right Side -->
      <div class="w-1/2 p-10">
        <h2 class="text-2xl font-bold text-blue-600 mb-2">Login</h2>
        <p class="text-gray-500 text-sm mb-6">
          Welcome back! Login to dapatkan diskon & penawaran menarik hanya untukmu.
        </p>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm mb-1">User Name</label>
            <input 
              v-model="username" 
              type="text" 
              placeholder="Enter your username" 
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
          <div class="flex items-center justify-between">
            <label class="flex items-center space-x-2 text-sm">
              <input type="checkbox" v-model="rememberMe" class="w-4 h-4 text-blue-500">
              <span>Remember me</span>
            </label>
          </div>
          <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
            LOGIN
          </button>
        </form>

        <div class="flex justify-between text-sm mt-4">
          <p>New User? 
            <router-link to="/register" class="text-blue-500 font-semibold">Signup</router-link>
          </p>
          <a href="#" class="text-gray-400 hover:text-gray-600">Forgot your password?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const username = ref("")
const password = ref("")
const rememberMe = ref(false)

// Hardcode akun sementara
const akunSementara = {
  username: "intan",
  password: "1234",
}

const handleLogin = () => {
  if (username.value === akunSementara.username && password.value === akunSementara.password) {
    // Simpan sementara ke localStorage jika ingin simpan login
    localStorage.setItem(
      "userProfile",
      JSON.stringify({
        username: "intanrafidamulyani",
        nama: "Intan",
        email: "in*******@gmail.com",
        telepon: "08********06",
        kelamin: "Perempuan",
        tanggalLahir: "2008-04-14",
        foto: "",
      })
    )

    alert("Login berhasil!")
    router.push("/") // langsung ke Home
  } else {
    alert("Username atau password salah!")
  }
}
</script>
