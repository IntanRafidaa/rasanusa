import { defineStore } from "pinia"
import { useAddressStore } from "./addressStore"

export const useCheckoutStore = defineStore("checkout", {
  state: () => ({
    items: [],
    order: null,
    orderHistory: [],
  }),
  actions: {
    // Set items checkout
    setItems(newItems) {
      // pastikan semua properti item tetap ada
      this.items = newItems.map(item => ({ ...item }))
    },

    clear() {
      this.items = []
      this.order = null
    },

    setOrder(orderData) {
      this.order = orderData
      this.addOrderToHistory(orderData)
      this.clear() // kosongkan cart/checkout items setelah order dibuat
    },

    addOrderToHistory(orderData) {
      const addressStore = useAddressStore()
      const selected = addressStore.selectedAddress

      // Buat alamat lengkap
      const fullAddress = selected
        ? `${selected.jalan}, ${selected.detail ? selected.detail + ', ' : ''}Kec. ${selected.kecamatan}, ${selected.kota}, ${selected.provinsi}, ${selected.kodepos || ''}`
        : "-"

      // Map semua item supaya menyimpan ukuran, warna, qty, price
      const items = orderData.items.map(item => ({
        name: item.name || "Produk Tanpa Nama",
        image: item.image || "/default-product.jpg",
        qty: item.qty || 1,
        price: item.price || 0,
        ukuran: item.ukuran || "-",
        warna: item.warna || "-",
      }))

      const newOrder = {
        items,
        status: "Belum Dibayar",
        date: new Date().toLocaleString(),
        kurir: orderData.kurir || {},
        payment: orderData.payment || "Transfer Bank",
        total: orderData.total || 0,
        address: {
          nama: selected?.nama || "-",
          telepon: selected?.telepon || "-",
          fullAddress,
          jalan: selected?.jalan || "-",
          detail: selected?.detail || "-",
          kecamatan: selected?.kecamatan || "-",
          kota: selected?.kota || "-",
          provinsi: selected?.provinsi || "-",
          kodepos: selected?.kodepos || "-",
          tipe: selected?.tipe || "-",
          utama: selected?.utama || false,
        },
      }

      this.orderHistory.push(newOrder)
      this.saveOrders()
    },

    updateOrderStatus(index, newStatus) {
      if (this.orderHistory[index]) {
        this.orderHistory[index].status = newStatus
        this.saveOrders()
      }
    },

    saveOrders() {
      localStorage.setItem("orderHistory", JSON.stringify(this.orderHistory))
    },

    loadOrders() {
      const data = localStorage.getItem("orderHistory")
      if (data) this.orderHistory = JSON.parse(data)
    },
  },
})
