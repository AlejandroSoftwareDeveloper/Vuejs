<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import ErrorMessage from '@/components/ErrorMessage.vue';
import InputBlock from '@/components/formcomponent/InputBlock.vue';
import SubmitButton from '@/components/formcomponent/SubmitButton.vue';

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      name: z.string({ required_error: "El campo nombre es requerido" })
        .nonempty({ message: "El campo nombre es requerido" })
        .min(3, { message: "El campo nombre debe contener al menos tres caracter." })
    }),
  ),
});

const [name, nameAttrs] = defineField('name');
name.value = "Valor inicial"

const saveData = handleSubmit(values => {
  console.log(values.name);
})

</script>

<template>
  <section class="bg-green-50">
    <div class="container max-w-2xl py-24 m-auto">
      <div class="px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0">
        <form @submit="saveData">
          <h2 class="mb-6 text-3xl font-semibold text-center">Adicionar trabajo</h2>
          <InputBlock labeltext="Nombre">
            <input type="text" id="name" name="name" class="w-full px-3 py-2 mb-2 border rounded "
              placeholder="Nombre de usuario" v-model="name" />
            <template v-slot:error>
              <ErrorMessage :message="errors.name" />
            </template>
          </InputBlock>
          <SubmitButton>Validar Trabajo</SubmitButton>
        </form>
      </div>
    </div>
  </section>
</template>
