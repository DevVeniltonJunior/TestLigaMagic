<template>
  <div>
    <div id="steppyComponent">
    <div class="trackLine">
      <div class="line" id="line1"></div>
      <div class="line" id="line2"></div>
      <div class="line" id="line3"></div>
    </div>
      <SteppyComponent class="mainStep" :steps="steps" :currentStep="currentStep" />
      <div class="steppyText">
        <div>Formato</div>
        <div>Questionário</div>
        <div>Pagamento</div>
        <div>Torneio</div>
      </div>
    </div>
    <div class="content">
      <FormatComponent v-if="currentStep === 0"/>
      <QuizComponent v-if="currentStep === 1"/>
      <PaymentComponent v-if="currentStep === 2"/>
      <TournamentConponent v-if="currentStep === 3"/>
    </div>
    <div class="btn-group">
      <button id="back" @click="prevStep" :disabled="currentStep === 0">Anterior</button>
      <button id="foward" @click="nextStep" :disabled="currentStep === steps.length - 1">Próxima</button>
      <button id="send" @click="send" :disabled="currentStep < steps.length - 1">Enviar</button>
    </div>
  </div>
</template>

<script>
import SteppyComponent from "./components/SteppyComponent.vue";
import FormatComponent from './components/FormatComponent.vue';
import QuizComponent from './components/QuizComponent.vue'
import PaymentComponent from './components/PaymentComponent.vue';
import TournamentConponent from './components/TournamentConponent.vue';

export default {
  components: {
    SteppyComponent,
    FormatComponent,
    QuizComponent,
    PaymentComponent,
    TournamentConponent
  },
  data() {
    return {
      steps: ["", "", "", ""],
      currentStep: 0
    };
  },
  methods: {
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }

      const line1 = document.getElementById('line1')
      const line2 = document.getElementById('line2')
      const line3 = document.getElementById('line3')

      switch(this.currentStep){
        case 0:
          console.log(this.currentStep, 'line1')
          line1.classList.remove("lineOk")
          break
        case 1:
          console.log(this.currentStep, 'line2')
          line2.classList.remove("lineOk")
          break
        case 2:
          console.log(this.currentStep, 'line3')
          line3.classList.remove("lineOk")
          break
      }
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }

      const line1 = document.getElementById('line1')
      const line2 = document.getElementById('line2')
      const line3 = document.getElementById('line3')

      switch(true){
        case this.currentStep <= 1:
          line1.classList.add("lineOk")
          break
        case this.currentStep <= 2:
          line2.classList.add("lineOk")
          break
        case this.currentStep <= 3:
          line3.classList.add("lineOk")
          break
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
  font-size: 18px;
}
#steppyComponent {
  position: relative;
  margin: 0 10vw;
  width: 850px;
}
div .steppyText {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
div .line{
  height: 10px;
  width: 201px;
  background-color: gray;
  border: 1px solid white;
}
div .lineOk {
  height: 10px;
  width: 201px;
  background-color: gray;
  border-color: #fcba03;
}
div .trackLine{
  position: absolute;
  margin-top: 20px;
  margin-left: 77px;
  height: 10px;
  width: 696px;
  justify-content: space-between;
  display: flex;
}
.step-container {
  display: flex;
  padding: 0 30px;
  width: 850px;
  gap: 200px;
}
.mainStep .step {
  flex: 1;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 24px;
  border: 1px solid white;
  color: white;
  border-radius: 15px;
  background-color: gray;
}
.mainStep .step-active {
  font-weight: bold;
  color: #fcba03;
  background-color: #646262;
  border-color: #fcba03;
}
.mainStep .done {
  font-weight: bold;
  color: #fcba03;
  background-color: #646262;
  border-color: #fcba03;
}
.content{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
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
