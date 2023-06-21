
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodo = defineStore('todo', () => {
  const list = ref<Array<{ value: string, time: number }>>([])

  function add(val: string) {
    const now: number = +new Date();

    list.value.push({ value: val, time: now })
  }
  function del(time: number ) {
    list.value.splice(list.value.findIndex(item=>item.time===time) , 1);
  }

  return { list, add, del }
})

export function reset(){
  useTodo().list=[]
}