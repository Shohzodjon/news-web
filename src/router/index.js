import { createRouter, createWebHistory } from "vue-router";
import MainP from "@/pages/MainP.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainP,
    },
  ],
});

export default router;
