var numIslands = function(grid) {
    let islandCount = 0
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == '1'){
                islandCount++
                dfs(grid, i, j)   
            }
        }
    }
    return islandCount
};

var dfs = function(grid, i, j, seen){
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length  || grid[i][j]=='0') return
    grid[i][j] = 0
    dfs(grid, i+1, j, seen);
    dfs(grid, i, j+1, seen);
    dfs(grid, i-1, j, seen);
    dfs(grid, i, j-1, seen);
}