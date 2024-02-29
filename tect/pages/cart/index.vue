<template>
  <div class="cart">
    <div v-if="cart.length > 0">
      <div v-for="(item, index) in cart" :key="index" class="mb-4 ml-2">
        <p>Title: {{ item.title }}</p>
        <p>Price: {{ item.price }}</p>
        <v-text-field
          v-model="item.quantity"
          type="number"
          min="1"
          @change="addQuantity(item)"
        ></v-text-field>
        <v-btn size="small" rounded="xl" @click="removeItem(item.id)"
          >Remove</v-btn
        >
      </div>
    </div>
    <div v-else class="animate__animated animate__bounceIn">
      <p>Cart is empty</p>
    </div>
    <div class="animate__animated animate__bounceIn">
      Total Price: {{ totalPrice }}
    </div>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const cart = nuxtApp.$store.items;
const totalPrice = ref(0);

onMounted(() => {
  setTotalPrice();
});

const addQuantity = (item) => {
  nuxtApp.$store.updateItem(item);
};
const setTotalPrice = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  totalPrice.value = total;
};
const removeItem = (id) => {
  cart.forEach((item, index) => {
    if (item.id === id) {
      cart.splice(index, 1);
    }
  });
  nuxtApp.$store.removeItem(id);
};

// change total price when quantity changes
watch(cart, setTotalPrice, { immediate: true });
</script>

<style lang="scss" scoped>
.cart {
  margin-top: 100px;
}
</style>
