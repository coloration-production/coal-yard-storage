<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUser } from '~/logic'
export default defineComponent({
  name: 'WelcomeBanner',
  setup() {
    const { userInfo } = useUser()
    const greet = ref('')
    const { t } = useI18n()

    onBeforeMount(() => {
      const hour = (new Date()).getHours()
      greet.value = hour > 18
        ? 'evening'
        : hour > 12
          ? 'afternoon'
          : hour > 4
            ? 'morning'
            : 'evening'
    })
    return {
      userInfo,
      greet,
      t,
    }
  },
})
</script>
<template>
  <div class="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
    <!-- Background illustration -->
    <div
      class="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"
      aria-hidden="true"
    >
      <svg width="319" height="198" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
          <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
          <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
            <stop stop-color="#A5B4FC" offset="0%" />
            <stop stop-color="#818CF8" offset="100%" />
          </linearGradient>
          <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
            <stop stop-color="#4338CA" offset="0%" />
            <stop stop-color="#6366F1" stop-opacity="0" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <g transform="rotate(64 36.592 105.604)">
            <mask id="welcome-d" fill="#fff">
              <use xlink:href="#welcome-a" />
            </mask>
            <use fill="url(#welcome-b)" xlink:href="#welcome-a" />
            <path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z" />
          </g>
          <g transform="rotate(-51 91.324 -105.372)">
            <mask id="welcome-f" fill="#fff">
              <use xlink:href="#welcome-e" />
            </mask>
            <use fill="url(#welcome-b)" xlink:href="#welcome-e" />
            <path fill="url(#welcome-c)" mask="url(#welcome-f)" d="M40.333-15.147h50v95h-50z" />
          </g>
          <g transform="rotate(44 61.546 392.623)">
            <mask id="welcome-h" fill="#fff">
              <use xlink:href="#welcome-g" />
            </mask>
            <use fill="url(#welcome-b)" xlink:href="#welcome-g" />
            <path fill="url(#welcome-c)" mask="url(#welcome-h)" d="M40.333-15.147h50v95h-50z" />
          </g>
        </g>
      </svg>
    </div>

    <!-- Content -->
    <div class="relative">
      <h1 class="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
        {{ t('dashboard.good_' + greet) }}, {{ userInfo.user.name }}. 👋
      </h1>
      <p>{{ t('dashboard.happening') }}:</p>
    </div>
  </div>
</template>
