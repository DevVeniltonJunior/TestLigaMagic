<template>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" v-model="nome">
</template>

<script>
import { ref } from 'vue'
export default {
  data() {
    const nome = ref('')

    return {
      nome
    }
  }
}
</script>

<style>

</style>