function canSum(targetSum, arr, memo = {}){
    if(memo[targetSum]) return memo[targetSum]
    if(targetSum === 0) return true
    if(targetSum < 0) return false
    for(let nums of arr){
        let remainder = targetSum-nums
        if(canSum(remainder, arr, memo)){
            memo[targetSum] = true
            return true
        }
    }
    memo[targetSum] = false
    return false
}
canSum(9, [2,3,4])


function getWays(n, c) {
    let ways = new Array(n+1).fill(0)
    ways[0] = 1
    c.forEach(item=>{
        for(let i = 1; i < ways.length; i++)
            if(i>=item) ways[i]+=ways[i-item]
    })
    return ways[n]
}

getWays(4, [1,2,3])

[1,0,0,0,0]