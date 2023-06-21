<script setup lang="ts">
import inputComponent from '@/pages/inputComponent.vue'
import itemComponent from './pages/itemComponent.vue';
</script>

<template>
  <div class="container">
    <div class="core">
      <inputComponent></inputComponent>
      <itemComponent></itemComponent>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container{
  width: 100%;
  height: 100%;
  background-color: #000;
  .core{
    width: 200px;
    min-height: 200px;
  }
}
</style>
