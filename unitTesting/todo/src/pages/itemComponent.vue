<template>
    <ul class="item">
        <li v-for="item of todo.list" :key="item.time">
            <span> {{ item.value }}</span><span>{{ item.time }}</span> <button class="button" @click="deletItem(item.time)">delete</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useTodo } from '@/stores/todolist'
const todo = useTodo();

function deletItem(time:number){
    todo.del(time)
}

</script>

<style lang="scss" scoped>
.item {
    color: #fff;

    li {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        .button{
            border:0;
            color: #fff;
            background-color: rgb(219, 97, 97);
            &:hover{
                color:rgb(100, 100, 230);
            }
        }
    }
}
</style>