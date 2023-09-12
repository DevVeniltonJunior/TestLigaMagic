<template>
  <div class="step-container">
    <div v-for="(step, index) in steps" :key="index" :class="{ 'step-active': index === currentStep, 'done': index < currentStep }" class="step">
      {{ step }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: Array,
    currentStep: Number
  }
};
</script>
