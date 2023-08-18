var maxProfit1 = function (prices) {
  let max = 1,
    min = 0,
    res = 0;
  while (max < prices.length) {
    if (prices[max] < prices[min]) {
      min = max;
      max++;
    } else {
      res = Math.max(res, prices[max] - prices[min]);
      max++;
    }
  }
  return res;
};

var maxProfit2 = function (prices) {
  let max = 0,
    valley = prices[0],
    peak = prices[0],
    i = 0;
  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) i++;
    valley = prices[i];
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) i++;
    peak = prices[i];
    max += peak - valley;
  }
  return max;
};

var maxProfit2 = function (prices) {
  let max = 1,
    min = 0,
    profit = 0;
  while (max < prices.length) {
    if (prices[max] > prices[min]) {
      profit += prices[max] - prices[min];
    }
    max++;
    min++;
  }
  return profit;
};
maxProfit2(2, [3, 2, 6, 5, 0, 3]);

var maxProfit3 = function (prices) {
  // recursive
  let dp = prices.map(() => {
    return [[], []];
  });
  function rec(i, buy, k) {
    if (k === 0) return 0;
    if (i === prices.length) return 0;
    if (dp[i][buy][k]) return dp[i][buy][k];
    if (buy)
      return (dp[i][buy][k] = Math.max(
        -prices[i] + rec(i + 1, 0, k), // buy
        0 + rec(i + 1, 1, k) // not buy
      ));
    else
      return (dp[i][buy][k] = Math.max(
        prices[i] + rec(i + 1, 1, k - 1), // sell
        0 + rec(i + 1, 0, k) // not sell
      ));
  }
  return rec(0, 1, 2);

  // Tabulation
//   let n = prices.length;
//   let after = [
//       [0, 0, 0],
//       [0, 0, 0],
//     ],
//     curr = [
//       [0, 0, 0],
//       [0, 0, 0],
//     ];
//   for (let i = n - 1; i >= 0; i--) {
//     for (let j = 0; j < 2; j++) {
//       for (let k = 1; k < 3; k++) {
//         if (j === 1)
//           curr[j][k] = Math.max(-prices[i] + after[0][k], 0 + after[1][k]);
//         else
//           curr[j][k] = Math.max(prices[i] + after[1][k - 1], 0 + after[0][k]);
//       }
//     }
//     after = curr; // passing current answer to after for performing computation
//   }
//   return after[1][2];
};

var maxProfit4 = function(k, prices) {
    let n = prices.length
    let after = [[],[]],curr = [[],[]]
        for(let j = 0; j < 2; j++){
            for(let i = 0; i <= k; i++) {
                after[j].push(0)
                curr[j].push(0)
        }
    }
    for(let i = n-1; i >=0; i--){
        for(let buy = 0; buy < 2; buy++){
            for(let cap = 1; cap <= k; cap++){
                if(buy === 1)
                    curr[buy][cap] = Math.max(-prices[i]+after[0][cap], 0+after[1][cap])
                else
                    curr[buy][cap] = Math.max(prices[i]+after[1][cap-1], 0+after[0][cap])
            }
        }
        after = curr
    }
    return after[1][k]    
};

var maxProfitWithCooldown = function(prices) {

    // recursion
    // let dp = []
    // for(let i = 0; i < prices.length; i++){
    //     dp.push([])
    // }
    // function rec(ind, buy, wait, memo){
    //     if(ind === prices.length) return 0
    //     if(memo[ind][buy]) memo[ind][buy]
    //     if(!wait){
    //         if(buy){
    //             return memo[ind][buy] = Math.max(-prices[ind]+rec(ind+1, 0, 0, memo), 0+rec(ind+1, 1, 0, memo))
    //         }else{
    //             return memo[ind][buy] = Math.max(prices[ind]+rec(ind+1, 0, 1, memo), 0+rec(ind+1, 0, 0, memo))
    //         }
    //     }else{
    //         return rec(ind+1, 1, 0, memo)
    //     }
    // }
    // return rec(0,1,0,dp)


    let sold = -Infinity, held = -Infinity, reset = 0
    for(let price of prices){
        let preSold = sold // -inf, -inf, 1, 4, 6, 1
        sold = held+price // -inf, 1, 4, 6, 1, 11
        held = Math.max(held, reset-price) // -1, -1, -1, -1, 2, -3
        reset = Math.max(reset, preSold) // 0, 0, 1, 4, 6, 6
    }
    return Math.max(sold, reset)

    // 1,2,5,7,2,9
};