<template>
  <div class="success-page">
    <h1>Payment Successful!</h1>
    <p>Thank you for your purchase.</p>
  </div>
</template>

<script lang="ts" setup>
interface API {
  post: (url: string, data: any) => Promise<any>
  get: (url: string) => Promise<any>
  put: (url: string, data: any) => Promise<any>
  delete: (url: string) => Promise<any>
}

const nuxtApp = useNuxtApp()
const api: API = nuxtApp.$api
const orderID = ref(useRoute().params.id)

onMounted(async () => {
  const data = await api.put(`/order/${orderID.value}/pay`, {
    isPaid: true,
  })
  console.log(data)
})
</script>

<style scoped>
.success-page {
  text-align: center;
  padding: 50px;
}
h1 {
  color: green;
}
</style>
