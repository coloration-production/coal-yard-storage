<script setup lang="ts">
import { defineProps } from 'vue-demi'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div v-bind="$attrs" class="sm:flex sm:justify-between sm:items-center mb-8">
    <!-- Left: Title -->
    <div class="mb-4 sm:mb-0">
      <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">{{ props.title }}</h1>
    </div>
    <!-- Right: Actions  -->
    <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
      <slot></slot>
    </div>
  </div>
</template>
