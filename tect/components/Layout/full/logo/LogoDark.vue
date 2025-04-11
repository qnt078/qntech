<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const primary = ref('rgb(var(--v-theme-primary))')
const secondary = ref('rgb(var(--v-theme-secondary))')
</script>
<template>
  <div class="logo">
    <NuxtLink to="/">
      <v-img src="/favicon.ico" alt="Logo" :max-width="100" />
    </NuxtLink>
  </div>
</template>

<style scoped></style>
