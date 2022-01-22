<template>
  <div>
    <label for="text" class="block text-sm font-semibold text-gray-700"><slot name="inputLabel">Label will be here</slot></label>
    <div class="mt-1">
      <input type="text" name="text" id="text" class="bg-blue-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md pl-3 pr-10 py-2"  
      :value="modelValue" @input="updateValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  setup(props, context) {
    function updateValue(event) {
      context.emit("update:modelValue", event.target.value)
    }

    return {
      updateValue
    }
  }

}
</script>

<style>

</style>