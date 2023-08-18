var maxProduct = function(nums) {
    let min = nums[0], max = nums[0], res = max
    for(let i = 1; i < nums.length; i++){
        let curr = nums[i]
        // max will be updated with previous minimum
        let tempMax = Math.max(curr, min*curr, max*curr)
        // min will be updated with previous maximum
        min = Math.min(curr, min*curr, max*curr)
        // updating max
        max = tempMax
        res = Math.max(max, res)
    }
    return res
};