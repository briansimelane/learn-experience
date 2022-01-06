<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <router-link to="/"><img class="mx-auto h-20 w-auto" src="@/assets/logo.png" alt="LearningSims Logo" /></router-link>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register to get an account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or if you have an account: 
          {{ ' ' }}
          <router-link to="/login" class="font-medium text-green-600 hover:text-green-500">
            log in instead
          </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="registerUser">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Full name</label>
            <input id="name" name="email" type="text" autocomplete="name" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Full name" v-model="name" />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" v-model="email" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" v-model="password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-green-500 group-hover:text-green-400" aria-hidden="true" />
            </span>
            Register
          </button>
        </div>
        <div v-if="error">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/solid'
import { ref } from "vue";
import { useRouter } from "vue-router";
import useSignup from "@/composables/useSignup";
import { useStore } from 'vuex'

// firebase imports
import { auth } from '../firebase/config'
import { updateProfile } from "firebase/auth";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

export default {
  components: {
    LockClosedIcon,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const name = ref("")

    const store = useStore()

    const { signup, error } = useSignup();
    const router = useRouter();

    const registerUser = async () => {

      try { 
        console.log(email.value, password.value);
        await signup(email.value, password.value, name.value);

        setTimeout(() => {router.push("/loggedin")}, 1000)

      } catch (err) {
        console.log (err.message)
      }
      


   /*   if (!error.value) {
        setTimeout(() => {router.push("/loggedin")}, 1000)
        
      } */
    }
    return {
      email,
      password,
      name,
      registerUser, error
    }
  }
}
</script>