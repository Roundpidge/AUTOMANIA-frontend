import { createRouter, createWebHistory } from 'vue-router' 

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),

 routes: [

 {
 path: '/',
 name: 'home',
 component: () => import('../views/home.vue'), 
 },

 {
 path: '/about',
 name: 'about',
 component: () => import('../views/about.vue'), 
 },

{

 path: '/:pathMatch(.*)*',
 name: 'NotFound',
 component: () => import('../views/notFound.vue')
 },

 ],
})

export default router 
