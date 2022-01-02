<template>
  <Modal :modalActive="modalActive">
    This is from the test 2 page
  </Modal>

  This is Test Page 2

</template>

<script>
import Modal from '@/components/modal.vue'
import { ref } from 'vue'

export default {
  components: { Modal },
  setup() {
    const modalActive = ref(false)

    return {
      modalActive
    }
  }

}
</script>

<style>

</style>