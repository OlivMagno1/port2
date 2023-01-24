import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "intro",
    component: () => import("../views/IntroView.vue"),
  },
  {
    path: "/knowledge",
    name: "knowledge",
    component: () => import("../views/KnowledgesView.vue"),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("../views/PortfolioView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
