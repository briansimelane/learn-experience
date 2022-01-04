<template>
<!--  <nav class="bg-gray-400 p-4 text-center">
    <p v-if="user">{{ user.email }}</p> - - -
    <router-link to="/">Home</router-link> | 
    <router-link to="" @click="handleLogout">Logout</router-link>
  </nav
  > -->
  

  <router-view/>


  
</template>

<script>

import getUser from '../src/composables/getUser'
import { useRouter } from "vue-router";
import { ref, watchEffect } from 'vue'




//firebase imports
import { auth } from '../src/firebase/config'
import { signOut } from 'firebase/auth'

export default {
  components: {  },

 setup(){
   const router = useRouter();

   const { user } = getUser()
   

   const handleLogout = () => {
     signOut(auth)
   }

 /*  watchEffect(() => {
     if(!user.value) {
       router.push('/')
     }
   }) */

   return {
     handleLogout, user
   }
 } 
}
</script>

<style>

</style>
