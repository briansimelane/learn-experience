
<template>

<PlayerNav />

  <div class="min-h-full">
    
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          Simulation: {{ currentSimulation.client }} - {{ currentSimulation.cohortName }}
        </h1>
        <h4 class="text-xl font-semibold text-gray-400">Team {{ teamIndex + 1 }}: {{ coName }}</h4>
      </div>
    </header>

    <main>
      <div class="max-w-7xl mx-auto py-1 sm:px-6 lg:px-8">
        
    <!-- Team Introduction -->
    <div>

      <div class="p-2 border-b border-gray-200 bg-gray-100">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Team Introduction
          </h3>
        </div>

        <div class="px-4 py-2 sm:px-0 flex flex-col md:flex-row">
          <div class="mr-5 pt-2 align-middle w-full md:w-24 text-gray-500">
            Team Name:
          </div>
          <div class="w-full md:w-1/5">
            <input type="text" class="textInputStyle" v-model.lazy="coName">
          </div>           
        </div>

        <div class="px-4 py-2 sm:px-0 flex flex-col md:flex-row">
          <div class="mr-5 pt-2 align-middle w-full md:w-24  text-gray-500">
            CEO Name:
          </div>
          <div class="w-full md:w-1/5">
            <input type="text" class="textInputStyle" v-model.lazy="CEOName">
          </div>           
        </div>
        
    </div>
        
    <!-- Marketing and Sales -->
    <div>
      
      <div class="p-2 mt-2 border-b border-gray-200 bg-gray-100">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Marketing & Sales
          </h3>
        </div>

        <div class="px-4 py-2 sm:px-0 flex flex-col md:flex-row">
          <div class="mr-0 md:pt-8 align-top w-full md:w-28 text-gray-500 ">
            Market Share:
          </div>
          <div class="w-full md:w-1/5 m-2">
          <label for="text" class="block text-sm font-semibold text-gray-700">{{ currentSimulation.Names.Products[0]}}</label>
            <input type="text" class="textInputStyle" v-model.lazy="prod1MS">
          </div>     

          <div class="w-full md:w-1/5 m-2">
          <label for="text" class="block text-sm font-semibold text-gray-700">{{ currentSimulation.Names.Products[1]}}</label>
            <input type="text" class="textInputStyle" v-model.lazy="prod2MS">
          </div> 

          <div class="w-full md:w-1/5 m-2">
          <label for="text" class="block text-sm font-semibold text-gray-700">{{ currentSimulation.Names.Products[2]}}</label>
            <input type="text" class="textInputStyle" v-model.lazy="prod3MS">
          </div>       
        </div>
        
    </div>
        

        
        <!-- End of holder -->
      </div>
    </main>
  </div>
</template>

<script>
// imports: composables
import getUser from '@/composables/getUser'

// imports: components and tools
import PlayerNav from '@/components/navBars/PlayerNav'
import { ref, watchEffect } from 'vue'

// imports: simulation components
import TextInput from '@/components/simComponents/InputText.vue'

// firebase imports
import { db } from "../firebase/config"
import { doc, onSnapshot, updateDoc } from "firebase/firestore"


