String.prototype.myCharAt = function (index){
    return this[index]||''
}
console.log("123".myCharAt(3));