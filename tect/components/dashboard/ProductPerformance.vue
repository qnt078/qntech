<script setup lang="ts">
import type { productPerformanceType } from '~/types/dashboard/index'

const api = useNuxtApp().$api

const productPerformance = ref<productPerformanceType[]>([])

onMounted(() => {
  getPerformance()
})

const getPerformance = async () => {
  try {
    const response = await api.get('/order/summary')
    productPerformance.value = response.data.orders
    console.log(productPerformance.value)
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <v-card elevation="10" class="">
    <v-card-item class="pa-6">
      <v-card-title class="text-h5 pt-sm-2 pb-7">
        Customer Performance
      </v-card-title>
      <v-table class="month-table" density="compact">
        <thead>
          <tr>
            <th class="text-subtitle-1 font-weight-bold">Id</th>
            <th class="text-subtitle-1 font-weight-bold">Assigned</th>
            <th class="text-subtitle-1 font-weight-bold">Name</th>
            <th class="text-subtitle-1 font-weight-bold">Total Orders</th>
            <th class="text-subtitle-1 font-weight-bold text-right">
              Total Sales
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in productPerformance"
            :key="index"
            class="month-item"
          >
            <td>
              <p class="text-15 font-weight-medium">{{ index }}</p>
            </td>
            <td>
              <div class="">
                <h6 class="text-subtitle-1 font-weight-bold">
                  {{ item.user.name }}
                </h6>
                <div class="text-13 mt-1 text-muted">{{ item.user.email }}</div>
              </div>
            </td>
            <td>
              <h6 class="text-subtitle-1 font-weight-bold">
                {{ item.user.name }}
              </h6>
            </td>
            <td>
              <v-chip
                :class="'text-body-1 bg-' + 'primary'"
                color="white"
                size="small"
                >{{ item.totalOrders }}</v-chip
              >
            </td>
            <td>
              <h6 class="text-15 text-muted text-right">
                ${{ item.totalSales }}
              </h6>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-item>
  </v-card>
</template>
