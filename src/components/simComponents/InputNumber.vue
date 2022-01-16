<template>
  <div>
    <label for="price" class="block text-sm font-medium text-gray-700">
      <slot name="inputLabel">Slot test number</slot></label>
    
    <div class="mt-1 relative rounded-md shadow-sm">
      
      <input type="text" name="price" id="price" class="bg-blue-100 focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-12 py-2 sm:text-sm border-gray-300 rounded-md
      " placeholder="0.00" aria-describedby="price-currency" /> 
    
    </div>
  </div>
</template>

<script>

import { ref } from 'vue'


export default {
  components: {
    
  },

  setup() {
    const number = ref('')
    

   /* watchEffect((number) => {
      number.value = number.value.replace(/[^0-9]/g, '')
     }
   ) */

    return {
     number
    }
  }
  
}
</script>