var findCircleNum = function(isConnected) {
   // BFS
   
    let n = isConnected.length, vis = new Set()
    let size = 0
    let queue = []
    
    for(let i = 0; i < n; i++){
        if(!vis.has(i)){
            queue.push(i)
            while(queue.length){
                let curr = queue.shift()
                vis.add(curr)
                for(let j = 0 ; j < n; j++){
                    if(isConnected[curr][j] == "1" && !vis.has(j)){
                        queue.push(j)
                    }
                }
            }
            size++
        }
    }
    console.log(vis)
    return size


    // DFS
    // let n = isConnected.length, vis = new Set()
    // let size = 0
    // function dfs(i){
    //     for(let j = 0; j < n; j++){
    //         if(isConnected[i][j] == "1" && !vis.has(j)){
    //             vis.add(j)
    //             dfs(j)
    //         }
    //     }
    // }
    // for(let i = 0; i < n; i++){
    //     if(!vis.has(i)){
    //         dfs(i)
    //         size++
    //     }
    // }
    // return size

    // Union-Find
    
};