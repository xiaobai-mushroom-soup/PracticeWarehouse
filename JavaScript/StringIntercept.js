
String.prototype.mySubstr = function (from, to) {
    let str = '';
    if (from >= this.length) return '';
    for (let i = from; i < (to || this.length); i++) {
        str += this[i]
    }
    return str
}

console.log("12345678".mySubstr(2))
