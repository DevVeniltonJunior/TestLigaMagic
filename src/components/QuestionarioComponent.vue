<template>
<div>
  Você sabe o que é Circuito LigaMagic?
  <div class="question">
    <input type="radio" id="sim" value="true" v-model="radioValue">
    <label for="sim">Sim</label>
    <input type="radio" id="nao" value="false" v-model="radioValue">
    <label for="sim">Não</label>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  data() {
    const radioValue = ref()
    return{
      radioValue
    }
  }
}
</script>

<style scoped>
div {
  display: table-column;
  text-align: center ;
}
.question {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
</style>