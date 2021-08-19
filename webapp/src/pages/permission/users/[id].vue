<script lang="ts">
import { defineComponent, ref, computed, watch, ComponentOptions } from 'vue'
import { useRouter } from 'vue-router'
import { roleApi, userApi } from '~/api'
import { UserDto } from '~/types'
import { useStatusOptions } from '~/logic'
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

    const user = ref<Partial<UserDto>>({
      name: '',
      role_id: 1,
      status: 1,
    })

    const rules = {
      name: [
        {
          required: true,
          message: 'require name',
          trigger: ['input', 'blur'],
        },
      ],
    }

    const uid = computed(() => Number(props.id) || 0)
    const title = computed(() => uid.value === 0 ? 'Create User' : `Edit User #${uid.value}`)
    const roleOptions = ref<ComponentOptions>([])

    watch(uid, () => {
      if (uid.value === 0) return

      userApi.get(uid.value)
        .then((res) => {
          const { name, role_id, status } = res

          user.value = {
            name, role_id, status,
          }
        })

      roleApi.list().then(res => roleOptions.value = mapOptions(res, 'alias', 'id'))
    }, { immediate: true })

    function handleSubmit(e: Event) {
      e.preventDefault()

      const userPromise = uid.value === 0
        ? userApi.create(user.value)
        : userApi.modify(uid.value, user.value)

      userPromise.then(() => {
        // console.log(title.value + 'success !')
        router.replace('/permission/users')
      })
    }

    return {
      formRef,
      model: user,
      uid,
      rules,
      title,
      handleSubmit,
      defaultStatusOptions: mapOptions(defaultOptions),
      roleOptions,
    }
  },
})
</script>
<template>
  <div>
    <PageHead :title="title" class="mb-8">
      <router-link to="/permission/users">
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
      <form :onsubmit="handleSubmit">
        <div class="lg:w-1/3 md:w-1/2 w-full">
          <NForm ref="form" :model="model" :rules="rules">
            <NFormItemRow path="name" label="Name">
              <NInput v-model:value="model.name" @keydown.enter.prevent />
            </NFormItemRow>
            <NFormItemRow path="role_id" label="Role">
              <NSelect v-model:value="model.role_id" :options="roleOptions" />
            </NFormItemRow>
            <NFormItemRow path="status" label="Status">
              <NSelect v-model:value="model.status" :options="defaultStatusOptions" />
            </NFormItemRow>
          </NForm>
        </div>
      </form>
      <template v-slot:footer>
        <div class="flex self-end">
          <router-link to="/permission/users">
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
