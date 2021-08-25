<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Applications',
  setup() {
    const sidebarOpen = ref(false)

    const items01 = ref([
      {
        id: 0,
        title: 'Form Builder CP',
        link: '#0',
        content: 'Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!',
        rating: '4.2',
        feat01: '23 hours on-demand video',
        feat02: '37 articles',
        feat03: 'Access on mobile and TV',
        feat04: '8K+ active installations',
      },
      {
        id: 1,
        title: 'Form Builder CP',
        link: '#0',
        content: 'Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!',
        rating: '4.9',
        feat01: '23 hours on-demand video',
        feat02: '37 articles',
        feat03: 'Access on mobile and TV',
        feat04: '8K+ active installations',
      },
      {
        id: 2,
        title: 'Form Builder CP',
        link: '#0',
        content: 'Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!',
        rating: '4.3',
        feat01: '23 hours on-demand video',
        feat02: '37 articles',
        feat03: 'Access on mobile and TV',
        feat04: '8K+ active installations',
      },
      {
        id: 3,
        title: 'Form Builder CP',
        link: '#0',
        content: 'Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!',
        rating: '4.4',
        feat01: '23 hours on-demand video',
        feat02: '37 articles',
        feat03: 'Access on mobile and TV',
        feat04: '8K+ active installations',
      },
    ])

    return {
      sidebarOpen,
      items01,
    }
  },
}
</script>
<template>
  <!-- Page header -->
  <div class="mb-5 flex items-center justify-between">
    <!-- Title -->
    <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">监控设备管理</h1>

    <router-link to="/video/detail/0">
      <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
        <svg class="w-4 h-4 fill-current opacity-50 flex-shrink-0" viewBox="0 0 16 16">
          <path
            d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
          />
        </svg>
        <span class="hidden xs:block ml-2">Add Order</span>
      </button>
    </router-link>
  </div>
  <!-- Filters -->
  <div class="mb-4 border-b border-gray-200">
    <ul
      class="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar"
    >
      <li
        class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8"
      >
        <router-link class="text-indigo-500 whitespace-nowrap" to="#0">1号料场</router-link>
      </li>
      <li
        v-for="item in 5"
        :key="item"
        class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8"
      >
        <router-link class="text-gray-500 hover:text-gray-600 whitespace-nowrap" to="#0">
          {{ item + 1 }}号料场
        </router-link>
      </li>
    </ul>
  </div>

  <!-- Page content -->
  <div>
    <!-- Cards 1 (Trending apps) -->
    <div class="mt-8">
      <div class="grid grid-cols-12 gap-6">
        <router-link
          v-for="(item, i) in items01"
          :key="i"
          :to="`/video/video/${i}`"
          class="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-gray-200 overflow-hidden"
        >
          <div class="flex flex-col h-full">
            <!-- Image -->
            <img class="w-full" src="/camera.jpeg" width="286" height="160" :alt="item.title" />
            <!-- Card Content -->
            <div class="flex-grow flex flex-col p-5">
              <!-- Card body -->
              <div class="flex-grow">
                <!-- Header -->
                <header class="mb-2 flex justify-between items-center">
                  <h3 class="text-lg text-gray-800 font-semibold mb-1">前门西</h3>
                  <router-link class="ml-2 text-sm text-gray-300 hover:text-indigo-700 cursor-pointer" :to="`/video/detail/${i}`">
                    <cil-pencil />
                  </router-link>
                </header>
                <!-- Features list -->
                <ul class="text-sm space-y-2 mb-5">
                  <li class="flex items-center">
                    <svg class="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-3" viewBox="0 0 16 16">
                      <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                    </svg>
                    <div>192.168.0.12</div>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 fill-current text-gray-400 flex-shrink-0 mr-3" viewBox="0 0 16 16">
                      <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                    </svg>
                    <div>大华热成像PH2981.12</div>
                  </li>
                </ul>
              </div>
              <!-- Card footer -->
              <!-- <div>
                <router-link class="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" :to="item.link">Install</router-link>
              </div> -->
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
