var findMissingRanges = function(nums, lower, upper) {
    let result = [], prev = lower-1
    for(let i = 0; i <= nums.length; i++){
        let curr = i < nums.length ? nums[i] : upper+1
        console.log(prev, curr)
        if(prev+1<=curr-1)
        result.push(formatRange(prev+1, curr-1))
        prev=curr
    }
    return result
};
var formatRange = function(lower, upper){
    if(lower === upper) return lower.toString()
    else return lower.toString() + "->" + upper.toString()
}