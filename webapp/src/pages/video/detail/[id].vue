<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  },
})
</script>
<template>
  <PageHead :title="t('摄像头配置')">
    <router-link to="/dust/settings">
      <IconButton>
        <akar-icons-arrow-back-thick />
        <span class="hidden xs:block ml-2">{{ t('common.back') }}</span>
      </IconButton>
    </router-link>
  </PageHead>
  <div class="flex-grow bg-white shadow-lg rounded-sm mb-8">
    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <!-- Business Profile -->
      <section>
        <h2 class="text-xl text-gray-800 font-bold mb-1">{{ t('基本信息') }}</h2>
        <div class="text-sm">信号节点的内网IP, 信号节点接收传感器信号数量</div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="name">{{ t('IP地址') }}</label>
            <input id="name" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="business-id">{{ t('工作地点') }}</label>
            <input id="business-id" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="business-id">{{ t('设备型号') }}</label>
            <input id="business-id" class="form-input w-full" type="text" />
          </div>
        </div>
      </section>
      <!-- Business Profile -->
      <section>
        <h2 class="text-xl text-gray-800 font-bold mb-1">{{ t('common.remarks') }}</h2>
        <div class="text-sm">帮助运营人员和设备维护人员查询的备注信息</div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="business-id">{{ t('business.safety_points') }}</label>
            <textarea id="business-id" class="form-input w-full" type="text"></textarea>
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="business-id">{{ t('common.remarks') }}</label>
            <textarea id="business-id" class="form-input w-full" type="text"></textarea>
          </div>
        </div>
      </section>
    </div>
    <!-- Panel footer -->
    <footer>
      <div class="flex flex-col px-6 py-5 border-t border-gray-200">
        <div class="flex self-end">
          <router-link to="/video/list">
            <button class="btn border-gray-200 hover:border-gray-300 text-gray-600">Cancel</button>
          </router-link>
          <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Save Changes</button>
        </div>
      </div>
    </footer>
  </div>
</template>
