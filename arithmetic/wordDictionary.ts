/*
    设计一个支持以下两种操作的数据结构：
void addWord(word)
bool search(word)
search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
. 可以表示任何一个字母。

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true

*/


function wordDictionary() {
  this.words = {};
}

wordDictionary.prototype.addWord = function (str: string): void {
  if (this.words[str.length]) {
    this.words[str.length].push(str);
  } else {
    this.words[str.length] = [str]
  }
};

wordDictionary.prototype.search = function(word:string){
        const len = word.length
        if(!this.words[len]){
            return false
        }

        if(!word.includes(".")){
            return this.words[len].includes(word)
        }

        const reg = new RegExp(word);
        return this.words[len].some((item)=>{
            return reg.test(item)
        })
    }