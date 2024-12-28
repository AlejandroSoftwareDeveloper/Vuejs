<script setup>
import axios from 'axios'
import router from '@/router'
import { reactive,onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';

const form = reactive({
  type:"",
  title:"",
  description:"",
  salary:"",
  location:"",
  company:{
    name:"",
    description:"",
    contactEmail:"",
    contactPhone:"",
  },
})

const route = useRoute();
const toast = useToast();
const jobid = route.params.id;

onMounted(async () => {
     try{
     const response = await axios.get(`/api/jobs/${jobid}`);
      let tmp = response.data;
      form.type = tmp.type;
      form.title = tmp.title;
      form.description = tmp.description;
      form.salary = tmp.salary;
      form.location = tmp.location;
      form.company.name = tmp.company.name;
      form.company.description =  tmp.company.description;
      form.company.contactEmail = tmp.company.contactEmail;
      form.company.contactPhone = tmp.company.contactPhone;
   } catch(error){
      console.log("No se pudo cargar la informacion del trabajo con id " + jobid);
      toast.error("Error al cargar la informacion del trabajo.");
   }

})




const handleSubmit = async () => {
  const editJob = {
    type:form.type,
    title:form.title,
    description:form.description,
    salary:form.salary,
    location:form.location,
    company:{
      name:form.company.name,
      description:form.company.description,
      contactEmail:form.company.contactEmail,
      contactPhone:form.company.contactPhone,
    }
  }
  

  try {
     const response = await axios.put(`/api/jobs/${jobid}`,editJob);
     toast.success("Se edito correctamente la oferta de trabajo.");
     router.push(`/jobs/${response.data.id}`);
  } catch(error){
    console.error("Error obteniendo el trabajo",error);
     toast.error("No se pudo guardar la oferta de trabajo.");
  }
}

</script>

<template>
<section class="bg-green-50">
      <div class="container max-w-2xl py-24 m-auto">
        <div
          class="px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0"
        >
          <form @submit.prevent="handleSubmit">
            <h2 class="mb-6 text-3xl font-semibold text-center">Actualizar trabajo</h2>
            <div class="mb-4">
              <label for="type" class="block mb-2 font-bold text-gray-700"
                >Tipo de trabajo</label
              >
              <select
                id="type"
                name="type"
                class="w-full px-3 py-2 border rounded"
                required
                v-model="form.type"
              >
                <option value="Tiempo-completo">Tiempo completo</option>
                <option value="Medio-tiempo">Medio tiempo</option>
                <option value="Remoto">Remoto</option>
                <option value="Internado">Internado</option>
              </select>
            </div>
            <div class="mb-4">
                <label class="block mb-2 font-bold text-gray-700">Lista de tipos de trabajos</label>
                <input
                type="text"
                id="name"
                name="name"
                class="w-full px-3 py-2 mb-2 border rounded "
                placeholder="Ejemplo: Desarrollador frontend"
                required
                v-model="form.title"
                />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="block mb-2 font-bold text-gray-700"
                >Descripcion</label
              >
              <textarea
                id="description"
                name="description"
                class="w-full px-3 py-2 border rounded"
                rows="4"
                placeholder="Adicione cualquier tarea, expectativas, requisitos, etc"
                v-model='form.description'
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="type" class="block mb-2 font-bold text-gray-700"
                >Salario</label
              >
              <select
                id="salary"
                name="salary"
                class="w-full px-3 py-2 border rounded"
                required
                v-model="form.salary"
              >
                <option value="Debajo de $500 mlc">Debajo de $500 mlc</option>
                <option value="$500 mlc - $600 mlc">$500 mlc - $600 mlc</option>
                <option value="$600 mlc - $700 mlc">$600 mlc - $700 mlc</option>
                <option value="$700 mlc - $800 mlc">$700 mlc - $800 mlc</option>
                <option value="$800 mlc - $900 mlc">$800 mlc - $900 mlc</option>
                <option value="$900 mlc - $1000 mlc">$900 mlc - $1000 mlc</option>
                <option value="$1000 mlc - $1250 mlc">$1000 mlc - $1250 mlc</option>
                <option value="$1250 mlc - $1500 mlc">$1250 mlc - $1500 mlc</option>
                <option value="$1500 mlc - $1750 mlc">$1500 mlc - $1750 mlc</option>
                <option value="$1750 mlc - $2000 mlc">$1750 mlc - $2000 mlc</option>
                <option value="Mas de $2000 mlc">Mas de $2000 mlc</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="block mb-2 font-bold text-gray-700">
                Localizacion
              </label>
              <input
                type="text"
                id="location"
                name="location"
                class="w-full px-3 py-2 mb-2 border rounded"
                placeholder="Company Location"
                required
                v-model="form.location"
              />
            </div>

            <h3 class="mb-5 text-2xl">Informacion de la compania</h3>

            <div class="mb-4">
              <label for="company" class="block mb-2 font-bold text-gray-700"
                >nombre de la compania </label
              >
              <input
                type="text"
                id="company"
                name="company"
                class="w-full px-3 py-2 border rounded"
                placeholder="Company Name"
                v-model="form.company.name"
              />
            </div>

            <div class="mb-4">
              <label
                for="company_description"
                class="block mb-2 font-bold text-gray-700"
                >Descripcion de la compania</label
              >
              <textarea
                id="company_description"
                name="company_description"
                class="w-full px-3 py-2 border rounded"
                rows="4"
                placeholder="What does your company do?"
                v-model="form.company.description"
              ></textarea>
            </div>

            <div class="mb-4">
              <label
                for="contact_email"
                class="block mb-2 font-bold text-gray-700"
                >Email de la compania</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                class="w-full px-3 py-2 border rounded"
                placeholder="Email address for applicants"
                required
                v-model="form.company.contactEmail"
              />
            </div>
            <div class="mb-4">
              <label
                for="contact_phone"
                class="block mb-2 font-bold text-gray-700"
                >Telefono de la compania </label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                class="w-full px-3 py-2 border rounded"
                placeholder="Optional phone for applicants"
                v-model="form.company.contactPhone"
              />
            </div>

            <div>
              <button
                class="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Actualizar Trabajo
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
</template>
