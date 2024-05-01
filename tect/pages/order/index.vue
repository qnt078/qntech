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
            <TableCustom :items="item" />
          </v-col>
        </v-row>
        <div >
          <loading
            v-model:active="isLoading"
            :can-cancel="true"
            color="#FFB30E"
            :is-full-page="fullPage"
          />
        </div>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const nuxtApp = useNuxtApp();
// const { getSession } = useAuth();
const api = nuxtApp.$api;
// const user = getSession();
const item = ref([]);
const isLoading = ref(false);
const fullPage = ref(true);

onBeforeMount(async () => {
  
  isLoading.value = true;
  try {
    item.value = await api.get("/order");
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
});




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
