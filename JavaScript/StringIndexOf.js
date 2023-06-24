
String.prototype.myIndexOf = function (str) {
    str = `${str}`;
    let firstIndex = -1;
    let firstStr = str[0];
    let len = str.length
    let selfStr = this.valueOf()

    function isSame(selfStr) {
        const reg = new RegExp(str);
        return reg.test(selfStr)
    }
    for (let index = 0; index < selfStr.length; index++) {
        if (selfStr[index] === firstStr) {
            firstIndex = isSame(selfStr.slice(index, index + len )) ? index : -1
        }
        if (firstIndex !== -1) {
            return firstIndex
        }
    }
    return firstIndex
}
console.log("123456".myIndexOf(56))
