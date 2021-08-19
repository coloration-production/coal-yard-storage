<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { userApi } from '~/api'
import { UserDto } from '~/types'
import { useStatusOptions } from '~/logic'
import { filterNameByOptions } from '~/util'

export default defineComponent({
  setup() {
    const users = ref<UserDto[]>([])
    const { defaultOptions } = useStatusOptions()
    const { t } = useI18n()
    const columns = [
      { prop: 'id', label: 'user.id' },
      { prop: 'name', label: 'user.name' },
      { prop: 'status', label: 'user.status' },
    ]

    function fetchList() {
      userApi.list().then(res => users.value = res)
    }

    fetchList()

    return {
      t,
      users,
      columns,
      statusFilter: filterNameByOptions(defaultOptions),

    }
  },
})
</script>
<template>
  <div>
    <PageHead :title="t('menus.users')" class="mb-8">
      <router-link to="/permission/users/0">
        <Button class="bg-indigo-500 hover:bg-indigo-600">
          <ant-design-plus-outlined class="text-white" />
        </Button>
      </router-link>
    </PageHead>
    <Table
      :title="t('menus.users')"
      :columns="columns"
      :items="users"
    />
  </div>
</template>
