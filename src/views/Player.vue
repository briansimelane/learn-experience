
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
    <div class="max-w-md w-full space-y-8">
      <div>
        
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Which team are you in?
        </h2>

        <h4 class="mt-2 text-center text-1xl font-semibold italic text-red-600">
          (Note you cannot change this choice later)
        </h4>
        
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="joinSimulation(simCode)">
        
        <Listbox as="div" v-model="numTeams">
    <ListboxLabel class="block text-sm font-medium text-gray-700">
      Select your team number
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm">
        <span class="flex items-center">
          <span class="ml-1 block truncate">{{ numTeams.name }}</span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="team in teams" :key="team.id" :value="team" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-green-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-1 block truncate']">
                  {{ team.name }}
                </span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-green-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
           Join your team
          </button>
        </div>
        <div>Sim ID: {{ activeSim }} <br>
        Sim Name: {{ currentSimulation.cohortName }} <br>
        Number of teams: {{ currentSimulation.teams }}</div>
        

        <div> {{ newTeams }}</div>
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

    const simCode = ref('')
    const activeSim = ref('')
    const router = useRouter()
    const currentSimulation = ref('')
    const simCodeError = ref('')
    const showJoinSim = ref(true)
    const showJoinTeam = ref (false)

    const joinSimulation = async (simID) => {
      // get simulation (single) data from firestore
      const docRef = doc(db, 'simulations', simID)

     onSnapshot(docRef, (doc) => {   
         currentSimulation.value = doc.data()

      if(currentSimulation.value) {
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

    
      
     // router.push ({ name: 'Simulation', params: {id: simID }})
     // console.log('Simulation joined', simID );
      

      //simCode.value = ''
    }


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

const newTeams = new Array()

const setupTeams = () => {
  for(i=0; i <= 5; i++ ){
    newTeams.push(teams[i])

    return newTeams
  }
}

    return {
      simCode, joinSimulation, simCodeError, showJoinSim, showJoinTeam, currentSimulation, activeSim, teams, numTeams,
      newTeams
    }
  },
}
</script>