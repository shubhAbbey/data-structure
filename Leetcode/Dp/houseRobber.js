

var rob = function(nums) {
    // stores the last two records and finds the best result
    // let rob1 = 0, rob2 = 0
    // for(let n = 0; n < nums.length; n++){
    //     let temp = Math.max(nums[n]+rob1, rob2)
    //     rob1 = rob2
    //     rob2 = temp
    // }
    // return rob2

    // let memo = {}
    // function rec(index=0){
    //     if(index >= nums.length) return 0
    //     if(index in memo) return memo[index]
    //     let ans = Math.max(rec(index+2) + nums[index], rec(index+1))
    //     memo[index] = ans
    //     return ans
    // }
    // return rec()
    let n = nums.length, max1 = 0, max2 = nums[n-1]
    for(let i = n-2; i >= 0; i--){
        let curr = Math.max(max2, max1+nums[i])
        max1 = max2
        max2 = curr
    }
    return max2
};

console.log(rob([1,5,8,10,15,6]))

// 1, 5, 9, 15, 24, 24

// 1+0, 0 = 0
// 5+0, 1 = 5
// 8+1, 5 = 9
// 10+5, 9 = 15
// 15+9, 15=24
// 6+15, 24=24
