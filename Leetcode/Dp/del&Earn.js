var deleteAndEarn = function(nums) {
    let map = {}, maxNum = 0
    for(let i = 0; i < nums.length; i++){
        map[nums[i]] = map[nums[i]] || 0
        map[nums[i]] += nums[i]
        maxNum = Math.max(maxNum, nums[i])
    }
    let mp1 = 0, mp2 = map[1] || 0
    for(let num = 2; num < maxNum+1; num++){
        let temp = Math.max(mp2, mp1+(map[num] || 0))
        mp1 = mp2
        mp2 = temp
    }
    return mp2

    // nums.sort((a,b)=>a-b)
    // let freq = {}
    // for(let i = 0; i < nums.length; i++){
    //     freq[nums[i]] = freq[nums[i]] || 0
    //     freq[nums[i]]++
    // }
    // let res = [nums[0]*freq[nums[0]]]
    // for(let i = 1, s = Object.keys(freq); i < s.length; i++){
    //     if(s[i-1] != s[i]-1) res.push(res[i-1]+(s[i]*freq[s[i]]))
    //     else {
    //         if(res[i-2]) res.push(Math.max(res[i-1],res[i-2]+(s[i]*freq[s[i]])))
    //         else res.push(Math.max(res[i-1],s[i]*freq[s[i]]))
    //     }
    // }
    // return res[res.length-1]
};