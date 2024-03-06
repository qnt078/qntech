<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<script setup>
onMounted(() => {
  useHead({
    title: "foodWaNGon",
  });
});
</script>
<style>

</style>
