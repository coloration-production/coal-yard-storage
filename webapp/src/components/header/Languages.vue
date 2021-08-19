<script lang="ts">
import { useEventListener } from '@vueuse/core'
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Help',
  setup() {
    const dropdownOpen = ref(false)
    const trigger = ref<HTMLButtonElement | null>(null)
    const dropdown = ref<HTMLUListElement | null>(null)
    const { t, locale } = useI18n()

    function changeLang(langName: string) {
      dropdownOpen.value = false
      locale.value = langName
    }
    // close on click outside
    const clickHandler = ({ target }: Event) => {
      if (
        !dropdownOpen.value
        || (dropdown.value && dropdown.value.contains(target as any))
        || (trigger.value && trigger.value.contains(target as any))
      ) return
      dropdownOpen.value = false
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen.value || keyCode !== 27) return
      dropdownOpen.value = false
    }

    useEventListener(document, 'click', clickHandler)
    useEventListener(document, 'keydown', keyHandler)

    return {
      changeLang,
      dropdownOpen,
      trigger,
      dropdown,
      t,
    }
  },
})
</script>
<template>
  <div class="relative inline-flex ml-3">
    <button
      ref="trigger"
      class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full"
      :class="{ 'bg-gray-200': dropdownOpen }"
      aria-haspopup="true"
      :aria-expanded="dropdownOpen"
      @click.prevent="dropdownOpen = !dropdownOpen"
    >
      <span class="sr-only">Info</span>
      <ion-language class="w-4 h-4" />
    </button>
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="dropdownOpen"
        class="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
      >
        <div class="text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-3">
          {{ t('header.select_language') }}
        </div>
        <ul ref="dropdown" @focusin="dropdownOpen = true" @focusout="dropdownOpen = false">
          <li
            class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
            @click="changeLang('en')"
          >
            <icon-park-outline-english class="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" />
            <span>English</span>
          </li>
          <li
            class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
            @click="changeLang('zh-CN')"
          >
            <icon-park-outline-chinese class="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" />
            <span>简体中文</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
