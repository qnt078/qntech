import { useCartStore } from "~/store";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      store: useCartStore(),
    },
  };
});
