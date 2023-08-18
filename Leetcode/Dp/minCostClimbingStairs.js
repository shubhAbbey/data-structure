
var minCostClimbingStairs = function(cost) {
    let c1 = 0, c2 = 0
    for(let i = 2; i <= cost.length; i++){
        let temp = Math.min(c1+cost[i-2], c2+cost[i-1])
        c1 = c2
        c2 = temp
    }
    return c2
    // cost.push(0)
    // for(let i = cost.length-3; i >= 0; i--){
    //     cost[i] += Math.min(cost[i+1], cost[i+2])
    // }
    // return Math.min(cost[0], cost[1])

    
    //  let memo = {}
   // function rec(index){
   //     if(index >= cost.length-2) return 0
   //     if(index in memo) return memo[index]
   //     let m = cost[index+1]+rec(index+1), n = cost[index+2]+rec(index+2)
   //     memo[index] = Math.min(m, n)
   //     console.log(memo)
   //     return memo[index]
   // }
   //  let res = rec(0)
   //  return res+cost[0]
};