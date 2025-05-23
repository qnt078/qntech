// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { textChangeRangeIsUnchanged } from 'typescript'
import VueApexCharts from 'vue3-apexcharts'
import '@/assets/scss/style.scss'
const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#ffb30e',
    'primary-darken-1': '#3700B3',
    secondary: '#F17228',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'surface-variant': '#ffb30e',
  },
}
export default defineNuxtPlugin((app: any) => {
  const vuetify = createVuetify({
    defaults: {
      VBtn: {
        color: '#ffb30e',
      },
      VCard: {
        outlined: true,
      },
      VImg: {
        cover: true,
      },
    },
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
  })
  app.vueApp.use(vuetify)
  app.vueApp.use(PerfectScrollbar)
  app.vueApp.use(VueApexCharts)
})
