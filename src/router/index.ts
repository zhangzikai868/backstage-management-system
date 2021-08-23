import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/home",
    component: () => import("@/views/main/Main.vue")
  },
  {
    path: "/login",
    component: () => import("@/views/login/Login.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
