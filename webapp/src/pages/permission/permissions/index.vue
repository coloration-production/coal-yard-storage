<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { permissionApi } from '~/api'
import { PermissionDto } from '~/types'

export default defineComponent({
  setup() {
    const permissions = ref<PermissionDto[]>([])
    const { t } = useI18n()
    const columns = [
      { prop: 'id', label: 'permission.id' },
      { prop: 'alias', label: 'permission.name' },
      { prop: 'alias', label: 'permission.name' },
    ]
    function fetchList() {
      permissionApi.list().then(res => permissions.value = res)
    }

    fetchList()

    return {
      t,
      columns,
      permissions,
    }
  },
})
</script>
<template>
  <div>
    <PageHead title="Permission" class="mb-8">
      <router-link to="/permission/permissions/0">
        <Button class="bg-indigo-500 hover:bg-indigo-600">
          <ant-design-plus-outlined class="text-white" />
        </Button>
      </router-link>
    </PageHead>
    <Table
      :title="t('menus.permissions')"
      :columns="columns"
      :items="permissions"
    />
  </div>
</template>
