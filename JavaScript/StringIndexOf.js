
String.prototype.myIndexOf = function (str) {
    str = `${str}`;
    let firstIndex = -1,
     firstStr = str[0],
     len = str.length,
     selfStr = this.valueOf()

    function isSame(selfStr) {
        const reg = new RegExp(str);
        return reg.test(selfStr)
    }
    for (let index = 0; index < selfStr.length; index++) {
        if (selfStr[index] === firstStr) 
            firstIndex = isSame(selfStr.slice(index, index + len )) ? index : -1
        
        if (firstIndex !== -1) 
            return firstIndex
        
    }
    return firstIndex
}
console.log("123456".myIndexOf(56))
