import { createRouter, createWebHashHistory } from "vue-router";
import Index from "src/pages/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "index",
    },
    {
      path: "/index",
      name: "index",
      component: Index,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("src/pages/login.vue"),
    },
  ],
});

export default router;
