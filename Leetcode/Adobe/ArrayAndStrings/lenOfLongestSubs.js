var lengthOfLongestSubstring = function(s) {
    let l = 0, r = 0, cache = {}, max = 0
    while(r < s.length){
        let index = cache[s[r]]
        if(index != undefined && index >= l && index < r){
            l = index + 1   
        }
        max=Math.max(max, r-l+1)
        cache[s[r]] = r
        r++
    }
    return max
};