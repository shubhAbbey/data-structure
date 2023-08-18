var subsetsWithDup = function(nums) {
    nums.sort()
    let res = []

    function backTrack(i, subset){
        if(i == nums.length){
            res.push([...subset])
            return 
        }

        // All subsets that includes nums[i]
        subset.push(nums[i])
        backTrack(i+1,subset)
        subset.pop()

        // All subset that dont include nums[i]
        while(i+1<nums.length && nums[i] == nums[i+1]) i++
        backTrack(i+1, subset)
    }
    backTrack(0, [])
    return res
};

/*
[1,2,2,3]
[1,2,2]
[1]
[2,2]
[2]
[]
*/
subsetsWithDup([1,2,2,3])