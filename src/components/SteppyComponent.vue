<template>
  <div class="step-container">
    <div v-for="(step, index) in steps" :key="index" :class="{ 'step-active': index === currentStep }" class="step">
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

<style scoped>
.step-container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 15vw;
}

.step {
  flex: 1;
  text-align: center;
  padding: 12px 20px;
  border: 1px solid white;
  color: white;
  border-radius: 50%;
  background-color: gray;
}

.step-active {
  font-weight: bold;
  color: #fcba03;
  background-color: #646262; /* Cor de fundo da etapa ativa */
  border-color: #fcba03; /* Cor da borda da etapa ativa */
}
</style>
