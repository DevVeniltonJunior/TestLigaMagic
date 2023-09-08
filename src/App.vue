<template>
  <div>
    <SteppyComponent :steps="steps" :currentStep="currentStep" />
    <div>
      <button @click="prevStep" :disabled="currentStep === 0">Anterior</button>
      <button @click="nextStep" :disabled="currentStep === steps.length - 1">Próxima</button>
      <button @click="nextStep" :disabled="currentStep < steps.length - 1">Enviar</button>
    </div>
  </div>
</template>

<script>
import SteppyComponent from "./components/SteppyComponent.vue";

export default {
  components: {
    SteppyComponent
  },
  data() {
    return {
      steps: ["Passo 1", "Passo 2", "Passo 3", "Passo 4", "Passo 5"],
      currentStep: 0
    };
  },
  methods: {
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    }
  }
};
</script>
