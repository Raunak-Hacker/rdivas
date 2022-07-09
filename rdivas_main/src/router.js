import { createRouter, createWebHistory  } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      alias: "/home",
    },
    {
      path: "/tops",
      component: () => import("./pages/TopsPage.vue"),
    },
    {
      path: "/kurtis",
      component: () => import("./pages/KurtisPage.vue"),
    },
    {
      path: "/track-suits",
      component: () => import("./pages/TrackSuitsPage.vue"),
    },
    {
      path: "/sarees",
      component: () => import("./pages/SareesPage.vue"),
    },
    {
        path: "/dresses",
        component: () => import("./pages/DressesPage.vue"),
    },
    {
        path: "/product/:id",
        component: () => import("./pages/ProductPage.vue"),
    }
  ],
});

export default router;
