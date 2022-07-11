import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      alias: "/home",
    },
    {
      path: "/:category/:id",
      component: () => import("./pages/TopsPage.vue"),
      props: true,
    },
    {
      path: "/product/:id",
      component: () => import("./pages/ProductPage.vue"),
      props: true,
    },
    {
      path: "/login",
      component: () => import("./pages/LoginPage.vue"),

    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
