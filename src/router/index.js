import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/.well-known/apple-app-site-association",
      name: "WellKnown",
      component: () => import("@/views/well-known.vue"),
    },
  ],
});

export default router;