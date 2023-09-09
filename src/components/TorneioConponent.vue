<template>
  <div>
    <div>
      <SteppyComponent :steps="steps" :currentStep="currentStep" />
    </div>
    <div>
      <label for="standardDate">Escolha a data:</label>
      <input type="date" id=standardDate v-if="currentStep === 0" v-model="standardDate">
      <input type="date" id=modernDate v-if="currentStep === 1" v-model="modernDate">
      <input type="date" id=pauperDate v-if="currentStep === 2" v-model="pauperDate">
    </div>
    <div class="btn-group">
      <button @click="prevStep" :disabled="currentStep === 0">Anterior</button>
      <button @click="nextStep" :disabled="currentStep === steps.length - 1">Próxima</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SteppyComponent from "./SteppyComponent.vue";

export default {
  components: {
    SteppyComponent
  },
  data() {
    const standardDate = ref()
    const modernDate = ref()
    const pauperDate = ref()

    return {
      steps: ["Standard", "Modern", "Pauper"],
      currentStep: 0,
      standardDate,
      modernDate,
      pauperDate
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
