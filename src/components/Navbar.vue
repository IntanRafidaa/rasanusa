<template>
  <nav class="bg-red-500 text-white shadow-md fixed top-0 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <img src="/src/assets/logo-rasanusa.png" alt="RasaNusa Logo" class="w-10 h-10 rounded-full" />
        <RouterLink to="/" class="text-2xl font-bold hover:text-red-200 transition">
          RasaNusa
        </RouterLink>
      </div>

      <ul class="flex gap-6 items-center">
        <li><RouterLink to="/">Home</RouterLink></li>

        <li class="relative group">
          <span class="cursor-pointer">Kategori ▼</span>
          <ul class="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg">
            <li><RouterLink to="/kategori/makanan" class="block px-4 py-2 hover:bg-gray-100">Makanan</RouterLink></li>
            <li><RouterLink to="/kategori/minuman" class="block px-4 py-2 hover:bg-gray-100">Minuman</RouterLink></li>
            <li><RouterLink to="/kategori/camilan" class="block px-4 py-2 hover:bg-gray-100">Camilan</RouterLink></li>
          </ul>
        </li>

        <li><RouterLink to="/tentang">Tentang</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>
