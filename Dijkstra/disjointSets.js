
let graph = [
    // A: [
    //     { node: 'B', weight: 2},
    //     { node: 'D', weight: 1},
    // ],
    // B: [
    //     { node: 'A', weight: 2},
    //     { node: 'C', weight: 3}, 
    //     { node: 'E', weight: 5}
    // ],
    // C: [
    //     { node: 'B', weight: 3},
    //     { node: 'D', weight: 4}
    // ],
    // D: [
    //     { node: 'A', weight: 1},
    //     { node: 'C', weight: 4}
    // ],
    // E: [
    //     { node: 'B', weight: 5},
    //     { node: 'F', weight: 7},
    //     { node: 'H', weight: 6}
    // ],
    // F: [
    //     { node: 'E', weight: 7},
    //     { node: 'G', weight: 8}
    // ],
    // G: [
    //     { node: 'F', weight: 8},
    //     { node: 'H', weight: 9}
    // ],
    // H: [
    //     { node: 'E', weight: 6},
    //     { node: 'G', weight: 9}
    // ],
]

let rank = []
let parent = []

function addEdge(u, v, weight){
    graph.push({ src: u, dest: v, weight })
}
function addParent(k){
    for(let i = 0; i < k; i++){
        parent[i] = i
        rank[i] = 0
    }
}

function find(node){
    if(node === parent[node]) return node
    return parent[node] = find(parent[node])
}

function union(u, v){
    u = find(u)
    v = find(v)
    if(rank[u] < rank[v]) parent[u] = parent[v]
    else if(rank[u] > rank[v]) parent[v] = parent[u]
    else {
        parent[v] = u
        rank[u]++
    }
}
function msp(){
    let result = []
    graph.sort((a,b)=>a.weight-b.weight)
    addParent(4)

    let e = 0, i = 0

    while(e < parent.length-1){
        let { src, dest } = graph[i]
        i++
        let u = find(src),
        v = find(dest)
        if(u !== v){
            e++
            result.push(graph[i])
            union(u, v)
        }
    }
    // console.log(result, parent, rank)
    let minimumCost = 0
}
addEdge(0,1,10)
addEdge(0,2,6)
addEdge(0,3,5)
addEdge(1,3,15)
addEdge(2,3,4)
msp()
// addParent()
// union('A', 'H')
// union('B', 'C')
// union('D', 'E')
// union('F', 'G')
// union('A', 'B')
// union('C', 'D')
// // union('E', 'F')
// union('G', 'H')
// union('A', 'H')
// console.log(parent, weight)
