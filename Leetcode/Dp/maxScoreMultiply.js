var maximumScore = function(nums, multipliers) {
    let m = multipliers.length, n = nums.length
    let dp = new Array(m+1).fill()
    .map(()=> Array(m+1).fill(0))
    for(let i = m-1; i >= 0; i--){
        for(let left = i; left>=0; left--){
            let mult = multipliers[i]
            let right = n-1-(i-left)
            dp[i][left] = Math.max(mult*nums[left] + dp[i+1][left+1], 
                                   mult*nums[right] + dp[i+1][left])
        }
    }
    return dp[0][0]
};