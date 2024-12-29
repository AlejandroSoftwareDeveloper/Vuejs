//TODO investigar porque solo acepta index.js como nombre de archivo
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";
import ValidationView from "@/views/ValidationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/jobs", name: "jobs", component: JobsView },
    { path: "/add/job", name: "add-job", component: AddJobView },
    { path: "/edit/job/:id", name: "edit-job", component: EditJobView },
    { path: "/jobs/:id", name: "job", component: JobView },
    { path: "/validation", name: "validation", component: ValidationView },
    { path: "/:catchAll(.*)", name: "not-found", component: NotFoundView },
  ],
});

export default router;
