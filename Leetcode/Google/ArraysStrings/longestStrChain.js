var dfs = function(set, memo, currWord){
    if(currWord in memo) return memo[currWord]
    let maxLength = 1, matchStr = currWord
    for(let i = 0; i < currWord.length; i++){
        matchStr = matchStr.slice(0, i)+matchStr.slice(i+1)
        if(set.has(matchStr)){
         let currLength = 1+dfs(set, memo, matchStr)
         maxLength = Math.max(maxLength, currLength)
        }
        matchStr = currWord.slice(0,i)+currWord.slice(i)
    }
    memo[currWord] = maxLength
    return maxLength
}
var longestStrChain = function(words) {
   let wordSet = new Set(words)
   let memo = {}
   let ans = 0
   for(let word of words)
       ans = Math.max(ans, dfs(wordSet, memo, word))
    
    return ans
};

// memo = {
//     a: 1,
//     b: 1,
//     ab: 2,
//     ad: 1,
//     abc:this.ab+1 || 3,
//     bcd: 1,
//     abd: this.ab+1 || this.ad+1 || 3,
//     abcd: this.abc+1 || this.abd+1 || 4
// }