let graph = {
    A: [
        { node: 'B', weight: 2 },
        { node: 'C', weight: 3 }, 
    ],
    B: [
        { node: 'D', weight: 1 }
    ],
    C: [
        { node: 'E', weight: 5 },
        { node: 'F', weight: 7 }
    ],
    D: [
        { node: 'G', weight: 8 }
    ],
    E: [
        { node: 'G', weight: 6 }
        
    ],
    F: [
        { node: 'H', weight: 9 }
    ],
    G: [
        { node: 'I', weight: 4 }
    ],
    H: [
        { node: 'I', weight: 10 }
    ],
    I: []
}
let V = new Array(Object.keys(graph).length-1).fill(false)

function topSort(){
    let i = Object.keys(graph).length-1, ordering = [], at = 0
    for(let vrtx in graph){
        i = dfs(i, vrtx, ordering)
        at++
    }
    return ordering
}

function dfs(i, at, ordering){
    V[at] = true
    let edges = graph[at]
    for(let edge of edges){
        if(V[edge.node] === false)
            i = dfs(i, edge.node, ordering)
    }
    ordering[i] = at
    return i-1
}

function findShortestPath(start){
    let numNodes = Object.keys(graph).length
    let sorted = topSort(), dist = {}
    dist[start] = 0
    for(let i = 0;i < numNodes; i++){
        let node = sorted[i]
        // if(dist[node]){
            let edges = graph[node]
            if(edges.length){
                for(let edge of edges){
                    let newDist = dist[node] + edge.weight
                    if(!dist[edge.node]) dist[edge.node] = newDist
                    else dist[edge.node] = Math.min(dist[edge.node], newDist)
                }
            }
        // }
    }
    return dist
}
// [ 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ]
console.log(findShortestPath('A'))