<template>
  <div>
    <label for="price" class="block text-sm font-medium text-gray-700">
      <slot name="inputLabel">Percentage</slot></label>
    
    <div class="mt-1 relative rounded-md shadow-sm">
      
      <input type="text" name="percent" id="percent" class="bg-blue-100 focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-12 py-2 sm:text-sm border-gray-300 rounded-md
      " placeholder="25" aria-describedby="price-currency" />
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <span class="text-gray-500 sm:text-sm" id="percent">
          %
        </span>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>