export default {
  components: {
    PlayerNav, TextInput
  },
  props: ['id', 'teamIndex'],
 
  setup(props) {
    const simulationID = ref('test')
    const teamIndex = ref()

    simulationID.value = props.id
    teamIndex.value = parseInt(props.teamIndex)

    const currentSimulation = ref('')
    const currentTeamDecisions = ref('')


    // label holders to pass to database
    const labelCoName = ref('')
    const labelCEOName = ref('')
    const labelProd1MS = ref('')
    const labelProd2MS = ref('')
    const labelProd3MS = ref('')

    // constants to hold decisions
  const coName = ref('')
  const CEOName = ref('')
  const prod1MS = ref('')
  const prod2MS = ref('')
  const prod3MS = ref('')

  // get simulation (single) data from firestore
    const docRef = doc(db, 'simulations', props.id)

    onSnapshot(docRef, (doc) => {
       currentSimulation.value = doc.data()

      if(currentSimulation.value) {
        currentTeamDecisions.value = currentSimulation.value.Decisions

        switch(teamIndex.value){
          case 0:
            // labels for variables to pass to firestore
            labelCoName.value = "Decisions.Team1.CoName"
            labelCEOName.value = "Decisions.Team1.CEOName"
            labelProd1MS.value = "Decisions.Team1.ProductMarketShare[0]"
            labelProd2MS.value = "Decisions.Team1.ProductMarketShare[1]"
            labelProd3MS.value = "Decisions.Team1.ProductMarketShare[2]"


            //values of items to pass
            coName.value = currentTeamDecisions.value.Team1.CoName 
            CEOName.value = currentTeamDecisions.value.Team1.CEOName
            prod1MS.value = Decisions.Team1.ProductMarketShare[0]
            prod2MS.value = Decisions.Team1.ProductMarketShare[1]
            prod3MS.value = Decisions.Team1.ProductMarketShare[2]
            
            break
          case 1:
            coName.value = currentTeamDecisions.value.Team2.CoName 
            labelCoName.value = "Decisions.Team2.CoName"
        }
         
      }
      })
    
    const { user } = getUser()

    

  
  watchEffect(() => {
    console.log('Team name: ', coName.value)
    console.log('CEO name: ', CEOName.value)
  /*  updateDoc(docRef, {
      [labelCoName.value]: coName.value
    })*/

    setTimeout(() => {
      updateDoc(docRef, {
      [labelCoName.value]: coName.value,
      [labelCEOName.value]: CEOName.value,
      [labelProd1MS.value]: prod1MS.value
  // -> logs 1
      }, 1000)
    })
  })

 /*     switch(teamIndex.value) {
      case 0:
        coName.value = currentSimulation.value.Decisions.0.CoName
        CEOName.value = currentSimulation.value.Decisions.0.CEOName
        break
      case 1:
        coName.value = currentSimulation.value.Decisions.1.CoName
        CEOName.value = currentSimulation.value.Decisions.1.CEOName
        break
      case 2:
        coName.value = currentSimulation.value.Decisions.2.CoName
        CEOName.value = currentSimulation.value.Decisions.2.CEOName
        break
      case 3:
        coName.value = currentSimulation.value.Decisions.3.CoName
        CEOName.value = currentSimulation.value.Decisions.3.CEOName
        break
      case 4:
        coName.value = currentSimulation.value.Decisions.4.CoName
        CEOName.value = currentSimulation.value.Decisions.4.CEOName
        break
      case 5:
        coName.value = currentSimulation.value.Decisions.5.CoName
        CEOName.value = currentSimulation.value.Decisions.5.CEOName
        break
      case 6:
        coName.value = currentSimulation.value.Decisions.6.CoName
        CEOName.value = currentSimulation.value.Decisions.6.CEOName
        break
      case 7:
        coName.value = currentSimulation.value.Decisions.7.CoName
        CEOName.value = currentSimulation.value.Decisions.7.CEOName
        break
      case 8:
        coName.value = currentSimulation.value.Decisions.8.CoName
        CEOName.value = currentSimulation.value.Decisions.8.CEOName
        break
      case 9:
        coName.value = currentSimulation.value.Decisions.9.CoName
        CEOName.value = currentSimulation.value.Decisions.9.CEOName 
    } 
    })

const setCurrentTeamSetup = () => {
    console.log("from setupFunction: ", currentSimulation.value.Decisions.Team1.CoName)
}

setCurrentTeamSetup()*/
 
    return {
      simulationID,  currentSimulation, teamIndex, currentTeamDecisions,
      coName, CEOName, prod1MS, prod2MS, prod3MS
    }
  },
 }

</script>