import { describe, it, expect } from 'vitest'

describe("add", ()=>{
    const user = {
        name: 'dodo'
    };
    it("should add a item to todos", () => {
        expect(user.name).toBe("dodo")
    })

})
describe("remove", ()=>{
    it("should remove a item ",()=>{});
})