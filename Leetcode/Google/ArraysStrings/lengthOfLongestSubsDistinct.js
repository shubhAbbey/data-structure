var lengthOfLongestSubstringTwoDistinct = function(s) {
    if(s.length < 3) return s.length
    let max = 0, distCount = 0, left = 0, right = 0, obj = {}
    while(right < s.length){
        obj[s[right]] = obj[s[right]] || 0
        if(obj[s[right]] === 0) distCount++
        obj[s[right]]++
        while(distCount > 2){
            obj[s[left]]--
            if(obj[s[left]] === 0){
                delete obj[s[left]]
                distCount--
            }
            left++
        }
        max = Math.max(max, right-left+1)
        right++
    }
    return max
};

console.log(lengthOfLongestSubstringTwoDistinct('ccaabbb'))
//ccaabbb