var nextPermutation = function(nums) {
    let i = nums.length-2
    while(i>=0 && nums[i] >= nums[i+1]) i--
    if(i>=0){
        let j = nums.length-1
        while(j>=0 && nums[j] <= nums[i]) j--
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    nums=reverse(nums, i+1, nums.length-1)
    return nums
};

var reverse = function(arr, start, end){
    while(start<=end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr
} 