<script setup>
import { RouterLink } from "vue-router";
import logo from "@/assets/logo.png";
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div
          class="flex items-center justify-center flex-1 md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex items-center flex-shrink-0 mr-4" to="/">
            <img class="w-auto h-10" :src="logo" alt="Vue Jobs" />
            <span class="hidden ml-2 text-2xl font-bold text-white md:block"
             >Trabajos de Vue</span
             >
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/" class="px-3 py-2 text-white bg-green-900 rounded-md hover:bg-gray-900 hover:text-white" >Inicio</RouterLink>
              <RouterLink to="/jobs" class="px-3 py-2 text-white rounded-md hover:bg-green-900 hover:text-white" >Trabajos</RouterLink>
              <RouterLink to="/job/add" class="px-3 py-2 text-white rounded-md hover:bg-green-900 hover:text-white" >Crear trabajo</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
