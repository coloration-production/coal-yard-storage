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
    <circle
      class="fill-current"
      :class="props.active ? 'text-indigo-300' : 'text-gray-400'"
      cx="18.5"
      cy="5.5"
      r="4.5"
    />
    <circle
      class="fill-current"
      :class="props.active ? 'text-indigo-500' : 'text-gray-600'"
      cx="5.5"
      cy="5.5"
      r="4.5"
    />
    <circle
      class="fill-current"
      :class="props.active ? 'text-indigo-500' : 'text-gray-600'"
      cx="18.5"
      cy="18.5"
      r="4.5"
    />
    <circle
      class="fill-current"
      :class="props.active ? 'text-indigo-300' : 'text-gray-400'"
      cx="5.5"
      cy="18.5"
      r="4.5"
    />
  </svg>
</template>
<style>
</style>
