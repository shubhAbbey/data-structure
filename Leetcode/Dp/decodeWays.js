// Recursion
var numDecodings = function (s) {
  function rec(str, d, dp) {
    if (d && (d[0] === "0" || str[0] === "0" || d > 26)) return 0;
    if (!str.length) return 1;
    dp[str] = dp[str] || [];
    if (dp[str][d]) return dp[str][d];
    if (str[0] == "1" && str.length > 1) {
      return (dp[str][d] =
        rec(str.substring(1), str[0], dp) +
        rec(str.substring(2), str[0] + str[1], dp));
    } else if (str[0] == "2" && str.length > 1) {
      if (str[1] >= 0 && str[1] <= 6) {
        return (dp[str][d] =
          rec(str.substring(1), str[0], dp) +
          rec(str.substring(2), str[0] + str[1], dp));
      } else return (dp[str][d] = rec(str.substring(1), str[0], dp));
    } else return (dp[str][d] = rec(str.substring(1), str[0], dp));
  }
  return rec(s, "", {});
};

// Tabulation
var numDecodings = function (s) {
  function rec(i, dp) {
    if (dp[i]) return dp[i];
    if (s[i] == "0") return 0;
    let res = rec(i + 1, dp);
    if (
      i + 1 < s.length &&
      (s[i] == "1" || (s[i] == "2" && s[i + 1] >= 0 && s[i + 1] <= 6))
    )
      res += rec(i + 2, dp);
    dp[i] = res;
    return res;
  }
  //   return rec(0, { [s.length]: 1 });

  let dp = new Array(s.length + 1).fill(0);
  dp[s.length] = 1; 
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == "0") dp[i] = 0;
    else dp[i] = dp[i + 1];
    if (
      i + 1 < s.length &&
      (s[i] == "1" || (s[i] == "2" && s[i + 1] >= 0 && s[i + 1] <= 6))
    )
      dp[i] += dp[i + 2];
  }
  return dp[0];
};

// 11106
