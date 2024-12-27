<script setup>
import BackButton from '@/components/BackButton.vue';
import { onMounted,ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const job = ref({});
const company = ref({});
let jobid = route.params.id;


onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobid}`)
    job.value = response.data;
    company.value = job.value.company;
    console.log(company.value);
  } catch(error){
    console.error("Error obteniendo el trabajo",error);
  }
})
</script>

<template>
<BackButton />
<section class="bg-green-50">
      <div class="container px-6 py-10 m-auto">
        <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-70/30">
          <main>
            <div class="p-6 text-center bg-white rounded-lg shadow-md md:text-left">
              <div class="mb-4 text-gray-500">{{ job.type }} </div>
              <h1 class="mb-4 text-3xl font-bold">{{ job.title }}</h1>
              <div class="flex justify-center mb-4 text-gray-500 align-middle md:justify-start">
                  <i class="mr-2 text-lg text-orange-700 pi pi-map-marker"></i>
                <p class="text-orange-700">{{ job.location }}</p>
              </div>
            </div>

            <div class="p-6 mt-6 bg-white rounded-lg shadow-md">
              <h3 class="mb-6 text-lg font-bold text-green-800">
                Descripcion del trabajo
              </h3>

              <p class="mb-4">
                {{ job.description }}
              </p>

              <h3 class="mb-2 text-lg font-bold text-green-800">Salario</h3>

              <p class="mb-4">{{ job.salary }}</p>
              <p class="mb-4">{{ company.name }}</p>
            </div>
          </main>

          <!-- Sidebar -->
          <aside>
            <!-- Company Info -->
            <div class="p-6 bg-white rounded-lg shadow-md">
              <h3 class="mb-6 text-xl font-bold">Informacion de la Compania</h3>

              <h2 class="text-2xl">{{ company.name }}</h2>

              <p class="my-2">
                {{ company.description }}
              </p>

              <hr class="my-4" />

              <h3 class="text-xl">Correo electronico:</h3>

              <p class="p-2 my-2 font-bold bg-green-100">
                {{ company.contactEmail }}
              </p>

              <h3 class="text-xl">Telefono de contacto:</h3>

              <p class="p-2 my-2 font-bold bg-green-100"> {{ company.contactPhone }}</p>
            </div>

            <div class="p-6 mt-6 bg-white rounded-lg shadow-md">
              <h3 class="mb-6 text-xl font-bold">Gestionar trabajo</h3>
              <RouterLink
                :to="`/jobs/edit/${job.id}`"
                class="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
                >Editar trabajo</RouterLink>
              <button class="block w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline">
                Borrar trabajo
              </button>
            </div>
          </aside>
        </div>
      </div>
  </section>
</template>