var lengthOfLongestSubstring = function(s) {
    if(s.length < 2) return s.length
    let chars = {}, lp = 0, rp = 0, max = 0, count=0
    while(rp < s.length){
        let r = s[rp]
        let index = chars[r]
        if(index!==null && index>=lp && index<rp) {
            lp = index+1
        }
        max = Math.max(max, (rp-lp)+1)
        chars[r] = rp
        rp++
    }
    return max
};