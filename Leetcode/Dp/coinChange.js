var coinChange = function (coins, amount) {
  //     let memo={}
  //     function getCoinCount(amt){
  //         if(amt in memo) return memo[amt]
  //         if(amt < 0) return -1
  //         if(amt == 0 ) return 0
  //         let mc = Infinity
  //         for(let i of coins){
  //             let count=getCoinCount(amt-i)
  //             if(count == -1) continue
  //             mc = Math.min(mc, count+1)

  //         }
  //         memo[amt] = mc
  //         return mc===Infinity ? -1 : mc
  //     }
  //     return getCoinCount(amount)

  let memo = [];
  memo[0] = 0;
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        min = Math.min(min, memo[i - coins[j]] + 1);
      }
    }
    memo[i] = min;
  }
  return memo[memo.length - 1] === Infinity ? -1 : memo[memo.length - 1];
};

var coinChange = function (coins, amount) {
  let table = Array(amount + 1).fill(null);
  table[0] = 0;
  for (let i = 0; i <= amount; i++) {
    if (table[i] != null) {
      for (let coin of coins) {
        let comb = table[i] + 1;
        if (table[i + coin] === null || table[i + coin] > comb)
          table[i + coin] = comb;
      }
    }
  }
  return table[amount] !== null ? table[amount] : -1;
};

var coinChange = function (coins, amount) {
  function coinsRec(target, memo = {}) {
    if (target in memo) return memo[target];
    if (target === 0) return 0;
    if (target < 0) return null;
    let min = null;
    for (let i = 0; i < coins.length; i++) {
      let res = coinsRec(target - coins[i], memo);
      if (res !== null) {
        res++;
        if (min === null || res < min) {
          console.log(res, min);
          min = res;
        }
      }
    }
    memo[target] = min;
    return min;
  }
  let res = coinsRec(amount);
  return res ? res : -1;
};


var coinChange2 = function(amount, coins) {
  function rec(n, sum, dp){
      if(sum === 0) return 1
      if(sum < 0) return 0
      if(n<=0) return 0
      dp[n] = dp[n] || []
      if(dp[n][sum]) dp[n][sum]
          return dp[n][sum] = rec(n-1, sum, dp) + rec(n, sum-coins[n-1], dp)
  }
  let dp = new Array(amount+1).fill(0)
  dp[0] = 1
  return rec(coins.length, amount, [])
};