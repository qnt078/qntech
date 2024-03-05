import { defineStore, acceptHMRUpdate } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    rawItems: [] as string[],
  }),
  getters: {
    items: (state) => {
      if (window) {
        state.rawItems = JSON.parse(localStorage.getItem("cartItems") || "");
      }
      return state.rawItems;
    },
    total: (state) => state.rawItems.length,
    totalQuantity: (state) => {
      if (window) {
        state.rawItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      }
      console.log("totalQuantity", state.rawItems.length);
      return state.rawItems.length;
    },
    totalPrice: (state) => {
      if (window) {
        let total = 0;
        state.rawItems = JSON.parse(
          localStorage.getItem("cartItems") as string
        ).forEach((item: { price: number; quantity: number }) => {
          total += item.quantity * item.price;
        });
        
        return total;

      }
    },
  },
  actions: {
    addItem(name: { id: string; quantity: number }) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

      let foundItem = cartItems.find(
        (item: { id: string; quantity: number }) => item.id === name.id
      );

      if (foundItem) {
        // Item exists, increment quantity
        foundItem.quantity += name.quantity;
      } else {
        // Item does not exist, add to cart
        cartItems.push(name);
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      this.rawItems = cartItems;
    },
    updateItem(name: { id: string; quantity: number }) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

      let foundItem = cartItems.find(
        (item: { id: string; quantity: number }) => item.id === name.id
      );

      if (foundItem) {
        // Item exists, increment quantity
        foundItem.quantity = name.quantity;
      } else {
        // Item does not exist, add to cart
        cartItems.push(name);
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      this.rawItems = cartItems;
    },
    removeItem(id: string) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      let foundItem = cartItems.find(
        (item: { id: string; quantity: number }) => item.id === id
      );

      if (foundItem) {
        // Item exists, increment quantity
        cartItems.splice(cartItems.indexOf(foundItem), 1);
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      this.rawItems = cartItems;

      console.log("remove success", this.rawItems);
    },
    clearItems() {
      localStorage.removeItem("cartItems");
      this.rawItems = [];
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
