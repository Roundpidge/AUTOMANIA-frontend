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
 path: '/starter',
 name: 'about',
 component: () => import('../views/PickAStarter.vue'), 
 },

{

 path: '/world',
 name: 'world',
 component: () => import('../views/World.vue')
 },


{

 path: '/:pathMatch(.*)*',
 name: 'NotFound',
 component: () => import('../views/notFound.vue')
 },


 ],
})

export default router 
