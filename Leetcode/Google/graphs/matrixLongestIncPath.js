
// Bruite-Force O(2^m+n) space O(mn) recursive call space
var longestIncreasingPath = function(matrix) {
    let dirs = [[0,1], [1,0], [0,-1], [-1,0]]
    let m, n, ans = 0
    m = matrix.length
    n = matrix[0].length
    function dfs(i, j){
        let currMax = 0
        for(let dir of dirs){
            let x = i+dir[0], y = j+dir[1]
            if(x>=0 && x < m && y >= 0 && y < n && matrix[x][y] > matrix[i][j]){
                currMax = Math.max(currMax, dfs(x,y))   
            }
        }
        return ++currMax
    }
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            ans = Math.max(ans, dfs(i, j))
        }
    }
    return ans
};

// Using Memoization