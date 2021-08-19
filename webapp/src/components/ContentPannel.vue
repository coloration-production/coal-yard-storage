<template>
  <div class="flex-grow bg-white shadow-lg rounded-sm mb-8">
    <div class="p-6 space-y-6">
      <slot></slot>
    </div>
    <footer>
      <div class="flex flex-col px-6 py-5 border-t border-gray-200">
        <slot name="footer"></slot>
      </div>
    </footer>
  </div>
</template>
