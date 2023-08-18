var threeSum = function(nums) {
    let sortedNums = nums.sort((a,b)=>a-b), i = 0, j = nums.length, pairs = []
    for(let i = 0; i < nums.length && sortedNums[i] <= 0; i++){
         let mid = i+1, hi = j-1
         if(i===0 || sortedNums[i-1] !== sortedNums[i])
         while(mid < hi){
             let sum = sortedNums[i]+sortedNums[mid]+sortedNums[hi]
             if(sum === 0) {
                 pairs.push([sortedNums[i], sortedNums[mid++], sortedNums[hi--]])
                 while(mid < hi && sortedNums[mid] === sortedNums[mid-1]) mid++
             }
             else if(sum > 0) hi--
             else mid++
         }
    }
    return pairs
};