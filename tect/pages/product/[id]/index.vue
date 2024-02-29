<template>
  <v-container>
    <div class="mt-12">
      <h1>Product</h1>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-else-if="product" class="product">
        <v-img
          width="300px"
          height="300px"
          object-fit="cover"
          :src="product.image"
          :alt="product.title"
        />
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
      </div>
      <div v-else class="loading">Loading...</div>
    </div>

    <div class="button">
      <v-btn color="primary" @click.prevent="upNumber()">Up</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
// add title to the page

useHead({
  title: "Product",
});

import { useRoute } from "vue-router";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const id = ref(useRoute().params.id as string);
const product = ref<Product | null>(null);
const error = ref<string | null>(null);
const nuxtApp = useNuxtApp();
const api = nuxtApp.$api;
const cart = nuxtApp.$store;

const fetchProduct = async () => {
  try {
    const data = await api.get(`/products/${id.value}`);
    product.value = data;
    error.value = null;
  } catch (err: any) {
    product.value = null;
    error.value = err.toString();
  }
};
const upNumber = () => {
  const items: any = {
    id: product.value?.id,
    title: product.value?.title,
    price: product.value?.price,
    quantity: 1,
  };
  cart.addItem(items);
};

watch(id, fetchProduct, { immediate: true });
</script>

<style scoped></style>
