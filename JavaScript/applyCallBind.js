Function.prototype.myApply = function (_this, args) {
    if (_this === undefined || _this === null) 
        _this = window;
     else 
        _this = Object(_this)
    

    const fn = Symbol("uniqueFn");
    _this[fn] = this;
    let result = _this.fn(...args);
    delete _this[fn]
    return result
}

Function.prototype.muCall = function (_this, ...rest) {
    if (_this === undefined || _this === null) 
        _this = window;
     else 
        _this = Object(_this)
    

    const fn = Symbol("uniqueFn");
    _this[fn] = this;
    let result = _this.fn(...rest);
    delete _this[fn]
    return result
}

Function.prototype.myBind = function (_this, ...rest) {
    if (_this === undefined || _this === null) 
        _this = window;
     else 
        _this = Object(_this)
    

    const self = this;
    let fn = function (...innerRest) {
        const isNew = this instanceof fn;
        return self.apply(isNew ? this : Object(_this), rest.concat(innerRest))
    }
    if (self.prototype) 
        fn.prototype = Object.create(self.prototype)
    

    return fn;
}

function test() {
    console.log()
}