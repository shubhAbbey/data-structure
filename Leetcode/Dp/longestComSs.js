var longestCommonSubsequence = function(text1, text2, n1=text1.length, n2=text2.length) {
    let memo = new Array(n1+1).fill()
    .map(()=> Array(n2+1).fill(0))
    // var lcs = function(n1, n2){
    //     if(n1 >= text1.length || n2 >= text2.length)
    //         return 0
    //     if(memo[n1][n2] != -1)
    //         return memo[n1][n2]
    //     let answer = 0
    //     if(text1[n1] === text2[n2])
    //         answer = 1 + lcs(n1+1, n2+1)
    //     else {
    //         answer = Math.max(lcs(n1+1, n2), lcs(n1, n2+1))
    //     }
    //     memo[n1][n2] = answer
    //     return memo[n1][n2]
    // }
    // return lcs(0, 0)

    // recursive
    // function rec(i,j,memo){
    //     if(i === text1.length || j === text2.length) return 0
    //     memo[i] = memo[i] || []
    //     if(memo[i][j]) return memo[i][j]
    //     if(text1[i] === text2[j]) return memo[i][j] = 1+rec(i+1, j+1, memo)
    //     else return memo[i][j] = Math.max(rec(i+1,j, memo), rec(i,j+1, memo))
    // }
    // return rec(0,0,[])

    // tabulation
    for(let col = n2-1; col>=0; col--){
        for(let row = n1-1; row >= 0; row--){
            if(text1[row] === text2[col])
                memo[row][col] = 1 + memo[row+1][col+1]
            else memo[row][col] = Math.max(memo[row+1][col], memo[row][col+1])
        }
    }
    return memo[0][0]
};