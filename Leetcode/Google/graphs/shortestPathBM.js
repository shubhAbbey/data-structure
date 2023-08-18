var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] != "0" || grid[grid.length-1][grid.length-1] != "0") return -1
    let dirs = [[-1, 0], [0, 1],[1, 0], [0, -1],[-1, 1], [1, 1], [1, -1], [-1, -1]], 
    queue = [[0, 0]]
    while(queue.length){
        let [row, col] = queue.shift(), shortestPath = grid[row][col]
        if(row === grid.length-1 && col === grid[0].length-1){
            return shortestPath+1
        }
        for(let [r, c] of dirs){
            let rr = r+row, cc = c+col
            if(rr < 0 || rr >= grid.length || cc < 0 || cc >= grid[0].length || grid[rr][cc]!= "0")
                continue
            queue.push([rr, cc])
            grid[rr][cc] = shortestPath+1
            
        }
    }
    return -1
};