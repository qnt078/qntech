export default defineNuxtPlugin((nuxtApp : any) => {
  nuxtApp.provide("vietnamdong", {
    format(value: number) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
  });
});
