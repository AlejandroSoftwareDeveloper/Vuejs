<script setup>
import Card from "@/components/Card.vue";
import { RouterLink } from "vue-router";
defineProps({
  route: {
    type:String,
    default:"jobs",
  },
})

</script>
<template>
  <section class="py-4">
    <div class="m-auto container-xl lg:container">
      <div class="grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2">
        <Card>
          <h2 class="text-2xl font-bold">Para desarrolladores</h2>
          <p class="mt-2 mb-4">
            Busque trabajo para comenzar su carrera hoy.
          </p>
          <RouterLink :to="`/${route}`" class="inline-block px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700">Buscar trabajo</RouterLink>
        </Card>
        <Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">Para contratistas</h2>
          <p class="mt-2 mb-4">
             Liste sus trabajos para encontrar el desarrollador deseado. 
          </p>
          <RouterLink :to="`/${route}/add`" class="inline-block px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">Inserte un nuevo trabajo</RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
