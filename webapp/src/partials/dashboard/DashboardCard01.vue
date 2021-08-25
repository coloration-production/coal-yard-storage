<template>
  <div class="flex col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
    <div class="flex flex-col flex-1">
      <div class="px-5 pt-5">
        <h2 class="text-lg font-semibold text-gray-800 mb-2 h-9  border-b border-gray-100">{{title}}</h2>
        <div class="text-xs font-semibold text-gray-400 uppercase mb-1">最大值</div>
        <div class="flex items-start">
          <div class="text-3xl font-bold text-gray-800 mr-2">$24,780</div>
          <div class="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div>
        </div>
      </div>
      <!-- Chart built with Chart.js 3 -->
      <div class="flex-grow">
        <!-- Change the height attribute to adjust the chart height -->
        <LineChart :data="chartData" />
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="px-5 pt-5">
        <h2 class="text-lg font-semibold text-gray-800 mb-2 h-9 border-b border-gray-100"></h2>
        <div class="text-xs font-semibold text-gray-400 uppercase mb-1">平均值</div>
        <div class="flex items-start">
          <div class="text-3xl font-bold text-gray-800 mr-2">120mA</div>
          <div class="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div>
        </div>
      </div>
      <!-- Chart built with Chart.js 3 -->
      <div class="flex-grow">
        <!-- Change the height attribute to adjust the chart height -->
        <LineChart :data="chartData" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LineChart from '../../charts/LineChart01.vue'
import EditMenu from '../EditMenu.vue'

// Import utilities
import { hexToRGB } from '../../utils/Utils'

export default {
  name: 'DashboardCard01',
  components: {
    LineChart,
    EditMenu,
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    const chartData = ref({
      labels: [
        '12-01-2020', '01-01-2021', '02-01-2021',
        '03-01-2021', '04-01-2021', '05-01-2021',
        '06-01-2021', '07-01-2021', '08-01-2021',
        '09-01-2021', '10-01-2021', '11-01-2021',
        '12-01-2021', '01-01-2022', '02-01-2022',
        '03-01-2022', '04-01-2022', '05-01-2022',
        '06-01-2022', '07-01-2022', '08-01-2022',
        '09-01-2022', '10-01-2022', '11-01-2022',
        '12-01-2022', '01-01-2023',
      ],
      datasets: [
        // Indigo line
        {
          data: [
            732, 610, 610, 504, 504, 504, 349,
            349, 504, 342, 504, 610, 391, 192,
            154, 273, 191, 191, 126, 263, 349,
            252, 423, 622, 470, 532,
          ],
          fill: true,
          backgroundColor: `rgba(${hexToRGB('#3b82f6')}, 0.08)`,
          borderColor: '#6366f1',
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: '#6366f1',
          clip: 20,
        }],
    })

    return {
      chartData,
    } 
  }
}
</script>