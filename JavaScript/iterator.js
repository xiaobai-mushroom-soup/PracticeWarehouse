let myObj = {
    name: 'DoDo',
    age: 18,
    sex: 1
}

Object.defineProperties(myObj, Symbol.iterator ,{
    enumerable: false,
    writable: false,
    configurable: true ,
    value: function (){
        let _this = this;
        let idx = 0;
        let keys = Object.keys(myObj);
        return {
            next: function(){
                return {
                    value: _this[keys][idx++],
                    done: (idx > keys.length)
                }
            }
        }
    }
})
