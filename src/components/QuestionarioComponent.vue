<template>
<div>
  <p>Você sabe o que é Circuito LigaMagic?</p>
  <input type="radio" id="sim" value="true" v-model="radioValue">
  <label for="sim">Sim</label>
  <input type="radio" id="nao" value="false" v-model="radioValue">
  <label for="sim">Não</label>
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

<style>

</style>