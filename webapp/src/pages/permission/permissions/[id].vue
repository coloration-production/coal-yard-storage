<script lang="ts">
import { defineComponent, ref, computed, watch, ComponentOptions } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { permissionApi } from '~/api'
import { useStatusOptions } from '~/logic'
import { PermissionDto } from '~/types'
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
    const { t } = useI18n()

    const { defaultOptions } = useStatusOptions()

    const permission = ref<Partial<PermissionDto>>({
      name: '',
      alias: '',
      status: 1,
    })

    const rid = computed(() => Number(props.id) || 0)
    const title = computed(() => rid.value === 0 ? 'Create Permission' : `Edit Permission #${rid.value}`)
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

      permissionApi.get(rid.value)
        .then((res) => {
          const { name, status, alias } = res
          permission.value = { name, status, alias }
        })

      permissionApi.list().then(res => permissionOptions.value = mapOptions(res))
    }, { immediate: true })

    function handleSubmit(e: Event) {
      e.preventDefault()

      // form.value.validate((errors) => {

      // })

      const permissionPromise = rid.value === 0
        ? permissionApi.create(permission.value)
        : permissionApi.modify(rid.value, permission.value)

      permissionPromise.then(() => {
        // console.log(title.value + 'success !')
        router.replace('/permission/permissions')
      })
    }

    return {
      t,
      formRef,
      model: permission,
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
      <router-link to="/permission/permissions">
        <Button>
          <akar-icons-arrow-back-thick />
        </Button>
      </router-link>
    </PageHead>
    <ContentPannel>
      <section>
        <h2 class="text-xl text-gray-800 font-bold mb-1">Project Profile</h2>
        <div class="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="name">{{ t('business.item_name') }}</label>
            <input id="name" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="business-id">{{ t('permission.name') }}</label>
            <input id="business-id" class="form-input w-full" type="text" />
          </div>
        </div>
      </section>
      <template v-slot:footer>
        <div class="flex self-end">
          <router-link to="/permission/permissions">
            <button class="btn border-gray-200 hover:border-gray-300 text-gray-600">Cancel</button>
          </router-link>
          <Button
            class="text-white hover:text-white bg-indigo-500 hover:bg-indigo-600 ml-3"
            @click="handleSubmit"
          >Submit</Button>
        </div>
      </template>
    </ContentPannel>
    <!-- <ContentBox class="p-6">
      <div class="lg:w-1/3 md:w-1/2">
        <NForm ref="form" :model="model" :rules="rules">
          <NFormItemRow path="name" label="Name">
            <NInput v-model:value="model.name" @keydown.enter.prevent />
          </NFormItemRow>
          <NFormItemRow path="alias" label="Alias">
            <NInput v-model:value="model.alias" @keydown.enter.prevent />
          </NFormItemRow>
          <NFormItemRow path="status" label="Parent">
            <NSelect v-model:value="model.status" :options="defaultStatusOptions" />
          </NFormItemRow>
        </NForm>

        <div class="flex justify-end">
          <NButton type="primary" >Submit</NButton>
        </div>
      </div>
    </ContentBox> -->
  </div>
</template>
