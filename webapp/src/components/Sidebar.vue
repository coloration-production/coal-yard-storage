<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { useRoute } from 'vue-router'
import { useEventListener } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { SidebarItem } from '~/types'

export default defineComponent({
  name: 'Sidebar',
  props: {
    sidebarOpen: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array as PropType<SidebarItem[]>,
      default: () => ([]),
    },
  },
  emits: ['close-sidebar'],
  setup(props, { emit }) {
    const trigger = ref(null)
    const sidebar = ref(null)

    const route = useRoute()
    const expandKeys = ref<string[]>([])
    const { t } = useI18n()

    function toggleExpandKey(key: SidebarItem['value']) {
      const idx = expandKeys.value.indexOf(key)
      if (idx < 0) expandKeys.value.push(key)
      else expandKeys.value.splice(idx, 1)
    }

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value) return
      if (
        !props.sidebarOpen
        || sidebar.value.contains(target)
        || trigger.value.contains(target)
      )
        return
      emit('close-sidebar')
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!props.sidebarOpen || keyCode !== 27) return
      emit('close-sidebar')
    }


    useEventListener(document, 'click', clickHandler)
    useEventListener(document, 'keydown', keyHandler)

    return {
      t,
      trigger,
      sidebar,
      route,
      expandKeys,
      toggleExpandKey,
    }
  },
})
</script>
<template>
  <div>
    <!-- Sidebar backdrop (mobile only) -->
    <div
      class="fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200"
      :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      aria-hidden="true"
    ></div>

    <!-- Sidebar -->
    <div
      id="sidebar"
      ref="sidebar"
      class="absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
    >
      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <!-- Close button -->
        <button
          ref="trigger"
          class="lg:hidden text-gray-500 hover:text-gray-400"
          aria-controls="sidebar"
          :aria-expanded="sidebarOpen"
          @click.stop="$emit('close-sidebar')"
        >
          <span class="sr-only">Close sidebar</span>
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        <!-- Logo -->
        <router-link class="flex flex-1 items-center" to="/">
          <h1 class="text-xl mx-2 font-bold flex-1 text-center lg:order-1 text-gray-50">煤场监控系统</h1>
          <Logo />
        </router-link>
      </div>

      <!-- Links -->
      <div>
        <h3 class="text-xs uppercase text-gray-500 font-semibold pl-3">Pages</h3>
        <ul class="mt-3">
          <!-- Level 1 -->
          <li
            v-for="item in items"
            :key="item.name"
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 text-gray-200 hover:text-white hover:bg-gray-900 transition"
            :class="route.path.startsWith(item.value) ? 'bg-gray-900' : ''"
          >
            <router-link
              :to="item.children ? '' : item.value"
              @click="item.children ? toggleExpandKey(item.value) : $emit('close-sidebar')"
            >
              <div class="flex flex-grow items-center">
                <!-- 动态图标 -->
                <component
                  :is="item.icon"
                  class="flex-shrink-0 h-6 w-6 mr-3"
                  :active="route.path.startsWith(item.value)"
                />
                <span class="text-sm font-medium flex-1">{{ t(`menus.${item.name}`) }}</span>
                <akar-icons-chevron-down
                  v-if="item.children"
                  :class="{ 'rotate-z-180': expandKeys.includes(item.value) }"
                  class="text-sm mr-1 transition transform-gpu"
                />
                <span
                  v-if="item.tips && item.tips > 0"
                  class="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded-sm"
                >{{ item.tips }}</span>
              </div>
            </router-link>

            <!-- Level 2 -->
            <ul v-if="item.children && expandKeys.includes(item.value)" class="pl-9 mt-1">
              <li
                v-for="sub in item.children"
                :key="sub.value"
                class="py-1 block hover:text-indigo-400 text-gray-200 transition"
                :class="route.path.startsWith(sub.value) ? 'text-indigo-400' : 'text-gray-200'"
              >
                <router-link
                  class="block text-sm"
                  :to="sub.value"
                  @click="$emit('close-sidebar')"
                >
                  {{ t(`menus.${sub.name}`) }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
