<template>
    <input v-model="inputValue" type="text" class="input" @keydown.enter="add">
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodo } from '@/stores/todolist'

const inputValue = ref('')
const todo = useTodo();

function add() {
    todo.add(inputValue.value);
    inputValue.value = '';
}

</script>

<style lang="scss" scoped>
.input {
    width: 200px;
    height: 50px;
    border: 10px solid #fafafa;
    border-radius: 8px;
    font-size: 18px;
}
</style>