<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  },
})
</script>
<template>
  <PageHead :title="t('business.construction_plan')">
    <router-link to="/projects/daily">
      <IconButton>
        <akar-icons-arrow-back-thick />
        <span class="hidden xs:block ml-2">{{ t('common.back') }}</span>
      </IconButton>
    </router-link>
  </PageHead>
  <div class="flex-grow bg-white shadow-lg rounded-sm mb-8">
    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <!-- Business Profile -->
      <section>
        <h2 class="text-xl text-gray-800 font-bold mb-1">Project Profile</h2>
        <div class="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="name">{{ t('business.item_name') }}</label>
            <input id="name" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="business-id">{{ t('business.project_no') }}</label>
            <input id="business-id" class="form-input w-full" type="text" />
          </div>
        </div>
      </section>
      <!-- Business Profile -->
      <section>
        <h2 class="text-xl text-gray-800 font-bold mb-1">Work Profile</h2>
        <div class="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="name">{{ t('business.work_content') }}</label>
            <input id="name" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="business-id">{{ t('business.work_address') }}</label>
            <input id="business-id" class="form-input w-full" type="text" />
          </div>
        </div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="name">{{ t('business.work_org') }}</label>
            <input id="name" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="business-id">{{ t('business.work_leader') }}</label>
            <input id="business-id" class="form-input w-full" type="text" />
          </div>
        </div>
      </section>
      <!-- Business Profile -->
      <section>
        <h2 class="text-xl text-gray-800 font-bold mb-1">Self Note</h2>
        <div class="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="name">{{ t('business.checker') }}</label>
            <input id="name" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="business-id">{{ t('business.equipment_leader') }}</label>
            <input id="business-id" class="form-input w-full" type="text" />
          </div>
        </div>
      </section>
      <section>
        <h2 class="text-xl text-gray-800 font-bold mb-1">{{ t('common.remarks') }}</h2>
        <div class="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="business-id">{{ t('business.safety_points') }}</label>
            <textarea id="business-id" class="form-input w-full" type="text"></textarea>
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="business-id">{{ t('common.remarks') }}</label>
            <textarea id="business-id" class="form-input w-full" type="text"></textarea>
          </div>
        </div>
      </section>
    </div>
    <!-- Panel footer -->
    <footer>
      <div class="flex flex-col px-6 py-5 border-t border-gray-200">
        <div class="flex self-end">
          <router-link to="/projects/daily">
            <button class="btn border-gray-200 hover:border-gray-300 text-gray-600">Cancel</button>
          </router-link>
          <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Save Changes</button>
        </div>
      </div>
    </footer>
  </div>
</template>
