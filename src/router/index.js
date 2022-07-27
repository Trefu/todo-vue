import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "@/components/NotFound.vue"
import ScheduleView from "@/views/ScheduleView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/schedule/:userId",
      name: "schedule",
      //para tomar userId como prop de componente
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ScheduleView,
    },
    {
      path: "/done-tasks",
      name: "done-tasks",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DoneTasksView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
});

export default router;
