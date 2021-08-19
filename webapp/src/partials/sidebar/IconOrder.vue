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
      :class="props.active ? 'text-indigo-300' : 'text-gray-400'"
      d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
    />
    <path
      class="fill-current"
      :class="props.active ? 'text-indigo-600' : 'text-gray-700'"
      d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
    />
    <path
      class="fill-current"
      :class="props.active ? 'text-indigo-500' : 'text-gray-600'"
      d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
    />
  </svg>
</template>
<style>
</style>
