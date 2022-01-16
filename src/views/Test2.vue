<template>
  <div class="container mx-auto">
    <currency-input v-model="value"  />
  </div>
</template>

<script>
// import TestComp from '@/components/testComponent'
import CurrencyInput from '@/components/testComponent'
export default {
  components: {
    CurrencyInput
  },
  data: () => ({ value: 1234 })


/* :options="{ currency: 'ZAR' }" */
}
</script>

<style>

</style>