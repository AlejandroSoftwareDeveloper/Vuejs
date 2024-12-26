<script setup>
import { ref, computed } from "vue"

const props = defineProps({
  job:Object,
});

let showFullDescripction = ref(false);

//TODO me quede aqui  [1:27:45]
let truncateDescription = computed(()=>{
  let dsc = props.job.description
  if (!showFullDescripction.value)
      dsc = dsc.substring(0,90) + " ..."
  return dsc;
})

let expandOrDecreaseDialog = computed(() => {
  showFullDescripction.value = !showFullDescripction.value;
});
</script>
<template>
  <div class="relative bg-white shadow-md rounded-xl" >
    <div class="p-4">
      <div class="mb-6">
        <div class="my-2 text-gray-600">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>
      <div class="mb-5" @mouseover="expandOrDecreaseDialog" @mouseleave="expandOrDecreaseDialog">{{ truncateDescription }}</div>
      <h3 class="mb-2 text-green-500">{{ job.salary }}</h3>
      <div class="mb-5 border border-gray-100"></div>
      <div class="flex flex-col justify-between mb-4 lg:flex-row">
        <div class="mb-3 text-orange-700">
          <i class="text-lg fa-solid fa-location-dot"></i>
          {{ job.location }}
        </div>
        <a :href="'/job/' + job.id" class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"> Leer mas</a>
      </div>
    </div>
  </div>
</template>
