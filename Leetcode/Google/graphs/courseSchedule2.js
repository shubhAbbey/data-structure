var findOrder = function(numCourses, prerequisites) {
    let preReq = {}
    for(let [course, pre] of prerequisites){
        preReq[course] = preReq[course] || []
        preReq[course].push(pre)
    }
    let V = new Set(), output = [], cycle = new Set()
    function dfs(crs){
        // return false if there is a cycle
        if(cycle.has(crs)) return false
        // return true if already visited or the required course is already scheduled
        if(V.has(crs)) return true
        // add course into cycle as it is not present their
        cycle.add(crs)
        // iterate over all courses present in preReq
        if(preReq[crs])
        for(let pre of preReq[crs])
            if(dfs(pre) === false) return false
        // at the end course will be deleted from the cycle
        cycle.delete(crs)
        // course is mark as visited
        V.add(crs) // {0, 1, 2, 3}
        // course pushed in output
        output.push(crs)
    }
    for(let i = 0; i < numCourses; i++)
        if(dfs(i) === false) return []
    return output
};
