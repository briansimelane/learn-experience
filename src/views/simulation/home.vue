<template>
  <div>
      <p>Simulation Home Page</p>
  </div>

    <div>
        <InputText> </InputText>
    </div>
    <div>
        <Input1To10> </Input1To10>
    </div>
    <div>
        <InputCurrency> </InputCurrency>
    </div>
    <div>
        <InputNoneToAdvanced> </InputNoneToAdvanced>
    </div>
    <div>
        <InputNumber> </InputNumber>
    </div>
    <div>
        <InputPercentage> </InputPercentage>
    </div>
</template>

<script>
// Imports: Components for simulation inputs
import InputText from '@/components/simComponents/InputText.vue'
import Input1To10 from '@/components/simComponents/Input1to10.vue'
import InputCurrency from '@/components/simComponents/InputCurrency.vue'
import InputNoneToAdvanced from '@/components/simComponents/InputNonetoAdvanced.vue'
import InputNumber from '@/components/simComponents/InputNumber.vue'
import InputPercentage from '@/components/simComponents/InputPercentage.vue'



export default {
    components: {
        InputText, Input1To10, InputCurrency, InputNoneToAdvanced, InputNumber, InputPercentage
    }

}
</script>

<style>

</style>