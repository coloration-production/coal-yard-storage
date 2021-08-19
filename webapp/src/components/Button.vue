<template>
  <button
    v-bind="$attrs"
    class="btn flex items-center justify-between h-10 bg-white border-blue-gray-200 hover:border-gray-300  hover:text-gray-600"
  >
    <slot></slot>
  </button>
</template>
