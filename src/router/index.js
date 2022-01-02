import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import Landing from '../layouts/Landing.vue'
import LoggedIn from '../layouts/LoggedIn.vue'
import Simulation from '../layouts/Simulation.vue'

// Pages views
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Player from '../views/Player.vue'
import Facilitator from '../views/Facilitator.vue'
import Administrator from "../views/Administrator.vue"
import Authenticated from '../views/Authenticated.vue'

// Test vies
import Test from '../views/Test.vue'
import Test2 from '../views/Test2.vue'



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
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    children: [
        {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      }
    ] 
  },
  {
    path: '/loggedin',
    name: 'LoggedIn',
    component: LoggedIn,
    beforeEnter: requireAuth,
    children: [
        {
        path: '',
        name: 'Player',
        component: Player
      },
      {
        path: '/facilitator',
        name: 'Facilitator',
        component: Facilitator
      },
      {
        path: '/administrator',
        name: 'Administrator',
        component: Administrator
      }
    ] 
  },
  {
    path: '/simulation',
    name: 'Simulation',
    component: Simulation,
    beforeEnter: requireAuth,
    children: [
      {
        path: '',
        name: 'Authenticated',
        component: Authenticated
      }
      
    ]
  },

  /*{
    path: '/authenticated',
    name: 'Authenticated',
    component: Authenticated,
    beforeEnter: requireAuth
  } */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
