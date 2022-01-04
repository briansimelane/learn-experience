
<template>

<PlayerNav />



  <div class="min-h-full">
    
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          Administrators
        </h1>
      </div>
    </header>

    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="container ml-10" v-if="user">
      <h1>Welcome {{user.displayName}}</h1>

         
    </div>

        <div class="px-4 py-6 sm:px-0">
         <!-- <div class="border-2 border-dashed border-gray-200 rounded-lg p-5"> 
              <ul v-for="person in users" :key="person.id" >
              <li class="">
                Name: {{ person.name }}
              </li>
              <li class="">
                Email: {{ person.email }}
              </li>
              <li class="">
                ID: {{ person.id }}
              </li>
              
              <br />
          </ul>

          </div> -->


 <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
               
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Administrator
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Facilitator
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last login
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="person in people" :key="person.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ person.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ person.email }}</div>
                  
                </td>
                
                

                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <div><span class=" text-white  bg-green-600 hover:bg-gray-500 rounded-3xl py-2 px-3 cursor-pointer" v-if="person.administrator" @click="changeAdmin(person)">Y</span>
                  <span class="text-white bg-red-600 hover:bg-gray-500 rounded-3xl py-2 px-3 cursor-pointer" v-else @click="changeAdmin(person)">N</span></div>                
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <div ><span class="text-white bg-green-600 hover:bg-gray-500  rounded-3xl py-2 px-3 cursor-pointer" v-if="person.facilitator" @click="changeFacilitator(person)">Y</span>
                  <span class="text-white bg-red-600 hover:bg-gray-500 rounded-3xl py-2 px-3 cursor-pointer" v-else @click="changeFacilitator(person)">N</span></div>                 
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ person.lastSignIn}}
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>








        </div>


        <!-- /End replace -->
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


// firebase imports
import { db } from "../firebase/config"
import { doc, updateDoc } from "firebase/firestore"



export default {
  components: {
    PlayerNav
  },
  setup() {

  // Getting collections to display
  const { user } = getUser()
  
  const { documents: people } = getCollection("users");

 

  const changeAdmin = (person) => {
    const docRef = doc(db, "users", person.id)
    updateDoc(docRef, {
      administrator: !person.administrator
    })
  }

  const changeFacilitator = (person) => {
    const docRef = doc(db, "users", person.id)
    updateDoc(docRef, {
      facilitator: !person.facilitator
  })
  }
    return {
      user, people, changeAdmin, changeFacilitator
    }
  },
}
</script>