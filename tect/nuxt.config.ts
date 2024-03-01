// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  app: {

  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    // import '@pinia/nuxt'
    "@pinia/nuxt",
    "@formkit/auto-animate/nuxt",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  plugins: ["./plugins/api.ts"],
  css: ["~/assets/css/main.css", "~/assets/css/responsive.css","animate.css/animate.min.css"],
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: process.env.API_BASE_URL,
    },
  },
  
});
