<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
import Alljobs from "@/components/Alljobs.vue";
</script>

<template>
  <Navbar />
  <Hero />
  <HomeCards />
  <JobListings :limit="3" />
  <Alljobs />
</template>
