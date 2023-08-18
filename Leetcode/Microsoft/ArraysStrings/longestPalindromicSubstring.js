var longestPalindrome = function(s) {
    let cache = []
    for(let diff = 0; diff < s.length; diff++){
        cache[diff] = cache[diff] || []
        checkPalindrome(s, 0, diff, cache)
        console.log(cache)
    }
    let maxSubstringData = [null, null, 0]
    for(let left = 0; left < cache.length; left++){
        let right = cache[left].lastIndexOf(1)
        if(maxSubstringData[2] < right-left+1){
            maxSubstringData = [left, right, right-left+1]
        }
    }
    return s.slice(maxSubstringData[0], maxSubstringData[1]+1)
};

function checkPalindrome(s, left, right, cache){
    if(left >= s.length || right >= s.length) return
    cache[left] = cache[left] || []
    if(left === right) cache[left][right] = 1
    if(left < right){
        if(s[left] === s[right]){
            if(cache[left+1][right-1] == 0 && s.length > 2){
                cache[left][right] = 0
            }else cache[left][right] = 1
        }else cache[left][right] = 0
    }
    checkPalindrome(s, left+1, right+1, cache)
}

console.log(longestPalindrome('akakkakkkkakkaka'))


var longestPalindrome2 = function(s) {
    let res = ""
    function updateRes(l, r){
        while(l >= 0 && r < s.length && s[l] === s[r]){
            if(r-l+1 > res.length){
                res = s.slice(l,r+1)
            }
            l--
            r++
        }
    }
    for(let i = 0; i < s.length; i++){
        updateRes(i, i)
        updateRes(i, i+1)
    }
    return res
};

/*
"GeeksforGeeks"
"abcabcbb"
"pwwkew"
"bbbbb"
"jewhrqlqwje"
*/