
<template>

<PlayerNav />

  <div class="min-h-full">
    
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          Simulation: {{ currentSimulation.client }} - {{ currentSimulation.cohortName }}
        </h1>
      </div>
    </header>

    <main>
      <div class="max-w-7xl mx-auto py-1 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-1 sm:px-0">

          ID passed: {{ simulationID }} <br>
          <p>{{ currentSimulation.cohortName }}</p>
          
        </div>

        <div class="px-4 py-1 sm:px-0">

          Test Data from JSON <br>
           Last updated: {{ currentSimulation.SimulationIdentifiers.lastUpdate }} <br>
          <p>Sim Name: {{ currentSimulation.SimulationIdentifiers.simName }}</p>
          <p>Product names: {{ currentSimulation.Names.Products[0]}} | {{ currentSimulation.Names.Products[1]}} | {{ currentSimulation.Names.Products[2]}}</p>


          
          <p v-for="product in currentSimulation.Names.Products" :key="product">{{ product }}</p>
           
        </div>


        <div>
          <SimulationHome />
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
// imports: composables
import getUser from '@/composables/getUser'

// imports: components and tools
import PlayerNav from '@/components/navBars/PlayerNav'
import { ref } from 'vue'

// imports: simulation components
import SimulationHome from '@/views/simulation/home.vue'

// firebase imports
import { db } from "../firebase/config"
import { doc, onSnapshot } from "firebase/firestore"


export default {
  components: {
    PlayerNav, SimulationHome
  },
  props: ['id'],
  setup(props) {
    const simulationID = ref('test')
    simulationID.value = props.id

  const currentSimulation = ref('')
  const { user } = getUser()
  
// get simulation (single) data from firestore
  const docRef = doc(db, 'simulations', props.id)

  onSnapshot(docRef, (doc) => {
    currentSimulation.value = doc.data()
  })
const testContent = () => {
  console.log(docRef)
}

testContent()
 
    return {
      simulationID,  currentSimulation
    }
  },
}
</script>