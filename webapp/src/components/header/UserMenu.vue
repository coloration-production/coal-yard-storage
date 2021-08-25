<script lang="ts">
import { useEventListener } from '@vueuse/core'
import { ref, defineComponent, PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { accessApi } from '~/api'
import { useUser } from '~/logic'
import { UserDto } from '~/types'
import UserAvatar from '../../images/user-avatar-32.png'

export default defineComponent({
  name: 'UserMenu',
  props: {
    user: {
      type: Object as PropType<UserDto>,
      default: () => ({}),
    },
  },
  setup() {
    const router = useRouter()
    const dropdownOpen = ref(false)
    const trigger = ref(null)
    const dropdown = ref(null)
    const { clearUser } = useUser()
    const { t } = useI18n()

    // close on click outside
    const clickHandler = ({ target }: Event) => {
      if (!dropdownOpen.value || dropdown.value.contains(target) || trigger.value.contains(target)) return
      dropdownOpen.value = false
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen.value || keyCode !== 27) return
      dropdownOpen.value = false
    }

    const logout = () => {
      dropdownOpen.value = false
      accessApi.signout()
        .then(clearUser)
        .then(() => router.replace('/access/signin'))
    }

    useEventListener(globalThis.document, 'click', clickHandler)
    useEventListener(globalThis.document, 'keydown', keyHandler)

    return {
      dropdownOpen,
      trigger,
      dropdown,
      UserAvatar,
      logout,
      t,
    }
  },
})
</script>
<template>
  <div class="relative inline-flex">
    <button
      ref="trigger"
      class="inline-flex justify-center items-center group"
      aria-haspopup="true"
      :aria-expanded="dropdownOpen"
      @click.prevent="dropdownOpen = !dropdownOpen"
    >
      <img class="w-8 h-8 rounded-full" :src="UserAvatar" width="32" height="32" alt="User" />
      <div class="flex items-center truncate">
        <span class="truncate ml-2 text-sm font-medium group-hover:text-gray-800">{{ user.name }}</span>
        <svg class="w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400" viewBox="0 0 12 12">
          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
        </svg>
      </div>
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
        <div class="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200">
          <div class="font-medium text-gray-800">
            {{ user.name }}
          </div>
          <div class="text-xs text-gray-500 italic">
            {{ user.role?.alias }}
          </div>
        </div>
        <ul ref="dropdown" @focusin="dropdownOpen = true" @focusout="dropdownOpen = false">
          <li>
            <router-link
              class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
              to="/settings"
              @click="dropdownOpen = false"
            >
              {{ t('common.settings') }}
            </router-link>
          </li>
          <li
            class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
            @click="logout"
          >
            {{ t('header.sign_out') }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
