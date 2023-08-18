function sort(str){
    let sortArr = str.split('')
    sortArr.sort()
    return sortArr.join('')
}

// by using bucketSort algorithm
var groupAnagrams = function(strs) {
    let bucket = {}
    for(let i = 0; i < strs.length; i++){
        let sortedStr = sort(strs[i])
        bucket[sortedStr] = bucket[sortedStr] || []
        bucket[sortedStr].push(strs[i])
    }
    let finalArr = Object.values(bucket)
    for(let i  = 0; i < finalArr.length; i++){
        if(finalArr[i].length > 1){
            finalArr[i].sort()
        }
    }
    return finalArr.sort((a,b)=>a.length-b.length)
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])