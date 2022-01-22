
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

<!-- Join the Simulation -->
<div class="min-h-full flex items-center justify-center py-1 px-4 sm:px-6 lg:px-8" v-if="showJoinSim">
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
        <div  class="text-center italic text-red-600 mt-1">{{ simCodeError }}</div>
      </form>
    </div>
  </div>


<!-- Select a team -->
<div class="min-h-full flex items-center justify-center py-1 px-4 sm:px-6 lg:px-8" v-if="showJoinTeam">
    <div class="max-w-2xl w-full space-y-8">
      <div>
        
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Which team are you in?
        </h2>

        <h4 class="mt-2 text-center text-1xl font-semibold italic text-red-600">
          (Note you cannot change this choice later)
        </h4>
        
      </div>

      <div>
        <p class="block text-sm font-medium text-gray-700">
          Select your team number
        </p>
        <div  class="flex flex-row flex-wrap">
          <div class="flex justify-center w-1/4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 py-2 px-4 mx-1 my-1 cursor-pointer" v-for="team in newTeams" :key="team.id" :value="team.id" @click="joinTeam(team, activeSim)">
              {{ team.name }}     
      </div>
        </div>
      
        
      </div>

      <div>Sim ID: {{ activeSim }} <br>
        Sim Name: {{ currentSimulation.cohortName }} <br>
        Number of teams: {{ currentSimulation.teams }}</div>


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

// firebase imports
import { db } from "../firebase/config"
import { doc, onSnapshot } from "firebase/firestore"

// tailwind imports
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'


export default {
  components: {
    PlayerNav,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon
  },
  setup() {
    let newTeams = ref()
    const simCode = ref('')
    const activeSim = ref('')
    const router = useRouter()
    const currentSimulation = ref('')
    const simCodeError = ref('')
    const showJoinSim = ref(true)
    const showJoinTeam = ref (false)

    const teams = [
  {
    id: 0,
    name: 'Team 1',
  },
  {
    id: 1,
    name: 'Team 2',
  },
  {
    id: 2,
    name: 'Team 3',
  },
  {
    id: 3,
    name: 'Team 4',  
  },
  {
    id: 4,
    name: 'Team 5'
  },
  {
    id: 5,
    name: 'Team 6'
  },
  {
    id: 6,
    name: 'Team 7'
  },
  {
    id: 7,
    name: 'Team 8'
  },
  {
    id: 8,
    name: 'Team 9'
  },
  {
    id: 9,
    name: 'Team 10'
  }
]

const numTeams = ref(teams[0])


    const joinSimulation = async (simID) => {
      // get simulation (single) data from firestore
      const docRef = doc(db, 'simulations', simID)

     onSnapshot(docRef, (doc) => {   
         currentSimulation.value = doc.data()

      if(currentSimulation.value) {
       console.log("number of teams index: ", currentSimulation.value.numTeamsIndexMax)

      newTeams.value = new Array() //currentSimulation.value.numTeamsIndexMax + 1
      
      let i = 0
        for(i=0; i <= currentSimulation.value.numTeamsIndexMax; i++ ){
        newTeams.value.push(teams[i])
        }
      
      simCodeError.value = ''
      showJoinSim.value = false
      showJoinTeam.value = true
      activeSim.value = simCode.value
      simCode.value = ''
      console.log(currentSimulation.value)
    } else {
      simCodeError.value = "Please correct the simulation code."
    }


      })


    }

    const joinTeam = (team, activeSim) => {
      console.log("Team index", team.id)
      console.log("Simulation ID:", activeSim)

      // ADD player to players and teams
      
      router.push ({ name: 'Simulation', params: {id: activeSim,
      teamIndex: team.id } })
    }



    return {
      simCode, joinSimulation, joinTeam, simCodeError, showJoinSim, showJoinTeam, currentSimulation, activeSim, teams, numTeams,
      newTeams
    }
  },
}
</script>