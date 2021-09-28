import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('@/pages/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'homepage',
        component: () => import('@/pages/HomePage.vue'),
        
      },
      {
        path: '/catalog/:name',
        name: 'catalog',
        component: () => import('@/pages/CatalogPage.vue'),
      },
      {
        path: '/catalog/:name/:id',
        name: 'productPage',
        component: () => import('@/pages/ProductPage.vue'),
      },
      {
        path: '/error/404',
        name: 'error',
        component: () => import('@/pages/Error404.vue'),
      },
      
    ],
  },
  {
    path: '*',
    redirect: {name: 'error'},    
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

export default router
