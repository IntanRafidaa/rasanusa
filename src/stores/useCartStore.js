import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: []
  }),
  getters: {
    total: (state) =>
      state.items.reduce(
        (acc, item) =>
          acc + (Number(String(item.price).replace(/[^\d]/g, "")) || 0) * (item.qty ?? 1),
        0
      ),
  },
  actions: {
    addToCart(product, color = "", size = "", qty = 1) {
      // buat key unik
      const itemKey = `${product.id}-${color}-${size}`

      // cek item dengan key sama
      const existing = this.items.find(i => i.key === itemKey)

      if (existing) {
        existing.qty += qty
      } else {
        this.items.push({
          ...product,
          color,
          size,
          qty,
          key: itemKey
        })
      }
    },

    removeItem(index) {
      this.items.splice(index, 1)
    },

    clearCart() {
      this.items = []
    }
  }
})
