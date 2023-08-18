var wordBreak = function(s, wordDict) {
    let memo = {}
    function rec(target){
        // memoization
        if(target in memo) return memo[target]
        // if target string is empty return true
        if(target.length === 0) return true
        for(let word of wordDict){
            let index = target.indexOf(word)
            // checks if current element's starting is same as targeted string
            if(index === 0){
                // if starting point is same then removes chars of target string upto the word length
                let sliced = target.slice(word.length)
                // rest part of the target string will again sent to perform same operations untill target string gets empty
                if(rec(sliced)) return true
            }
        }
        // if any of the array element matxhes with the start of target string then memo object will set false
        memo[target] = false
        return false
    }
    return rec(s)
};

function wordBreakTab(s, wordDict){
    let dp = new Array(s.length+1)
    dp[0] = true
    for(let i = 1; i <= s.length; i++){
        for(let j = 0; j < i; j++){
            if(dp[j] && wordDict.includes(s.slice(j,i))){
                dp[i] = true
                break
            }
        }   
    }
    return dp[s.length] ? true : false
}
// return true if the elements of array can form complete word
console.log(wordBreak("leetcode", ["leet", "code"]))
// "L  E  E  T  C  O  D  E"
// [T, F, F, F, T, F, F, F, T]