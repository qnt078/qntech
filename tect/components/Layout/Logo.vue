<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const primary = ref("rgb(var(--v-theme-primary))");
const secondary = ref("rgb(var(--v-theme-secondary))");
</script>
<template>
  <div class="logo">
    <NuxtLink to="/" class="logo" style="cursor: pointer">
      <img
        class="inline-block"
        src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/logo.svg"
      />
      <span class="text-gradient">foodwaNGon</span>
    </NuxtLink>
  </div>
</template>
