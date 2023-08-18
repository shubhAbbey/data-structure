var findCircleNum = function(isConnected) {
    let parent = new Array(isConnected.length).fill(-1), comp = 0
    function find(node){
        if(parent[node] === -1) return node
        return parent[node] =find(parent[node])
    }
    function union(v1, v2){
        v1 = find(v1)
        v2 = find(v2)
        if(v1!=v2)
            parent[v1]=v2
    }
    for(let i = 0; i < isConnected.length; i++)
        for(let j = 0; j < isConnected[i].length; j++)
            if(isConnected[i][j]==1 && i!=j)
                union(i, j)
    for(let i= 0; i < parent.length; i++)
        if(parent[i] == -1)
            comp++
    return comp
};