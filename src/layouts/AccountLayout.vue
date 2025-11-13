<template>
  <div class="bg-gray-50 min-h-screen flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md">
      <div class="p-6 border-b">
        <div class="flex items-center gap-3">
          <!-- Foto Profil Dinamis -->
          <div
            class="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 text-gray-500 text-xl font-semibold"
          >
            <img
              v-if="profil.foto"
              :src="profil.foto"
              alt="Avatar"
              class="w-full h-full object-cover"
            />
            <span v-else>{{ userInitial }}</span>
          </div>
          <div>
            <p class="font-semibold text-gray-800">{{ profil.nama || "User" }}</p>
            <RouterLink
              to="/account/profile"
              class="text-blue-500 text-sm hover:underline"
            >
              Ubah Profil
            </RouterLink>
          </div>
        </div>
      </div>

      <nav class="p-4 space-y-3 text-gray-700 text-sm">
        <!-- Grup Akun Saya -->
        <div>
          <button
            @click="toggleAkunSaya"
            class="w-full flex justify-between items-center font-semibold text-gray-500 uppercase text-xs focus:outline-none"
          >
            <span>Akun Saya</span>
            <svg
              :class="{ 'rotate-180': akunSayaOpen }"
              class="w-4 h-4 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Submenu Akun Saya -->
          <transition name="fade">
            <ul v-if="akunSayaOpen" class="pl-4 mt-2 space-y-2">
              <li>
                <RouterLink
                  to="/account/profile"
                  class="block hover:text-blue-600"
                  active-class="text-orange-500 font-semibold"
                >
                  Profil
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/account/address"
                  class="block hover:text-blue-600"
                  active-class="text-orange-500 font-semibold"
                >
                  Alamat
                </RouterLink>
              </li>
            </ul>
          </transition>
        </div>

        <!-- Pesanan Saya -->
        <p class="font-semibold text-gray-500 uppercase text-xs pt-4">Transaksi</p>
        <ul class="space-y-2">
          <li>
            <RouterLink
              to="/account/orders"
              class="block hover:text-blue-600"
              active-class="text-orange-500 font-semibold"
            >
              Pesanan Saya
            </RouterLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 bg-white m-6 rounded-lg shadow-sm">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

const profil = ref({
  username: "",
  nama: "",
  email: "",
  telepon: "",
  kelamin: "",
  tanggalLahir: "",
  foto: "",
})

onMounted(() => {
  const saved = localStorage.getItem("userProfile")
  if (saved) profil.value = JSON.parse(saved)
})

const userInitial = computed(() => (profil.value.nama ? profil.value.nama.charAt(0).toUpperCase() : "U"))

const akunSayaOpen = ref(false)
const toggleAkunSaya = () => {
  akunSayaOpen.value = !akunSayaOpen.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
