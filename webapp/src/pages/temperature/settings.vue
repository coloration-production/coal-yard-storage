
<script lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Orders',
  components: {
  },
  setup() {
    const { t } = useI18n()
    const selectedItems = ref([])
    const descVisibleSigns = ref([])
    const maxValueEditable = ref(false)
    const maxValue = ref(150)

    const columns = [
      { prop: 'device_no', label: 'business.device_no' },
      { prop: 'ip', label: 'business.ip' },
      { prop: 'status', label: 'business.status' },
      { prop: 'device_count', label: 'business.device_count' },
      { prop: 'operation', label: '' },
    ]

    const subColumns = [
      { prop: 'device_no', label: 'business.device_no' },
      { prop: 'work_address', label: 'business.work_address' },
      { prop: 'dust_value', label: 'business.dust_value' },
      { prop: 'dust_status', label: 'business.dust_status' },
      { prop: 'dust_trend', label: 'business.dust_trend' },
    ]

    const items = [
      { id: 1, device_no: 1, ip: '192.168.0.7', device_count: 4, status: 1 },
      { id: 2, device_no: 2, ip: '192.168.0.8', device_count: 16, status: 1 },
      { id: 3, device_no: 3, ip: '192.168.0.9', device_count: 0, status: 0 },
      { id: 4, device_no: 4, ip: '192.168.0.10', device_count: 0, status: 1 },
    ]

    function calStatus(s: number) {
      switch (s) {
        case 1: return { name: 'business.normal', color: 'bg-green-100 text-green-600' }
        case 0: return { name: 'business.disconnected', color: 'bg-gray-100 text-gray-500' }
      }
    }

    function changeMaxValue () {
      maxValueEditable.value = false
    }

    watch(() => items, () => {
      if (items.length === descVisibleSigns.value.length) return

      const newSigns = items.map((_, i) => descVisibleSigns.value[i] || false)
      descVisibleSigns.value = newSigns
    })

    return {
      selectedItems,
      columns,
      subColumns,
      items,
      maxValueEditable,
      maxValue,
      changeMaxValue,
      t,
      calStatus,
      descVisibleSigns,
    }
  },
}
</script>
<template>
  <!-- Page header -->
  <div class="sm:flex sm:justify-between sm:items-center mb-8">
    <!-- Left: Title -->
    <div class="mb-4 sm:mb-0">
      <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">{{ t('menus.temperature') }}</h1>
    </div>

    <!-- Right: Actions  -->
    <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
      <!-- Delete button -->
      <div class="flex items-center">
        {{ t('max') }}(mA):
        <div v-if="maxValueEditable" class="flex items-center">
          <input v-model="maxValue" />
          <akar-icons-check class="ml-2" @click="changeMaxValue" />
        </div>
        <span v-else class="flex items-center">
          150
          <cil-pencil
            class="ml-2 text-sm hover:text-indigo-700 cursor-pointer"
            @click="maxValueEditable = true"
          />
        </span>
      </div>

      <!-- Add customer button -->
      <router-link to="/dust/detail/0">
        <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
          <svg class="w-4 h-4 fill-current opacity-50 flex-shrink-0" viewBox="0 0 16 16">
            <path
              d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
            />
          </svg>
          <span class="hidden xs:block ml-2">Add Order</span>
        </button>
      </router-link>
    </div>
  </div>

  <header class="px-5 py-4  bg-white">
    <h2 class="font-semibold text-gray-800">{{ t('table.all') }} {{ t('business.control_nodes') }} <span class="text-gray-400 font-medium">{{ items.length }}</span></h2>
  </header>
  <Table
    :title="t('business.dust_monitor')"
    :columns="columns"
    :items="items"
  >
    <template #table-row="{ item, i }">
      <tr>
        <td
          class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
        >
          {{ item.device_no }}
        </td>
        <td
          class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
        >
          {{ item.ip }}
        </td>
        <td
          class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
        >
          <div
            class="inline-flex font-medium rounded-full text-center px-2.5 py-0.5"
            :class="calStatus(item.status).color"
          >
            {{ calStatus(item.status).name }}
          </div>
        </td>
        <td
          class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
        >
          {{ item.device_count }}
        </td>
        <td
          class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
        >
          <div class="flex text-gray-400">
            <router-link :to="`/dust/detail/${item.device_no}`">
              <cil-pencil class="mr-2 hover:text-indigo-700 cursor-pointer" />
            </router-link>
            <akar-icons:chevron-down
              class="hover:text-indigo-700 cursor-pointer"
              @click="descVisibleSigns[i] = !descVisibleSigns[i]"
            />
          </div>
        </td>
      </tr>
      <tr :class="descVisibleSigns[i] ? '' : 'hidden' ">
        <td colspan="1000" class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap bg-gray-100">
          <Table
            :columns="subColumns"
            :items="items"
          >
          </Table>
        </td>
      </tr>
    </template>
  </Table>
</template>
