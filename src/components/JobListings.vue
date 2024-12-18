<script setup>
import JobCard from "@/components/JobCard.vue";
import JobData from "@/jobs.json";
import { ref } from "vue";
const jobs = ref(JobData);

defineProps({
  limit: {
    type: Number,
  },
});
</script>
<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Buscar trabajos
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <JobCard
        v-for="job in jobs.slice(0, limit || jobs.length)"
        :key="job.id"
        :job="job"
      />
    </div>
    <!-- Aqui va el componente de JobCard  -->
  </section>
</template>
