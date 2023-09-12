<template>
<div>
  Selecione os itens abaixo:
  <div class="form">
    <input type="checkbox" id="standard" value="Standard" v-model="selectedItens">
    <label for="standard">Standard</label>
    <input type="checkbox" id="modern" value="Modern" v-model="selectedItens">
    <label for="modern">Modern</label>
    <input type="checkbox" id="pauper" value="Pauper" v-model="selectedItens">
    <label for="pauper">Pauper</label>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    const selectedItens = ref([])
    return {
      selectedItens
    }
  }
}
</script>

<style scoped>
div {
  display: table-column;
  text-align: center ;
}
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
</style>