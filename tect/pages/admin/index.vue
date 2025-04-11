<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <!-- Sales overview -->
        <v-col cols="12" lg="8">
          <dashboardSalesOverview />
        </v-col>

        <!-- Recent transaction -->
        <v-col cols="12" lg="4">
          <dashboardRecentTransaction />
        </v-col>
        <!-- Product performence -->
        <v-col cols="12" lg="12">
          <dashboardProductPerformance />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})
</script>

<style scoped></style>
