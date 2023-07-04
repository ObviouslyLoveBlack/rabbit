import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    redirect:'/home',
    component:()=>import('@/components/Layout/index.vue'),
    children:[
      {
        path:'/home',
        component:()=>import('@/views/home/index.vue')
      },
      {
        path:'/category',
        component:()=>import('@/views/category/index.vue')
      }
    ]
   },
   {
    path:'/login',
    component:()=>import('@/views/login.vue')
   }
  ]
})

export default router
