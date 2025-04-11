import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.vueApp.directive('locomotive-scroll', {
    mounted(el: any, binding: any) {
      const ls = new LocomotiveScroll({
        el: el,
        smooth: true,
        // Add more options here based on your needs
        // ... other options
      })

      // Expose Locomotive Scroll instance to the element
      el.locomotiveScroll = ls

      // Optional: Refresh scroll on route changes
      nuxtApp.$router.afterEach(() => {
        ls.update()
      })
    },
    unmounted(el: any) {
      // Destroy Locomotive Scroll instance when the component is unmounted
      if (el.locomotiveScroll) {
        el.locomotiveScroll.destroy()
      }
    },
  })
})
