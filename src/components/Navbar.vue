<script setup>
import { RouterLink, useRoute } from "vue-router";
import logo from "@/assets/logo.png";

const isActiveLink = (routePath) => useRoute().path == routePath;
//TODO Minuto 1:48:51
/*
//Propiedades = ['px-3', 'py-2', 'text-white', 'bg-green-900', 'rounded-md', 'hover:bg-gray-900', 'hover:text-white']
*/
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div
          class="flex items-center justify-center flex-1 md:items-stretch md:justify-start"
        >
          <RouterLink class="flex items-center flex-shrink-0 mr-4" to="/">
            <img class="w-auto h-10" :src="logo" alt="Vue Jobs" />
            <span class="hidden ml-2 text-2xl font-bold text-white md:block">Trabajos de Vue</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/" :class="[isActiveLink('/') ? 'bg-green-900' : '', 'hover:bg-gray-900','px-3', 'py-2', 'text-white', 'rounded-md', 'hover:text-white']" >Inicio</RouterLink>
              <RouterLink to="/jobs" :class="[isActiveLink('/jobs') ? 'bg-green-900' : '', 'hover:bg-gray-900','px-3', 'py-2', 'text-white', 'rounded-md', 'hover:text-white']">Trabajos</RouterLink>
              <RouterLink to="/add/job" :class="[isActiveLink('/job/add') ? 'bg-green-900' : '', 'hover:bg-gray-900','px-3', 'py-2', 'text-white', 'rounded-md', 'hover:text-white']">Crear trabajo</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
