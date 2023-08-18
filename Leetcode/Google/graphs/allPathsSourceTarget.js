var allPathsSourceTarget = function(graph) {
    let res = [], target = graph.length-1
    function backtrack(currNode, path){
        // if we reach target we do not need to explore more.
        if(currNode == target){
            res.push([...path])
            return
        }
        // explore all neighbours
        for(let neighbors of graph[currNode]){
            path.push(neighbors)
            backtrack(neighbors, path)
            // delete all neighbors to get new neighbors
            path.pop()
        }
    }
    backtrack(0, [0])
    return res
};

//with dp

var allPathsSourceTarget = function(graph) {
    let target = graph.length-1
    function backtrack(currNode, path){
        // if we reach target we do not need to explore more.
        if(currNode == target){
            return [[target]]
        }
        // explore all neighbours
        let result = []
        for(let neighbors of graph[currNode])
            for(let path of backtrack(neighbors))
                result.push([currNode,...path])
        return result
    }
    return backtrack(0)
};