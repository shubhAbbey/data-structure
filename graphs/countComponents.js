var countComponents = function(n, edges) {
    let vis = new Set(), comps = 0
    let graph = {}
    for(let i = 0; i < edges.length; i++){
        let [v1, v2] = edges[i]
        graph[v1] = graph[v1] || []
        graph[v2] = graph[v2] || []
        graph[v1].push(v2)
        graph[v2].push(v1)
    }
    function dfs(v){
        if(vis.has(v) || !graph[v]) return
        vis.add(v)
        for(let neighbour of graph[v]){
            dfs(neighbour)
        }
    }
    for(let i = 0; i < n; i++){
        if(!vis.has(i)){
            dfs(i)  
            comps++
        }
    }
    return comps
};