<script lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { accessApi } from '~/api'
import { useUser } from '~/logic'
import { SigninPayload, SigninDto } from '~/types'
export default defineComponent({
  setup() {
    const router = useRouter()
    const { setUser } = useUser()
    const { t } = useI18n()
    const param = ref<SigninPayload>({
      name: 'admin',
      pwd: '123456',
    })

    const disabled = computed(() => {
      return param.value.name === '' || param.value.pwd === ''
    })

    function signin(e: Event) {
      e.preventDefault()

      if (disabled.value) return

      accessApi.signin(param.value)
        .then((dto: SigninDto) => {
          setUser(dto)
          router.push('/dashboard')
        })
    }

    return {
      signin,
      param,
      disabled,
      t,
    }
  },
})
</script>
<template>
  <main class="bg-white">
    <div class="relative md:flex">
      <!-- Content -->
      <div class="md:w-1/3">
        <div class="max-w-sm mx-auto min-h-screen flex flex-col justify-center px-4 py-8">
          <div class="w-full">
            <h1 class="text-3xl text-gray-800 font-bold mb-6">
              煤场控制管理系统
            </h1>
            <!-- Form -->
            <form @submit="signin">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="email">账号</label>
                  <input id="email" v-model="param.name" class="form-input w-full" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="password">密码</label>
                  <input id="password" v-model="param.pwd" class="form-input w-full" type="password" autocomplete="on" />
                </div>
              </div>
              <div class="flex items-center justify-between mt-6">
                <!-- <div class="mr-1">
                  <router-link
                    class="text-sm underline hover:no-underline"
                    to="/reset-password"
                  >Forgot Password?</router-link>
                </div> -->
                <button
                  type="submit"
                  class="btn flex-1 bg-indigo-500 hover:bg-indigo-600 text-white"
                >{{ t('access.sign_in') }}</button>
              </div>
            </form>
            <!-- Footer -->
            <div class="pt-5 mt-6 border-t border-gray-200">
              <div class="text-xs text-center">
                Power by
                <router-link
                  class="font-medium text-indigo-500 hover:text-indigo-600"
                  to="/signup"
                >Singa Inc.</router-link>
              </div>
              <!-- Warning -->
              <!-- <div class="mt-5">
                <div class="bg-yellow-100 text-yellow-600 px-3 py-2 rounded">
                  <svg class="inline w-3 h-3 flex-shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                    <path
                      d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                    />
                  </svg>
                  <span
                    class="text-sm"
                  >To support you during the pandemic super pro features are free until March 31st.</span>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <!-- Image -->
      <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-2/3" aria-hidden="true">
        <div
          class="absolute inset-0 opacity-80 z-20 bg-gradient-to-br from-indigo-300 to-indigo-700"
        />
        <div
          class="absolute inset-0 z-10 bg-right bg-no-repeat"
          style=" background-size: 120% 100%; background-image: url(https://p4.itc.cn/images01/20210708/088071c1a39c482e91829f22ebf2139b.jpeg)"
          width="218"
          height="224"
          alt="Authentication decoration"
        />
      </div>
    </div>
  </main>
</template>
<route lang="yaml">
meta:
  layout: empty
</route>
