import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/privacy",
      name: "PrivacyPolicy",
      component: () => import("@/views/Privacy.vue"),
    },
  ],
});

export default router;