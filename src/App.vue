<template>
  <div>
    <div class="pb-32 bg-gray-800">
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="border-b border-gray-700">
            <div class="flex items-center justify-between h-16 px-4 sm:px-0">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div>
                  <div class="flex items-baseline ml-10 space-x-4">
                    <router-link
                      to="/"
                      class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                      >Home</router-link
                    >

                    <router-link
                      to="/favourites"
                      class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                      >Favourites</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <header class="py-10">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white">
            {{ $route.name }}
          </h1>
        </div>
      </header>
    </div>

    <main class="-mt-32">
      <div class="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="px-5 py-6 bg-white rounded-lg shadow sm:px-6">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";


// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "App",
  components: {},
});
</script>
