//TODO investigar porque solo acepta index.js como nombre de archivo
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import AddJobView from "@/views/AddJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/jobs", name: "jobs", component: JobsView },
    { path: "/add/job", name: "add-job", component: AddJobView },
  ],
});

export default router;
