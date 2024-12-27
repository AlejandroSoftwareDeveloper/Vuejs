<script setup>
import JobCard from "@/components/JobCard.vue";
import { ref,onMounted } from "vue";
import axios from "axios";
// import JobData from "@/jobs.json";

//"http://localhost:5000/jobs" URL BASE

const jobs = ref([]);

defineProps({
  limit: {
    type: Number,
  },
});

onMounted(async () => {
  try {
    const response = await axios.get("/api/jobs")
    jobs.value = response.data;
  } catch(error){
    console.error("Error obteniendo lista de trabajos",error);
  }
})
</script>

<template>
  <section class="px-4 py-10 bg-blue-50">
    <div class="m-auto container-xl lg:container">
      <h2 class="mb-6 text-3xl font-bold text-center text-green-500">
        Buscar trabajos
      </h2>
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <JobCard
        v-for="job in jobs.slice(0, limit || jobs.length)"
        :key="job.id"
        :job="job"
      />
    </div>
  </section>
</template>
