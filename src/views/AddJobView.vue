<script setup>
import * as z from 'zod';
import { useForm, useField  } from 'vee-validate';
import { toTypedSchema  } from '@vee-validate/zod';
import axios from 'axios'
import router from '@/router'
import { reactive } from 'vue'
import { useToast } from 'vue-toastification';
import HelperClass from '@/assets/js/Helperclass';
import ErrorMessage from '@/components/ErrorMessage.vue';
import SubmitButton from '@/components/formcomponent/SubmitButton.vue';
import InputBlock from '@/components/formcomponent/InputBlock.vue'; 

const hp = new HelperClass();
const salaries = hp.salaryoptions()
const types = hp.worktype()
const form = reactive(hp.getInitializedData())
const toast = useToast();

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z.object({

      title: z.string({required_error:"El campo Tipo de trabajo es requerido"})
      .nonempty({message:"El campo Tipo de trabajo no puede quedar vacio."})
      .min(5,{message:"El campo Tipo de trabajo debe contener al menos tres caracter."})
      .max(50,{message:"El campo Tipo de trabajo no debe contener mas de 50 caracteres."}),

       description: z.string({required_error:"El campo description es requerido"})
       .nonempty({message:"El campo descripcion no puede quedar vacio."})
       .min(20,{message:"El campo descripcion debe contener no menos de 20 caracteres."})
       .max(255,{message:"El campo descripcion no debe contener mas 255 caracteres."}),

       location: z.string({required_error:"El campo direccion es requerido"})
       .nonempty({message:"El campo descripcion no puede quedar vacio."})
       .min(10,{message:"El campo direccion de la empreza no debe contener menos de 10 caracteres."})
       .max(255,{message:"El campo titulo no debe contener mas de 255 caracteres."}),

      companyName: z.string({required_error:"El campo nombre de la compania es requerido"})
       .nonempty({message:"El campo nombre de la empresa no puede quedar vacio."})
      .min(5,{message:"El campo nombre de la empresa no debe contener menos de 5 caracteres."})
      .max(255,{message:"El campo nombre de la empresa no debe contener mas de 255 caracteres."}),

      companyDescription: z.string({required_error:"El campo descripcion de la compania es requerido"})
      .nonempty({message:"El campo descripcion de la compania no puede quedar vacio."})
      .min(5,{message:"El campo descripcion de la compania no debe contener menos de 5 caracteres."})
      .max(255,{message:"El campo descripcion de la compania no debe contener mas de 255 caracteres."}),

      companyContactEmail: z.string({required_error:"El campo correo electronico de la compania es requerido"})
      .nonempty({message:"El campo correo electronico de la compania no puede quedar vacio."})
      .email({message:"EL correo no es correcto"}),

      companyContactPhone: z.string({required_error:"El campo telefono de contacto de la compania es requerido."})
      .nonempty({message:"El campo telefono de la compania no puede quedar vacio."})
      .min(8,{message:"El campo telefono de la empresa no debe contener menos de 8 caracteres."})
      .max(255,{message:"El campo telefono de la empresa no debe contener mas de 255 caracteres."}),
    }),
  ),
});

const [ type, typeAttrs ] = defineField('name');
const [ title, titleAttrs ] = defineField('title');
const [ description, descriptionAttrs ] = defineField('description');
const [ salary, salaryAttrs ] = defineField('salary');
const [ location, locationAttrs ] = defineField('location');
const [ companyName, companyNameAttrs ] = defineField('companyName');
const [ companyDescription, companyDescriptionAttrs ] = defineField('companyDescription');
const [ companyContactEmail, companyContactEmailAttrs ] = defineField('companyContactEmail');
const [ companyContactPhone, companyContactPhoneAttrs ] = defineField('companyContactPhone');

type.value = "Tiempo-completo";
title.value =  "";
description.value =  "";
salary.value =  "Debajo de $500 mlc";
location.value =  "";
companyName.value = "";
companyDescription.value = "";
companyContactEmail.value = "";
companyContactPhone.value = "";

