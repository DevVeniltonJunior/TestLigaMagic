<template>
  <div>
    <div v-for="(step, index) in steps" :key="index" :class="{ 'step-active': index === currentStep }">
      {{ step }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: Array, // Um array de strings representando cada etapa
    currentStep: Number // O número da etapa atual
  }
};
</script>

<style>
.step-active {
  font-weight: bold;
  color: blue;
}
</style>
