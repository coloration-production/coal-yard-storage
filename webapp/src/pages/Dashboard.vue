<template>
  <!-- Cards -->
  <div class="grid grid-cols-12 gap-6">
    <DashboardCard01 title="粉尘" />
    <div class="flex flex-col col-span-full xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <header class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">信号异常状态</h2>
      </header>
      <div class="flex justify-between px-5 py-6 items-center">
        <h2 class="font-semibold text-xl text-gray-800">粉尘</h2>
        <span class="text-xl  bg-green-500 text-white px-4 py-2 rounded-full">48/48</span>
      </div>
      <div class="flex justify-between px-5 py-6 items-center">
        <h2 class="font-semibold text-xl text-gray-800">温度</h2>
        <span class="text-xl  bg-red-500 text-white px-4 py-2 rounded-full">43/48</span>
      </div>
    </div>
    <DashboardCard01 title="温度" />
    <DashboardCard06 />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import WelcomeBanner from '../partials/dashboard/WelcomeBanner.vue'
import DashboardAvatars from '../partials/dashboard/DashboardAvatars.vue'
import FilterButton from '../partials/actions/FilterButton.vue'
import Datepicker from '../partials/actions/Datepicker.vue'
import DashboardCard01 from '../partials/dashboard/DashboardCard01.vue'
import DashboardCard02 from '../partials/dashboard/DashboardCard02.vue'
import DashboardCard03 from '../partials/dashboard/DashboardCard03.vue'
import DashboardCard04 from '../partials/dashboard/DashboardCard04.vue'
import DashboardCard05 from '../partials/dashboard/DashboardCard05.vue'
import DashboardCard06 from '../partials/dashboard/DashboardCard06.vue'
import DashboardCard07 from '../partials/dashboard/DashboardCard07.vue'
import DashboardCard08 from '../partials/dashboard/DashboardCard08.vue'
import DashboardCard09 from '../partials/dashboard/DashboardCard09.vue'
import DashboardCard10 from '../partials/dashboard/DashboardCard10.vue'
import DashboardCard11 from '../partials/dashboard/DashboardCard11.vue'

export default {
  name: 'Dashboard',
  components: {
    DashboardCard01,
    DashboardCard02,
    DashboardCard03,
    DashboardCard04,
    DashboardCard05,
    DashboardCard06,
    DashboardCard07,
    DashboardCard08,
    DashboardCard09,
    DashboardCard10,
    DashboardCard11,
  },
  setup() {
    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }
  },
}
</script>
