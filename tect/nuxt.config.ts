// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
      ],
    },
  },

  ssr: false,

  devtools: {
    enabled: false,

    timeline: {
      enabled: true,
    },
  },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@formkit/auto-animate/nuxt',
    '@sidebase/nuxt-auth',
  ],

  auth: {
    baseURL: process.env.API_BASE_URL,
    isEnabled: true,
    provider: {
      type: 'local',

      endpoints: {
        signIn: { path: '/user/login', method: 'post' },
        signOut: { path: '/user/logout', method: 'post' },
        signUp: { path: '/user/register', method: 'post' },
        getSession: { path: '/user/profile', method: 'get' },
      },
      token: {
        signInResponseTokenPointer: '/token',
        maxAgeInSeconds: 60 * 60 * 24 * 30, // 30 days
      },
      pages: {
        login: '/',
      },
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  plugins: ['./plugins/api.ts', './plugins/locomotive-scroll.client.ts'],

  css: [
    '~/assets/css/main.css',
    '~/assets/css/responsive.css',
    'animate.css/animate.min.css',
    'locomotive-scroll/dist/locomotive-scroll.css',
  ],

  runtimeConfig: {
    apiSecret: '',
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    public: {
      apiBase: process.env.API_BASE_URL,
      stripePublicKey: process.env.STRIPE_PUBLISHABLE_KEY,
    },
  },

  compatibilityDate: '2025-03-31',
})