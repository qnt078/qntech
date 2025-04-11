<script setup lang="ts">
import { RouterView } from 'vue-router'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Admin` : 'Admin'
  },
})
</script>

<template>
  <v-locale-provider>
    <v-app>
      <LayoutFullMain />
      <v-main>
        <v-container fluid class="page-wrapper">
          <div class="maxWidth">
            <RouterView />
          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
