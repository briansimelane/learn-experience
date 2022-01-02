<template>
  <div v-show="modalActive">
      <div class="fixed inset-0 z-50 flex justify-center items-center">
          <div class="flex flex-col max-w-5xl rounded-lg shadow-lg bg-white">
              <!-- header -->
              <div class="p-5">
                  <div class="flex justify-end items-end">
                     <!-- <h3 class="text-2xl font-semibold">Modal Header</h3> -->
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
                     <slot />
                  </p>
              </div>
              <!-- footer -->
              <div class="p-6 flex justify-end items-center">
                  <button class="bg-gray-300 p-3 rounded-lg" @click="close">Cancel</button>
                  <button class="bg-red-600 p-3 ml-3 rounded-lg">Delete</button>
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