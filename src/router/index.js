import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Authenticated from '../views/Authenticated.vue'

// firebase imports
import { auth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if(!user) {
    //redirect them
    next({name: 'Home'})
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/authenticated',
    name: 'Authenticated',
    component: Authenticated,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