const saveData = handleSubmit(async (values) => {
  const newJob = hp.generateNewFiledData(values)
  console.log(newJob);
    try {
     const response = await axios.post('/api/jobs',newJob);
     toast.success("Se guardo correctamente la nueva oferta de trabajo.");
     router.push(`/jobs/${response.data.id}`);
    } catch(error){
    console.error("Error obteniendo el trabajo",error);
     toast.error("No se pudo guardar la oferta de trabajo.");
   }
  }
)
</script>

<template>
<section class="bg-green-50">
      <div class="container max-w-2xl py-24 m-auto">
        <div class="px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0">
          <form @submit.prevent="saveData">
            <h2 class="mb-6 text-3xl font-semibold text-center">Adicionar trabajo</h2>
            <InputBlock labeltext="Tipo de trabajo">
              <select id="type" name="type" class="w-full px-3 py-2 border rounded" required v-model="type">
                <option v-for="(opt,idx) in types" :key="idx" :value="opt.value">{{ opt.text }}</option>
              </select>
          </InputBlock>

          <InputBlock labeltext="Tipo de trabajos">
              <input type="text" id="name" name="name" class="w-full px-3 py-2 mb-2 border rounded " placeholder="Ejemplo: Desarrollador frontend" required v-model="title" />
                <template v-slot:error>
                  <ErrorMessage :message="errors.title"/>
                </template>
            </InputBlock>

            <InputBlock labeltext="Descripcion del trabajo">
              <textarea id="description" name="description" class="w-full px-3 py-2 border rounded" rows="4" placeholder="Adicione cualquier tarea, expectativas, requisitos, etc" v-model='description'></textarea>
                <template v-slot:error>
                  <ErrorMessage :message="errors.description"/>
                </template>
           </InputBlock>

            <InputBlock labeltext="Salario">
              <select id="salary" name="salary" class="w-full px-3 py-2 border rounded" required v-model="salary">
                <option v-for="(opt,idx) in salaries" :key="idx" :value="opt.value">{{ opt.text }}</option>
              </select>
           </InputBlock>

            <h3 class="mb-5 text-2xl">Informacion de la compania</h3>

            <InputBlock labeltext="Nombre de la compania"> 
              <input type="text" id="company" name="company" class="w-full px-3 py-2 border rounded" placeholder="Nombre de la compania" v-model="companyName" />
                <template v-slot:error>
                  <ErrorMessage :message="errors.companyName"/>
                </template>
            </InputBlock>
            <InputBlock labeltext="Direccion"> 
              <input type="text" id="location" name="location" class="w-full px-3 py-2 mb-2 border rounded" placeholder="Direccion de la compania" required v-model="location"/>
                <template v-slot:error>
                  <ErrorMessage :message="errors.location"/>
                </template>
            </InputBlock>

            <InputBlock labeltext="Descripcion de la compania"> 
              <textarea id="company_description" name="company_description" class="w-full px-3 py-2 border rounded" rows="4" placeholder="Que hace su compania" v-model="companyDescription"></textarea>
                <template v-slot:error>
                  <ErrorMessage :message="errors.companyDescription"/>
                </template>
            </InputBlock>

            <InputBlock labeltext="Email de la compania"> 
              <input type="email" id="contact_email" name="contact_email" class="w-full px-3 py-2 border rounded"  placeholder="Direccion de correo electronico para los solicitantes"  required  v-model="companyContactEmail" />
                <template v-slot:error>
                  <ErrorMessage :message="errors.companyContactEmail"/>
                </template>
            </InputBlock>

            <InputBlock labeltext="Telefono de la compania"> 
              <input type="tel" id="contact_phone" name="contact_phone" class="w-full px-3 py-2 border rounded" placeholder="Telefono para los solicitantes" v-model="companyContactPhone" />
                <template v-slot:error>
                  <ErrorMessage :message="errors.companyContactPhone"/>
                </template>
            </InputBlock>
            <SubmitButton>Guardar Trabajo</SubmitButton>
          </form>
        </div>
      </div>
    </section>
</template>
