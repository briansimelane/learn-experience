<template>
  <div>
      <p>Simulation Home Page</p>
  </div>

    <div class="flex md:flex-row flex-col justify-evenly w-4/4 bg-gray-100 p-5 mb-2 rounded-lg gap-3">
        <InputText class="md:w-1/4">
            <template v-slot:inputLabel>
                <div>
                    Techbook
                </div>
            </template>
        </InputText>
        <InputText class="md:w-1/4">
            <template v-slot:inputLabel>
                <div>
                    Zroid
                </div>
            </template>
        </InputText>
        <InputText class="md:w-1/4"> 
            <template v-slot:inputLabel>
                <div>
                    iTab
                </div>
            </template>
        </InputText>
        <InputText class="md:w-1/4"></InputText>
    </div>
    <div class="flex md:flex-row flex-col justify-evenly w-4/4 bg-gray-200 p-5 mb-2 rounded-lg gap-3">
        <Input1To10 class="md:w-1/4"> 
            <template v-slot:inputLabel>
                <div>
                    Techbook
                </div>
            </template>
        </Input1To10>
        <Input1To10 class="md:w-1/4">
            <template v-slot:inputLabel>
                <div>
                    Zroid
                </div>
            </template>
         </Input1To10>
        <Input1To10 class="md:w-1/4">
            <template v-slot:inputLabel>
                <div>
                    iTab
                </div>
            </template>
         </Input1To10>
        <Input1To10 class="md:w-1/4"> </Input1To10>
    </div>
    
    <div class="flex md:flex-row flex-col justify-evenly w-4/4 bg-gray-100 p-5 mb-2 rounded-lg gap-3">
        <InputNoneToAdvanced class="md:w-1/4">
            <template v-slot:inputLabel>
                <div>
                    Slot test
                </div>
            </template>
         </InputNoneToAdvanced>
        <InputNoneToAdvanced class="md:w-1/4"> </InputNoneToAdvanced>
        <InputNoneToAdvanced class="md:w-1/4"> </InputNoneToAdvanced>
        <InputNoneToAdvanced class="md:w-1/4"> </InputNoneToAdvanced>
    </div>

<div class="flex md:flex-row flex-col justify-evenly w-4/4 bg-gray-200 p-5 mb-2 rounded-lg gap-3">
        <InputPmtTerms class="md:w-1/4">
        <template v-slot:inputLabel>
                <div>
                    Slot test pmt
                </div>
            </template>
        </InputPmtTerms>
        <InputPmtTerms class="md:w-1/4"> </InputPmtTerms>
        <InputPmtTerms class="md:w-1/4"> </InputPmtTerms>
        <InputPmtTerms class="md:w-1/4"> </InputPmtTerms>
    </div>

    <div class="flex md:flex-row flex-col justify-evenly w-4/4 bg-gray-100 p-5 mb-2 rounded-lg gap-3">
        <InputNumber class="md:w-1/4"> <template v-slot:inputLabel>
                <div>
                    Slot test Amount
                </div>
            </template></InputNumber>
        <InputNumber class="md:w-1/4"> </InputNumber>
        <InputNumber class="md:w-1/4"> </InputNumber>
        <InputNumber class="md:w-1/4"> </InputNumber>
    </div>
    <div class="flex md:flex-row flex-col justify-evenly w-4/4 bg-gray-200 p-5 mb-2 rounded-lg gap-3">
        <InputPercentage class="md:w-1/4"> 
        <template v-slot:inputLabel>
                <div>
                    Slot test %
                </div>
            </template></InputPercentage>
        <InputPercentage class="md:w-1/4"> </InputPercentage>
        <InputPercentage class="md:w-1/4"> </InputPercentage>
        <InputPercentage class="md:w-1/4"> </InputPercentage>
    </div>

    <div class="flex md:flex-row flex-col justify-evenly w-4/4 bg-gray-100 p-5 mb-2 rounded-lg gap-3">
        <InputCurrency class="md:w-1/4" placeholder="55.00"> <template v-slot:inputLabel>
                <div>
                    Slot test Currency
                </div>
            </template></InputCurrency>
        <InputCurrency class="md:w-1/4"> </InputCurrency>
        <InputCurrency class="md:w-1/4"> </InputCurrency>
        <InputCurrency class="md:w-1/4"> </InputCurrency>
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
import InputPmtTerms from '@/components/simComponents/InputPmtTerms.vue'



export default {
    components: {
        InputText, Input1To10, InputCurrency, InputNoneToAdvanced, InputNumber, InputPercentage, InputPmtTerms
    }

}
</script>

<style>

</style>