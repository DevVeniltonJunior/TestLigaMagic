<template>
  <div>
    <div>
      <SteppyComponent class="subStep" :steps="steps" :currentStep="currentStep" />
      <div class="progressionBar">
        <div id="bar1" class="bar"></div>
        <div id="bar2" class="bar"></div>
      </div>
    </div>
    <div class="tContent">
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
      
      const bar1 = document.getElementById('bar1')
      const bar2 = document.getElementById('bar2')

      switch(this.currentStep){
        case 0:
          bar1.classList.remove("barDone")
          break
        case 1:
          bar2.classList.remove("barDone")
          break
      }
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }

      const bar1 = document.getElementById('bar1')
      const bar2 = document.getElementById('bar2')

      switch(this.currentStep){
        case 1:
          bar1.classList.add("barDone")
          break
        case 2:
          bar2.classList.add("barDone")
          break
      }
    }
  }
};
</script>

<style scoped>
.subStep .step-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.progressionBar {
  margin-top: 15px;
  display: flex;
}
.bar{
  width: 370px;
  height: 10px;
  background-color: #646262;
}
.barDone {
  background-color: #fcba03;
}
.tContent {
  display: flex;
  margin: 30px 0;
  justify-content: center;
  gap: 15px;
}
</style>