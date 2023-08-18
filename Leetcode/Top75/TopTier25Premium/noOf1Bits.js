
var hammingWeight = function(n) {
    let binary = n.toString(2)
    let count = 0
    binary.split("").forEach(item=>item==="1" && count++)
    return count
};

hammingWeight(3)