import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    // redirect:'/home',
    component:()=>import('@/components/Layout/index.vue'),
    children:[
      {
        path:'',
        component:()=>import('@/views/home/index.vue')
      },
      {
        path:'/category/:id',
        component:()=>import('@/views/category/index.vue'),
      },
      {
        path:'/category/sub/:id',
        component:()=>import('@/views/category/category-sub/index.vue'),
      }
    ]
   },
   {
    path:'/login',
    component:()=>import('@/views/login.vue')
   }
  ],
  // 路由行为配置项，每次跳转路由时置顶
  scrollBehavior(){
    return{
      top:0
    }
  }
})

export default router
