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
     
      return state.rawItems.length;
    },
    totalPrice: (state) => {
      if (window) {
        let total = 0;
       if (state.rawItems.length > 0) {
        state.rawItems = JSON.parse(
          localStorage.getItem("cartItems" ) as string
        ).forEach((item: { price: number; quantity: number }) => {
          total += item.quantity * item.price;
        });
       }
        
        return total;

      }
    },
  },
  actions: {
    addItem(items: { _id: string; quantity: number }) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

      let foundItem = cartItems.find(
        (item: { _id: string; quantity: number }) => item._id === items._id
      );

      if (foundItem) {
        // Item exists, increment quantity
        foundItem.quantity += items.quantity;
      } else {
        // Item does not exist, add to cart
        cartItems.push(items);
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      this.rawItems = cartItems;
    },
    updateItem(name: { _id: string; quantity: number }) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

      let foundItem = cartItems.find(
        (item: { _id: string; quantity: number }) => item._id === name._id
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
    removeItem(_id: string) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      let foundItem = cartItems.find(
        (item: { _id: string; quantity: number }) => item._id === _id
      );

      if (foundItem) {
        // Item exists, delete item
        cartItems = cartItems.filter(
          (item: { _id: string; quantity: number }) => item._id !== _id
        );
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
