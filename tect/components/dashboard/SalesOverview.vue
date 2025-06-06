<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import type { salesOverview } from '@/types/dashboard/index'
const theme = useTheme()
const primary = theme.current.value.colors.primary
const secondary = theme.current.value.colors.secondary

const nuxtApp = useNuxtApp()
const api = nuxtApp.$api

const salesOverviewData = ref<salesOverview[]>([])
onMounted(() => {
  getSalesOverview()
})

const getSalesOverview = async () => {
  try {
    const response = await api.get('/order/total')
    salesOverviewData.value = response.data
    console.log()
  } catch (error) {
    console.error(error)
  }
}

const select = ref('March 2025')
const items = ref(['March 2025', 'April 2025', 'May 2025'])
const chartOptions = computed(() => {
  return {
    series: [
      {
        name: 'Total Sales:',
        data: salesOverviewData.value.map((item) => item.totalSales),
      },
      {
        name: 'Total Paid:',
        data: salesOverviewData.value.map((item) => item.totalPaid),
      },
    ],
    chartOptions: {
      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      plotOptions: {
        bar: { horizontal: false, columnWidth: '35%', borderRadius: [8] },
      },
      colors: [primary, secondary],
      chart: {
        type: 'bar',
        height: 370,
        offsetX: -15,
        toolbar: { show: true },
        foreColor: '#adb0bb',
        fontFamily: 'inherit',
        sparkline: { enabled: false },
      },
      dataLabels: { enabled: false },
      markers: { size: 0 },
      legend: { show: false },
      xaxis: {
        type: 'category',
        categories: salesOverviewData.value.map((item) => item._id),
        labels: {
          style: { cssClass: 'grey--text lighten-2--text fill-color' },
        },
      },
      yaxis: {
        show: true,
        min: 0,
        max: 5000,
        tickAmount: 5,
        labels: {
          style: {
            cssClass: 'grey--text lighten-2--text fill-color',
          },
        },
      },
      stroke: {
        show: true,
        width: 3,
        lineCap: 'butt',
        colors: ['transparent'],
      },
      tooltip: { theme: 'light' },

      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 3,
              },
            },
          },
        },
      ],
    },
  }
})
</script>
<template>
  <v-card elevation="10" class="withbg">
    <v-card-item>
      <div class="d-sm-flex align-center justify-space-between pt-sm-2">
        <div><v-card-title class="text-h5">Sales Overview</v-card-title></div>
        <div class="my-sm-0 my-2">
          <v-select
            v-model="select"
            :items="items"
            variant="outlined"
            density="compact"
            hide-details
          ></v-select>
        </div>
      </div>
      <div class="mt-6">
        <apexchart
          type="bar"
          height="370px"
          :options="chartOptions.chartOptions"
          :series="chartOptions.series"
        >
        </apexchart>
      </div>
    </v-card-item>
  </v-card>
</template>
