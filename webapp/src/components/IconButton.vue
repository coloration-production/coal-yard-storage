<template>
  <button
    class="btn flex items-center justify-between h-10 bg-white border-blue-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-600"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>
