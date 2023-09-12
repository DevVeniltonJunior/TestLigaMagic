<template>
<div>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" v-model="nome">
</div>
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

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>