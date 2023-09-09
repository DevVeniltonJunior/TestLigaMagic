<template>
  <div>
    <div  class="steps">
      <SteppyComponent :steps="steps" :currentStep="currentStep" />
    </div>
    <div>
      <FormatoComponent v-if="currentStep === 0"/>
      <QuestionarioComponent v-if="currentStep === 1"/>
    </div>
    <div class="btn-group">
      <button @click="prevStep" :disabled="currentStep === 0">Anterior</button>
      <button @click="nextStep" :disabled="currentStep === steps.length - 1">Próxima</button>
      <button @click="send" :disabled="currentStep < steps.length - 1">Enviar</button>
    </div>
  </div>
</template>

<script>
import FormatoComponent from './components/FormatoComponent.vue';
import SteppyComponent from "./components/SteppyComponent.vue";
import QuestionarioComponent from './components/QuestionarioComponent.vue'

export default {
  components: {
    SteppyComponent,
    FormatoComponent,
    QuestionarioComponent
  },
  data() {
    return {
      steps: ["1", "2", "3", "4", "5"],
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

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.steps {
  margin-top: -200px;
}
.btn-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
button {
  padding: 2px 8px;
}
</style>
