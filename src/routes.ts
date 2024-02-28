// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/pages/createacc'

const routes: RouteRecordRaw[] = [{ path: '/Login', component: Login }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
