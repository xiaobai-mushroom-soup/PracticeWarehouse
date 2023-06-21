import { expect, test } from 'vitest'
import { reset,useTodo } from '../todolist'
import { setActivePinia,createPinia } from 'pinia'

test("add todo",()=>{
    // 初始化环境
    setActivePinia(createPinia());
    // 调用
    const todo = useTodo();
    const title = "吃饭";

    todo.add(title);

    // 验证
    expect(todo.list[0].value).toBe(title)

    // 重制状态
    reset()
})