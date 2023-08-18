
// not going upwards -----> BUG

var calcEquation = function(equations, values, queries) {
    // preprocess the graph
    let m = equations.length, graph = {}
    for(let i = 0; i < m; i++){
        let [x, y] = equations[i]
        let val = values[i]
        graph[x] = graph[x] || {}
        graph[y] = graph[y] || {}
        graph[x][y] = val.toFixed(5)
        graph[y][x] = (1 / val).toFixed(5)
    }
    // dfs
    function dfs(num, den, prod, visited){
        visited.add(num)
        let neighbours = graph[num], answer = (-1).toFixed(5)
        if(neighbours[den]) answer = prod * neighbours[den]
        else 
            Object.keys(neighbours).map(item=>{
                if(!visited.has(item)){
                    answer = dfs(item, den, neighbours[item]*prod, visited)
                }
            })
        return answer
    }
    // calculations
    let result = []
    for(let [num, den] of queries){
        if(!graph[num] || !graph[den])
            result.push((-1).toFixed(5))
        else if(num === den)
            result.push((1).toFixed(5))
        else result.push(dfs(num, den, 1, new Set()))
    }
    return result
};