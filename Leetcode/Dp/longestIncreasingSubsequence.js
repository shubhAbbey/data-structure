var lengthOfLIS = function(nums) {
    let dp = nums.map(()=>1), max = 0, n = nums.length
    for(let i = 1; i < n; i++)
        for(let j = 0; j < i; j++)
            if(nums[i] > nums[j] && dp[i] < dp[j]+1)
                dp[i] = dp[j]+1
    for(let m = 0; m < n; m++)
        if(max < dp[m]) max = dp[m]
    return max
};


// with binary search O(n^log n)

var lengthOfLIS = function(nums) {
    let numbers = [nums[0]]
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > numbers[numbers.length-1]) numbers.push(nums[i])
        else {
            let grtr = binarySearch(numbers, nums[i])
            numbers[grtr] = nums[i]
        }
    }
    return numbers.length
};
function binarySearch(numbers, target){
    let left = 0, right = numbers.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(numbers[mid] < target) left = mid+1
        else right = mid-1
    }
    return left
}