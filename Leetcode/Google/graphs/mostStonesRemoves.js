var removeStones = function(stones) {
    let parent = {}, rank = {}, count
    function make(){
        stones.forEach(item=>{
            let row = -(item[0]+1),
                col = item[1]+1
            parent[row] = row
            parent[col] = col
            rank[row] = 1
            rank[col] = 1
        })
        count = Object.keys(parent).length
    }
    function find(node){
        if(parent[node] !== node) parent[node] = find(parent[node])
        return parent[node]
    }
    function union(node1,node2){
        let left = find(node1),
            right = find(node2)
        console.log(left, "====>", node1 , right, "=====>", node2)
        if(left === right) return;
        count--
        if(rank[left] < rank[right])
            parent[left] = right
        else if(rank[left] > rank[right])
            parent[right] = left
        else{
            parent[left] = right
            rank[right] = rank[left]+1
        }
    }
    make()
    // console.log(parent, rank)
    stones.forEach(item=>{
        let row = -(item[0]+1),
            col = item[1]+1
        union(row, col)
    })
    console.log(stones.length, count)
    return stones.length-count
};

console.log(removeStones([[0,1],[0,2],[0,3],[1,2],[1,3]]))