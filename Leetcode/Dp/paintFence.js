var numWaysRec = function (n, k) {
  function mul(a, b) {
    return a * b;
  }
  function rec(i, dp) {
    if (i === 1) return k; // we can color 1 fence in k ways
    if (i === 2) return k + k * (k - 1); // we have k-1 ways for each previously computed result to get new result
    if (dp[i]) return dp[i];
    return (dp[i] = mul(rec(i - 1, dp), k - 1) + mul(rec(i - 2, dp), k - 1));
  }
  return rec(n, []);
};

var numWaysTab = function (n, k) {
  function mul(a, b) {
    return a * b;
  }
  let dp = [];
  dp[1] = k;
  dp[2] = k + mul(k, k - 1);
  for (let i = 3; i <= n; i++) {
    let ans = mul(dp[i - 1], k - 1) + mul(dp[i - 2], k - 1);
    dp.push(ans);
  }
  return dp[n];
};

var numWaysSO = function (n, k) {
  if (n < 2) return k;
  function mul(a, b) {
    return a * b;
  }
  let prev2 = k,
    prev1 = k + mul(k, k - 1);
  for (let i = 3; i <= n; i++) {
    let ans = mul(prev1, k - 1) + mul(prev2, k - 1);
    prev2 = prev1;
    prev1 = ans;
  }
  return prev1;
};


