import { expect, it } from 'vitest'

it("toBe", () => {
    // ===
    expect(1).toBe(1)
})

it("toEqual", ()=>{
    const user = {
        name: 'dodo'
    };

    expect(user).toEqual({name:'dodo'})
})

it("toBeTruthy", () =>{
    expect(1).toBeTruthy()
})

it("toBeFalsy",()=>{
    expect(0).toBeFalsy()
})

it("toContain",()=>{
    const list = []
    const item1 = {
        name: 'dodo'
    }
    const item2 = {
        name: 'xiao白蘑菇汤'
    }
    list.push(...[item1,item2]);

    expect(list).toContain(item2)

    let str = "xiao白蘑菇汤";

    expect(str).toContain("xiao")
})

it("toThrow", ()=>{
    function getName(name){
        if(typeof name !== 'string'){
            throw new Error('name类型错误')
        }
        return 'pass'
    }

    expect(() => {
        getName(1111);
    }).toThrow('name类型错误');
})