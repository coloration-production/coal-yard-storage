<template>
  <!-- Page header -->
  <div class="mb-8">
    <!-- Title -->
    <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">
      {{ t('系统设置') }}
    </h1>
  </div>

  <!-- Content -->
  <div class="bg-white shadow-lg rounded-sm mb-8">
    <div class="flex flex-col md:flex-row md:-mr-px">
      <div class="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-gray-200 md:w-60 md:space-y-3">
        <!-- Group 1 -->
        <div>
          <div class="text-xs font-semibold text-gray-400 uppercase mb-3">{{ t('账号设置') }}</div>
          <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
            <li class="mr-0.5 md:mr-0 md:mb-0.5">
              <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap bg-indigo-50" href="#0">
                <svg class="w-4 h-4 flex-shrink-0 fill-current text-indigo-500 mr-2" viewBox="0 0 16 16">
                  <path d="M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z" />
                </svg>
                <span class="text-sm font-medium text-indigo-500">{{t('重置密码')}}</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- Group 2 -->
        <div>
          <div class="text-xs font-semibold text-gray-400 uppercase mb-3">{{ t('功能设置')}}</div>
          <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
            <li class="mr-0.5 md:mr-0 md:mb-0.5">
              <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap" href="#0">
                <svg class="w-4 h-4 flex-shrink-0 fill-current text-gray-500 mr-2" viewBox="0 0 16 16">
                  <path d="M7.001 3h2v4h-2V3zm1 7a1 1 0 110-2 1 1 0 010 2zM15 16a1 1 0 01-.6-.2L10.667 13H1a1 1 0 01-1-1V1a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1zM2 11h9a1 1 0 01.6.2L14 13V2H2v9z" />
                </svg>
                <span class="text-sm font-medium text-gray-600 hover:text-gray-700">导入/导出</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-grow">
        <!-- Panel body -->
        <div class="p-6 space-y-6">
          <!-- Business Profile -->
          <section>
            <h2 class="text-xl text-gray-800 font-bold mb-1">{{ t('原始密码') }}</h2>
            <div class="text-sm">登录当前系统所使用的密码</div>
            <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
              <div class="sm:w-1/3">
                <label class="block text-sm font-medium mb-1" for="name">{{ t('原始密码') }}</label>
                <input id="name" class="form-input w-full" type="password" />
              </div>
            </div>
          </section>
          <!-- Business Profile -->
          <section>
            <h2 class="text-xl text-gray-800 font-bold mb-1">{{ t('新密码') }}</h2>
            <div class="text-sm">新密码设置后, 会强制登出系统</div>
            <div
              class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
              <div class="sm:w-1/3">
                <label class="block text-sm font-medium mb-1" for="name">{{ t('新密码') }}</label>
                <input id="name" class="form-input w-full" type="text" />
              </div>
              <div class="sm:w-1/3">
                <label class="block text-sm font-medium mb-1" for="business-id">{{ t('确认新密码') }}</label>
                <input id="business-id" class="form-input w-full" type="text" />
              </div>
            </div>
          </section>
        </div>
        <!-- Panel footer -->
        <footer>
          <div class="flex flex-col px-6 py-5 border-t border-gray-200">
            <div class="flex self-end">
              <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Save Changes</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
export default {
  name: 'Settings',
  components: {
  },
  setup() {
    const { t } = useI18n()
    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
      t,
    }
  },
}
</script>
