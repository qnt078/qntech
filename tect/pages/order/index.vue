<template>
  <div>
    <div class="order">
      <v-container>
        <v-row class="h-100vh d-flex justify-center align-center"> 
          <v-col cols="12" lg="10">
           <div class="title bg-gradient">
            <span class="ml-2">Your Order</span>
           </div>
          </v-col>
          <v-col cols="12" lg="10">
            <TableCustom  :items="item"/>
          </v-col>
        </v-row>
       
      </v-container>
    </div>
  </div>
</template>

<script setup >




const nuxtApp = useNuxtApp();
const { getSession } = useAuth();
const api = nuxtApp.$api;
const user = getSession();
const item = ref([]);
onBeforeMount(
  async () => {
    try {
      const res = await api.get('/order')
      item.value = res
     
    }
    catch (error) {
      console.log(error);
    }
  }
)

</script>

<style scoped>

.title {
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  
}

</style>
