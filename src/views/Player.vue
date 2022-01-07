
<template>

<PlayerNav />


<div class="min-h-full">
    
    
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          Play
        </h1>
      </div>
    </header>
    
    <main>
      <div class="max-w-7xl mx-auto py-1 sm:px-6 lg:px-8">
        
        <!-- Replace with your content -->
      <!-- from Tailwind UI -->

<div class="min-h-full flex items-center justify-center py-1 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Join a simulation here
        </h2>
        
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="joinSimulation(simCode)">
        
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <p class="block text-sm font-medium text-gray-700">
              Enter the simulation code
            </p>
            <label for="clientName" class="sr-only">Simulation code</label>
            <input  name="clientName" type="text" autocomplete="clientName" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Simulation Code" v-model="simCode" />
          </div>
          
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
           Join the simulation
          </button>
        </div>
      </form>
    </div>
  </div>




<!-- end of tailwind UI -->
      </div>
    </main>
  </div>


</template>

<script>
// components imports
import PlayerNav from '@/components/navBars/PlayerNav'

// vue utilities imports
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'


export default {
  components: {
    PlayerNav
  },
  setup() {

    const simCode = ref('')
    const router = useRouter()

    const joinSimulation = (simID) => {
      router.push ({ name: 'Simulation', params: {id: simID }})
      console.log('Simulation joined', simID );
      

      simCode.value = ''
    }


    return {
      simCode, joinSimulation
    }
  },
}
</script>