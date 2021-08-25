
<script lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TableLineChart from '../../charts/TableLineChart.vue'

export default {
  name: 'Orders',
  components: {
    TableLineChart,
  },
  setup() {
    const uncheck = ref(true)
    const selectedItems = ref([])
    const { t } = useI18n()
    const columns = [
      { prop: 'device_no', label: 'business.device_no' },
      { prop: 'work_address', label: 'business.work_address' },
      { prop: 'dust_value', label: 'business.dust_value' },
      { prop: 'dust_status', label: 'business.dust_status' },
      { prop: 'dust_trend', label: 'business.dust_trend' },
    ]

    const items = Array.from({ length: 48 }).map((_, i) => {
      const value = Math.round(Math.random() * 100) + 50
      return {
        device_no: i + 1,
        work_address: `Left ${101 + i}`,
        dust_value: value,
        dust_status: value < 120 ? 'safe' : value < 140 ? 'warning' : 'danger',
        dust_trend: Array.from({ length: 10 }).map(() => {
          return value + Math.round(Math.random() * 10) * (Math.random() < 0.5 ? -1 : 1)
        }),
      }
    })

    const updateSelectedItems = (selected) => {
      selectedItems.value = selected
    }

    const chartConf = (trend, status) => {
      return {
        labels: [
          '12-01-2020', '01-01-2021', '02-01-2021',
          '03-01-2021', '04-01-2021',
        ],
        layout: {
          padding: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        },
        datasets: [
          // Indigo line
          {
            data: trend,
            fill: true,
            borderWidth: 2,
            borderColor: status === 'safe' ? '#a5b4fc' : status === 'warning' ? '#eab308' : '#ef4444',
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            clip: 20,
          }],
      }
    }

    const statusConf = (status: string) => {
      switch (status) {
        case 'safe':
          return {
            text: '正常',
            class: 'bg-indigo-50 text-indigo-400',
          }
        case 'warning':
          return {
            text: '异常',
            class: 'bg-yellow-100 text-yellow-600',
          }
        case 'danger':
          return {
            text: '危险',
            class: 'bg-red-100 text-red-600',
          }
        default:
          return {
            text: '',
            class: 'bg-gray-100 text-gray-500',
          }
      }
    }

    const dangerList = computed(() => {
      return items.filter(item => item.dust_value >= 140)
    })

    return {
      t,
      uncheck,
      selectedItems,
      updateSelectedItems,
      columns,
      items,
      statusConf,
      chartConf,
      dangerList,
    }
  },
}
</script>
<template>
  <div class="relative">
    <header class="pb-4 -mt-2">
      <h2 class="font-semibold text-gray-800 flex items-center">
        <clarity-video-camera-line class="mr-1 font-bold" />
        {{ t('table.all') }} {{ t('business.temperature_device') }}
        <span class="text-gray-400 font-medium ml-2">{{ items.length }}</span>
      </h2>
    </header>
    <div class="md:flex">
      <Table
        :title="t('business.dust_monitor')"
        :columns="columns"
        :items="items.slice(0, items.length / 2)"
        class="md:w-1/2 md:mr-2"
      >
        <template #table-col-dust_status="{ item }">
          <div
            class="inline-flex font-medium rounded-full text-center px-2.5 py-0.5"
            :class="statusConf(item.dust_status).class">
            {{ statusConf(item.dust_status).text }}
          </div>
        </template>

        <template #table-col-dust_trend="{ item }">
          <TableLineChart :data="chartConf(item.dust_trend, item.dust_status)" width="100" height="15" />
        </template>
      </Table>
      <Table
        :title="t('business.dust_monitor')"
        :columns="columns"
        :items="items.slice(items.length / 2)"
        class="text-xs md:w-1/2"
      >
        <template #table-col-dust_status="{ item }">
          <div
            class="inline-flex font-medium rounded-full text-center px-2.5 py-0.5"
            :class="statusConf(item.dust_status).class">
            {{ statusConf(item.dust_status).text }}
          </div>
        </template>

        <template #table-col-dust_trend="{ item }">
          <TableLineChart :data="chartConf(item.dust_trend, item.dust_status)" width="100" height="15" />
        </template>
      </Table>
    </div>
    <div
      v-if="dangerList.length > 0 && uncheck"
      class="absolute inset-0 z-40"
    >
      <div
        class="absolute inset-0 -mx-8 -mt-26 -mb-20 bg-gray-900 bg-opacity-30"
        aria-hidden="true"
      ></div>
      <div class="fixed shadow-lg rounded-xl flex-none w-120 -ml-60 top-1/3 left-1/2">
        <carbon-close @click="uncheck = false" class="absolute text-2xl right-4 top-4 cursor" />
        <blockquote class="rounded-t bg-white px-6 pt-8 pb-4 md:p-10 md:pb-8 text-4xl leading-8 md:leading-8 font-semibold text-gray-900">
          <span class="text-2xl mr-2">最大值:</span>
          <span id="signal" class="font-bold text-red-500">
            {{ Math.max.apply(null, dangerList.map(d => d.dust_value)) }}
          </span>
          <span class="ml-2 text-2xl font-bold">mA</span>
          <p class="text-lg pt-2 text-gray-400">临界值: 140mA</p>
        </blockquote>
        <figcaption class="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b leading-6 font-semibold text-white from-orange-500 to-red-500">
          <h3>危险作业地点: {{ dangerList.map(d => `${d.work_address}(${d.dust_value}mA)`).join(',')}} </h3>
        </figcaption>
      </div>
    </div>
  </div>
</template>
