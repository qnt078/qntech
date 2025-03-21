export default defineNuxtPlugin((nuxtApp : any) => {
  nuxtApp.provide("vietnamdong", {
    format(value: number) {
      return new Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
  });
});
