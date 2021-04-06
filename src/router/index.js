import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
//import { auth } from '../firebase'
import firebase from "firebase/app"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
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
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  firebase.auth().onAuthStateChanged(user => {
    if (!user && requiresAuth){
      console.log("XD")
      next("/login")
    } else {
      next()
    }
  });
})

export default router
