
<template>
<Modal :modalActive="modalActive" @close="toggleModal">
  <h1>Are you sure you want to delete the simulation /game?</h1>
</Modal>

<PlayerNav />

  <div class="min-h-full">
    
    
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          Facilitators
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
          Create a new simulation for a cohort
        </h2>
        
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="createSimulation">
        
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="clientName" class="sr-only">Client Name</label>
            <input  name="clientName" type="text" autocomplete="clientName" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Client name" v-model="clientName" />
          </div>
          <div>
            <label for="cohortName" class="sr-only">Cohort or group name</label>
            <input id="cohortName" name="cohortName" type="text" autocomplete="cohortName" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Cohort or group name" v-model="cohortName" />
          </div>
        </div>
  <br>

    <Listbox as="div" v-model="numTeams">
    <ListboxLabel class="block text-sm font-medium text-gray-700">
      Number of teams
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
           Create simulation
          </button>
        </div>
      </form>
    </div>
  </div>



<!-- Table to display simulations -->
<div class="flex flex-col mt-5">
  <h2 class=" text-2xl text-gray-900 mb-2">
          Your created simulations and games
        </h2>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cohort
                </th>
               
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teams
                </th>
                
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="simulation in simulations" :key="simulation.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ simulation.client }}
                      </div>
                      <div class="text-sm text-gray-500">
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ simulation.cohortName }}</div>
                  
                </td>
                
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ simulation.dateCreated }}</div>
                  
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ simulation.numTeams }}</div>
                  
                </td>

                <td class="px-6 py-4 whitespace-nowrap" v-if="simulation.facilitatorID === user.uid">
                  <div ><span class="text-white bg-green-600 hover:bg-gray-500  rounded-md py-2 px-3 cursor-pointer"  >Manage</span>

                  <span class="text-white bg-red-600 hover:bg-gray-500  rounded-md md:ml-3 py-2 px-3 cursor-pointer"  @click="toggleModal">Delete</span>
                  </div>
                </td>


              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


<!-- End of table to display simulations -->
<!-- end of tailwind UI -->
      </div>
    </main>
  </div>
</template>

<script>
// imports: composables
import getCollection from "@/composables/getCollection"
import getUser from '@/composables/getUser'

// Compoment imports
import PlayerNav from '@/components/navBars/PlayerNav'
import { ref } from 'vue'
import Modal from '@/components/modal.vue'

// firebase imports
import { db } from "../firebase/config"
import { addDoc, collection } from "firebase/firestore"


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
    SelectorIcon,
    Modal
  },
  setup() {
  const { user } = getUser()
  
  const { documents: simulations } = getCollection("simulations")

  const modalActive = ref(false)
  // function to toggle modal
  const toggleModal = () => {
    modalActive.value = !modalActive.value
  }

  const clientName = ref('')
  const cohortName = ref('')
  let dateCreated = new Date().toLocaleString() 


  const teams = [
  {
    id: 1,
    name: '2 teams',
  },
  {
    id: 2,
    name: '3 teams',
  },
  {
    id: 3,
    name: '4 teams',
  },
  {
    id: 4,
    name: '5 teams',  
  },
  {
    id: 5,
    name: '6 teams'
  },
  {
    id: 6,
    name: '7 teams'
  },
  {
    id: 7,
    name: '8 teams'
  },
  {
    id: 8,
    name: '9 teams'
  },
  {
    id: 9,
    name: '10 teams'
  }
]

const numTeams = ref(teams[0])


 const createSimulation = async () => {
   const colRef = collection(db, "simulations");

   await addDoc(colRef, {
     facilitatorID: user.value.uid,
     facilitatorName: user.value.displayName,
     client: clientName.value,
     cohortName: cohortName.value,
     dateCreated: dateCreated,
     numTeams: numTeams.value.name
   })

   // reset values
   clientName.value = ''
   cohortName.value = ''
   numTeams.value = teams[0]

  alert('Simulation created')
    console.log("Create simulation triggered")
  }

    return {
      user, simulations, createSimulation, clientName, cohortName, teams, numTeams, modalActive, toggleModal
    }
  },
}
</script>