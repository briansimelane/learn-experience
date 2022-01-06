<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium text-gray-700">
      1 to 10 Dropbox - Slot for Decision name
    </ListboxLabel>
    <div class="mt-1 relative w-2/12">
      <ListboxButton class="relative w-full bg-blue border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-green-500 sm:text-sm">
        <span class="flex items-center">
          <span class="ml-3 block truncate">{{ selected.name }}</span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="option in optionsToselect" :key="option.id" :value="option" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-blue-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  {{ option.name }}
                </span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-blue-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

const optionsToselect = [
  {
    id: 1,
    name: '1',
    
  },
  {
    id: 2,
    name: '2',
    
  },
  {
    id: 3,
    name: '3',
    
  },
  {
    id: 4,
    name: '4',
    
  },
  {
    id: 5,
    name: '5',
    
  },
  {
    id: 6,
    name: '6',
    
  },
  {
    id: 7,
    name: '7',
    
  },
  {
    id: 8,
    name: '8',
    
  },
  {
    id: 9,
    name: '9',
    
  },
  {
    id: 10,
    name: '10',
    
  },
]

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
  },
  setup() {
    const selected = ref(optionsToselect[3])

    return {
      optionsToselect,
      selected,
    }
  },
}
</script>