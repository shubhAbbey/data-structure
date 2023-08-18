var validTree = function(n, edges) {
    if(edges.length != n-1) return false
    let graph = {}, visited = new Set()
    for(let i = 0; i < n; i++){
        graph[i] = []
    }
    for(let i = 0; i < edges.length; i++){
        let [row, col] = edges[i]
        graph[row].push(col)
        graph[col].push(row)
    }
    function dfs(k){
        if(visited.has(k)) return
        visited.add(k)
        for(let neighbour of graph[k]){
            dfs(neighbour)
        }
    }
    dfs(0)
    return visited.size === n
};