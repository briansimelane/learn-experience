<template>
  <div v-show="modalActive">
      <div class="fixed inset-0 z-50 flex justify-center items-center">
          <div class="flex flex-col max-w-5xl rounded-lg shadow-lg bg-white">
              <!-- header -->
              <div class="p-5">
                  <div class="flex justify-between gap-5">
                    <h3 class="text-2xl font-semibold"><slot name="header"></slot></h3> 
                      <button class="p-1 leading-none">
                          <div class="text-xl font-semi-bold text-gray-700">
                              <span @click="close" class="">X</span>
                          </div>
                      </button>
                  </div>
              </div>
              <!-- body -->
              <div class="p-2">
                  <p>
                     <slot name="content"></slot>
                  </p>
              </div>
              <!-- footer -->
              <div class="p-6 flex justify-center items-center">
                  <button class="bg-green-600 p-3 rounded-lg" @click="close">Close</button>
                  
              </div>
          </div>
      </div>
    <div class="opacity-25 fixed inset-0 z-40 bg-black">

    </div>
  </div>
</template>

<script>


export default {
    props: [ "modalActive"],
    setup(props, {emit}) {

        const close = () => {
            emit("close")
        }


    return { close }

    }

}
</script>

<style>

</style>