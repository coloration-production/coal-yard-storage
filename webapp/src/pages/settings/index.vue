<template>
  <!-- Page header -->
  <div class="mb-8">
    <!-- Title -->
    <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">Account Settings ✨</h1>
  </div>

  <!-- Content -->
  <div class="bg-white shadow-lg rounded-sm mb-8">
    <div class="flex flex-col md:flex-row md:-mr-px">
      <SettingsSidebar />
      <SettingsContent />
    </div>
  </div>
</template>
<script lang="ts">
  import { ref } from 'vue'
  import SettingsSidebar from '../../partials/settings/SettingsSidebar.vue'
  import SettingsContent from '../../partials/settings/SettingsContent.vue'
  
  export default {
    name: 'Settings',
    components: {
      SettingsSidebar,
      SettingsContent,
    },
    setup() {
  
      const sidebarOpen = ref(false)
  
      return {
        sidebarOpen,
      }  
    }
  }
  </script>