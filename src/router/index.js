import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rotaciones from '../views/Rotaciones.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Rotaciones',
    name: 'Rotaciones',
    component: Rotaciones
  },
  {
    path: '/Material',
    name: 'Material',
    component: Material
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: NotFound,
	},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
