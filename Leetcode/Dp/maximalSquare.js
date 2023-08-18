var maximalSquare = function(matrix) {
    // let rows = matrix.length, cols = matrix[0].length, max = 0,
    //     dp = new Array(cols+1).fill(0), prev = 0
    // for(let row = 1; row <= rows; row++){
    //     for(let col = 1; col <= cols; col++){
    //         let temp = dp[col]
    //         if(matrix[row-1][col-1] == '1'){
    //             dp[col] = Math.min(Math.min(dp[col-1], prev), dp[col])+1
    //             max = Math.max(max, dp[col])
    //         }else{
    //             dp[col]=0
    //         }
    //         prev=temp
    //     }
    // }
    // return max*max

    let max = 0
    for(let i = matrix.length-2; i>=0; i--){
        for(let j = matrix[i].length-2; j>=0; j--){
            if(matrix[i][j] > 0 && matrix[i+1][j] > 0 && matrix[i][j+1] > 0 && matrix[i+1][j+1] > 0)
                matrix[i][j] = 1+Math.min(matrix[i+1][j], matrix[i][j+1], matrix[i+1][j+1])
        } 
    }
    for(let i = 0; i < matrix.length; i++){
        let currMax = Math.max(...matrix[i])
        max = Math.max(max, currMax)
    }
    return max*max
};