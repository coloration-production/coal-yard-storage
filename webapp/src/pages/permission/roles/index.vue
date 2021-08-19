<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { permissionApi, roleApi } from '~/api'
import { useStatusOptions } from '~/logic'
import { PermissionDto, RoleDto } from '~/types'
import { filterNameByOptions } from '~/util'

export default defineComponent({
  setup() {
    const roles = ref<RoleDto[]>([])
    const permissions = ref<PermissionDto[]>([])
    const { t } = useI18n()
    const { defaultOptions } = useStatusOptions()

    const columns = [
      { prop: 'name', label: 'role.name' },
      { prop: 'status', label: 'role.status' },
      { prop: 'perssions', label: 'role.permissions' },
    ]

    function fetchList() {
      roleApi.list().then(res => roles.value = res)
      permissionApi.list().then(res => permissions.value = res)
    }

    function permissionFilter(id: PermissionDto['id']) {
      return filterNameByOptions(permissions.value, 'name', 'id')(id)
    }

    fetchList()

    return {
      t,
      roles,
      columns,
      statusFilter: filterNameByOptions(defaultOptions),
      permissionFilter,
    }
  },
})
</script>
<template>
  <div>
    <PageHead title="Role" class="mb-8">
      <router-link to="/permission/roles/0">
        <Button class="bg-indigo-500 hover:bg-indigo-600">
          <ant-design-plus-outlined class="text-white" />
        </Button>
      </router-link>
    </PageHead>
    <Table
      :title="t('menus.roles')"
      :columns="columns"
      :items="roles"
    />
  </div>
</template>
