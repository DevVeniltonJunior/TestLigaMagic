<template>
  <input type="checkbox" id="standard" value="Standard" v-model="selectedItens">
  <label for="standard">Standard</label>
  <input type="checkbox" id="modern" value="Modern" v-model="selectedItens">
  <label for="modern">Modern</label>
  <input type="checkbox" id="pauper" value="Pauper" v-model="selectedItens">
  <label for="pauper">Pauper</label>

  <div>Selected: {{selectedItens}}</div>
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

<style>

</style>