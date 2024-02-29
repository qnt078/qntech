<template>
  <div class=" mt-10">
    <div class="test ">
      <h1>Product</h1>
      <v-text-field v-model="text"></v-text-field>
      <v-btn color="primary" @click="nextPage()">Click</v-btn>
    </div>
    <component
        :is="received"
        :received="compo"
        @received-event="custom"
    ></component>
    <component
        :is="modal"
        :data="compo"
    >
      <template #tab1>
        <h1>Tab1</h1>
      </template>
      <template #tab2>
        <h1>Tab2</h1>
      </template>

    </component>
  </div>
</template>

<script lang="ts" setup>
import received from "~/components/received.vue";
import modal from "~/components/modal.vue";

const text = ref("");
const compo = ref("");
const nextPage = () => {
  compo.value = text.value;
  text.value = "";
};

const custom = (received: string) => {
  console.log(received);
};
</script>

<style lang="scss" scoped></style>
