<template>
  <div class="flex flex-col col-span-full xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
    <header class="px-5 py-4 border-b border-gray-100">
      <h2 class="font-semibold text-gray-800">在线设备</h2>
    </header>
    <!-- Chart built with Chart.js 3 -->
    <!-- Change the height attribute to adjust the chart height -->
    <DoughnutChart :data="chartData" height="180" />
  </div>
</template>

<script>
import { ref } from 'vue'
import DoughnutChart from '../../charts/DoughnutChart.vue'
import EditMenu from '../EditMenu.vue'


export default {
  name: 'DashboardCard06',
  components: {
    DoughnutChart,
    EditMenu,
  },
  setup() {
    const chartData = ref({
      labels: ['摄像头', '粉尘', '温度'],
      datasets: [
        {
          label: 'Top Countries',
          data: [
            16, 48, 35,
          ],
          backgroundColor: [
            '#6366f1',
            '#818cf8',
            '#3730a3',
          ],
          hoverBackgroundColor: [
            '#4f46e5',
            '#3b82f6',
            '#312e81',
          ],
          hoverBorderColor: '#fff'
        },
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>