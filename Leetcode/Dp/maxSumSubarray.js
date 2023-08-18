
// return maximum sub array sum
var maxSubArray = function(nums) {
    if(nums.length < 2) nums[0]
    let max = nums[0], currMax = nums[0]
    for(let i = 1; i < nums.length; i++){
        // get the current sub array sum
        currMax = Math.max(nums[i], currMax+nums[i])
        // compare current max with max and update it
        max = Math.max(currMax, max)
    }
    return max
};
