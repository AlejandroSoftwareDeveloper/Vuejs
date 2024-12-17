<script setup>
  import { ref,onMounted } from 'vue';
        const nombre = ref("Alejandro");
        const edad = ref(39);
        const estatus = ref('active');
        const tasks = ref([])
        const listadenombres = ref([
            {
            nombre:"Alejandro",
            age:39,
          },
            {
            nombre:"Javier",
            age:36,
          },
            {
            nombre:"Ana",
            age:38,
          },
            {
            nombre:"Guille",
            age:39,
          },
        ]);
        // const toogleStatus = () => {
        //   let st = estatus.value
        //   estatus.value = st === 'active' ? 'inactive' : st === 'inactive' ? 'pending' : 'active' 
        // }
        const addUser = () => {
          if(nombre.value.trim() !== '' && edad.value > 0)
           listadenombres.value.push({nombre:nombre.value,age:edad.value}) 
          nombre.value = ''
          edad.value = ''
        }

        const borrarUsuario = (idx) => {
           listadenombres.value.splice(idx,1)
        }


        onMounted(async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            tasks.value = data.map(task=> task.title) 
          } catch (error) {
            console.log("Error");
          }
        })

</script>

<template>
 <form @submit.prevent="addUser">
  <label for="name">Nombre de usuario</label>
 <input type="text" id="name" name="name" v-model="nombre"/><br>
 <span v-if="nombre === ''">La edad no puede ser 0</span>
  <label for="age">Edad del usuario</label>
 <input type="text" id="age" name="age" v-model="edad"/>
 <br>
 <span v-if="edad === 0">La edad no puede ser 0</span>
 <br>
 <button type="submit">Guardar usuario</button>
 </form> 
 <br>
  <h1>Lista de usuarios</h1>
  <ul>
    <li v-for="(name,index) in listadenombres" :key="name">
    <p>Usuario: {{ name.nombre }}</p>
    <p>Edad: {{ name.age }}</p>
    <br>
    <button @click="borrarUsuario(index)">x</button>
  </li>
  </ul>

  <h1>Tareas</h1>
  <ul>
    <li v-for="task in tasks">{{ task }}</li>
  </ul>

</template>

<style scoped>

  span {
    color:red;
  } 
</style>