<script lang="ts">
import { defineComponent, ref, computed, watch, ComponentOptions } from 'vue'
import { useRouter } from 'vue-router'
import { permissionApi, roleApi } from '~/api'
import { useStatusOptions } from '~/logic'
import { RoleDto } from '~/types'
import { mapOptions } from '~/util'
export default defineComponent({
  props: {
    id: {
      type: String,
      default: '0',
    },
  },
  setup(props) {
    const router = useRouter()
    const formRef = ref(null)

    const { defaultOptions } = useStatusOptions()

    const role = ref<Partial<RoleDto>>({
      name: '',
      alias: '',
      status: 1,
      permissions: [],
    })

    const rid = computed(() => Number(props.id) || 0)
    const title = computed(() => rid.value === 0 ? 'Create Role' : `Edit Role #${rid.value}`)
    const permissionOptions = ref<ComponentOptions>([])
    const rules = {
      name: [
        {
          required: true,
          message: 'require name',
          trigger: ['input', 'blur'],
        },
      ],
    }

    watch(rid, () => {
      if (rid.value === 0) return

      roleApi.get(rid.value)
        .then((res) => {
          const { name, status, alias } = res
          role.value = { name, status, alias }
        })

      permissionApi.list().then(res => permissionOptions.value = mapOptions(res, 'alias', 'id'))
    }, { immediate: true })

    function handleSubmit(e: Event) {
      e.preventDefault()

      // form.value.validate((errors) => {

      // })

      const rolePromise = rid.value === 0
        ? roleApi.create(role.value)
        : roleApi.modify(rid.value, role.value)

      rolePromise.then(() => {
        // console.log(title.value + 'success !')
        router.replace('/permission/roles')
      })
    }

    return {
      formRef,
      model: role,
      rid,
      title,
      rules,
      handleSubmit,
      defaultStatusOptions: mapOptions(defaultOptions),
      permissionOptions,
    }
  },
})
</script>
<template>
  <div>
    <PageHead :title="title" class="mb-8">
      <router-link to="/permission/roles">
        <Button>
          <akar-icons-arrow-back-thick />
        </Button>
      </router-link>
    </PageHead>
    <ContentPannel>
      <h2 class="text-xl text-gray-800 font-bold mb-1">Project Profile</h2>
      <div
        class="text-sm"
      >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
      <NForm ref="form" :model="model" :rules="rules">
        <NFormItemRow path="name" label="Name" class="sm:w-1/3">
          <NInput v-model:value="model.name" @keydown.enter.prevent />
        </NFormItemRow>
        <NFormItemRow path="alias" label="Alias" class="sm:w-1/3">
          <NInput v-model:value="model.alias" @keydown.enter.prevent />
        </NFormItemRow>
        <NFormItemRow path="permissions" label="Permissions" class="sm:w-1/3">
          <NSelect v-model:value="model.permissions" :options="permissionOptions" multiple />
        </NFormItemRow>
        <NFormItemRow path="status" label="Status" class="sm:w-1/3">
          <NSelect v-model:value="model.status" :options="defaultStatusOptions" />
        </NFormItemRow>
      </NForm>
      <template v-slot:footer>
        <div class="flex self-end">
          <router-link to="/permission/roles">
            <button class="btn border-gray-200 hover:border-gray-300 text-gray-600">Cancel</button>
          </router-link>
          <Button
            class="text-white hover:text-white bg-indigo-500 hover:bg-indigo-600 ml-3"
            @click="handleSubmit"
          >Submit</Button>
        </div>
      </template>
    </ContentPannel>
  </div>
</template>
