var singleNumber = function(nums) {
    let a = 0
    for(let val of nums) a^=val
    return a
};

singleNumber([2,2,1])