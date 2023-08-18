let blocks = [
  { gym: false, school: true, store: false},
  { gym: true, school: false, store: false},
  { gym: true, school: true, store: false},
  { gym: false, school: true, store: false},
  { gym: false, school: true, store: true}
];

var findMinDistance = function(){
    let dp = []
    for(let i = 0; i < blocks.length; i++){
        dp[i] = dp[i] || {}
        for(let keys in blocks[i]){
            dp[i].prev = dp[i].prev || {}
            if(dp[i-1]){
                dp[i].prev[keys] = dp[i-1][keys]
            }else dp[i].prev[keys] = null
            if(blocks[i][keys]) dp[i][keys] = 0
            else dp[i][keys] = Infinity
        }
    }
    for(let i = 0; i < blocks.length; i++){
        for(let keys in blocks[i]){
            if(i-1 >=0){
                dp[i].prev[keys] = dp[i-1][keys]
            }
            if(keys !== 'prev' && keys !== 'max'){
                let steps = 0
                dp[i][keys] = Math.min(findDistanceRecursively(blocks, dp, i, keys, steps), dp[i][keys]) || Math.min(dp[i].prev[keys]+1, dp[i][keys])
                dp[i].max = Math.max(dp[i].max || 0, dp[i][keys])
            }
        } 
    }
    let min = Infinity
    dp.forEach(reqs=>{
        min = Math.min(min, reqs.max)
    })
    console.log(dp.findIndex(reqs=>reqs.max===min))
    return dp.findIndex(reqs=>reqs.max===min)
}
var findDistanceRecursively = function(reqs, dp, i, keys, steps) {
    if(i>=reqs.length) return null
    if(reqs[i].visited) {
        reqs[i][keys] = rqus[i].prev[keys]-1 
        return reqs[i][keys]
    }
    if(reqs[i][keys]) return steps
    else {
        steps++
        return findDistanceRecursively(reqs, dp, i+1, keys, steps)
    }
}

findMinDistance()


var nextGreaterElement = function(nums1, nums2) {
    let hashMap = {}, stack = [], result = []
    stack.push(nums2[0])
    for(let i = 1; i < nums2.length; i++){
        while(stack.length && nums2[i]>stack[stack.length-1]) hashMap[stack.pop()] = nums2[i]
        stack.push(nums2[i])
    }
    console.log(stack)
    while(stack.length){
        hashMap[stack.pop()] = -1
    }
    for(let i = 0; i < nums1.length; i++){
        result.push(hashMap[nums1[i]])
    }
    // for(let i = 0; i < nums2.length; i++){
    //     hashMap[nums2[i]] = i
    // }
    // let j
    // for(let i = 0; i < nums1.length; i++){
    //     for(j = hashMap[nums1[i]]+1; j < nums2.length; j++){
    //         if(nums2[j] > nums1[i]) {
    //             result[i] = nums2[j]
    //             break
    //         }
    //     }
    //     if(j === nums2.length) result[i] = -1
    // }
    return result
};