var makeConnected = function(n, connections) {
    let parent = [], rank = [], cycle = 0, comps
    for(let i = 0; i < n; i++){
        parent[i] = i
        rank[i] = 1
    }
    function find(node){
        if(parent[node] == node) return node
        return parent[node] =find(parent[node])
    }
    function union(v1, v2){
        v1 = find(v1)
        v2 = find(v2)
        if(rank[v1] < rank[v2])
            parent[v1] = v2
        else if(rank[v1] > rank[v2])
            parent[v2] = v1
        else{
            parent[v1] = v2
            rank[v2] = rank[v1]+1
        }
    }
    
    for(let [v1, v2] of connections){
        if(find(v1) !== find(v2))
            union(v1, v2)
        else cycle++
    }
    let set = new Set
    for(let i = 0; i < parent.length; i++){
        set.add(find(i))
    }
    comps = [...set]
    return cycle >= comps.length-1 ? comps.length-1 : -1
};