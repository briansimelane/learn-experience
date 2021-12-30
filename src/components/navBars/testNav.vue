<template>
  <div class="bg-green-100">
      <ul class="text-green-800">
          <li class="inline-block m-2 p-1 w-max hover:bg-green-800 hover:text-white hover:font-bold hover:rounded-lg"><router-link to="/">Home</router-link></li>
          <li class="inline-block m-2 p-1 w-max hover:bg-green-800 hover:text-white hover:font-bold hover:rounded-lg"><router-link to="/login">Login</router-link></li>
          <li class="inline-block m-2 p-1 w-max hover:bg-green-800 hover:text-white hover:font-bold hover:rounded-lg"><router-link to="/register">Register</router-link></li>
          <li class="inline-block m-2 p-1 w-max  hover:bg-green-800 hover:text-white hover:font-bold hover:rounded-lg"><router-link to="/loggedIn">Player</router-link></li>
          <li class="inline-block m-2 p-1 w-max  hover:bg-green-800 hover:text-white hover:font-bold hover:rounded-lg"><router-link to="/facilitator">Facilitator</router-link></li>
          <li class="inline-block m-2 p-1 w-max  hover:bg-green-800 hover:text-white hover:font-bold hover:rounded-lg"><router-link to="/administrator">Administrator</router-link></li>
          <li class="inline-block m-2 p-1 w-max hover:bg-green-800 hover:text-white hover:font-bold hover:rounded-lg"><router-link to="/simulation">Simulation</router-link></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>