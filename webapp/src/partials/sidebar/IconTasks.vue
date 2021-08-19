<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <svg v-bind="$attrs" viewBox="0 0 24 24">
    <path
      class="fill-current"
      :class="props.active ? 'text-indigo-500' : 'text-gray-600'"
      d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
    />
    <path
      class="fill-current"
      :class="props.active ? 'text-indigo-500' : 'text-gray-600'"
      d="M1 1h22v23H1z"
    />
    <path
      class="fill-current"
      :class="props.active ? 'text-indigo-300' : 'text-gray-400'"
      d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
    />
  </svg>
</template>
<style>
</style>
