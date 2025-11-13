import { defineStore } from "pinia"
import { ref } from "vue"

export const useAddressStore = defineStore("address", () => {
  const addresses = ref([])
  const selectedAddress = ref(null)

  function addAddress(newAddress) {
    const addr = {
      nama: newAddress.nama || "-",
      telepon: newAddress.telepon || "-",
      jalan: newAddress.jalan || "",
      detail: newAddress.detail || "",
      kecamatan: newAddress.kecamatan || "",
      kota: newAddress.kota || "",
      provinsi: newAddress.provinsi || "",
      kodepos: newAddress.kodepos || "",
      fullAlamat: newAddress.fullAlamat || "",
      tipe: newAddress.tipe || "rumah",
      utama: newAddress.utama || false,
    }

    addresses.value.push(addr)

    // Jika alamat utama, set sebagai selected
    if (addr.utama || addresses.value.length === 1) {
      selectedAddress.value = addr
    }
  }

  function updateAddress(index, updatedAddress) {
    addresses.value[index] = { ...addresses.value[index], ...updatedAddress }
  }

  function selectAddress(address) {
    selectedAddress.value = address
  }

  function removeAddress(index) {
    if (index < 0 || index >= addresses.value.length) return
    addresses.value.splice(index, 1)

    // Jika alamat yang dihapus adalah selected, reset selected
    if (selectedAddress.value === addresses.value[index]) {
      selectedAddress.value = addresses.value[0] || null
    }
  }

  return {
    addresses,
    selectedAddress,
    addAddress,
    updateAddress,
    selectAddress,
    removeAddress
  }
})
