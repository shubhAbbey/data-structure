function Node(data, left, right){
    this.data = data;
    this.left = left || null;
    this.right = left || null;
}
Node.prototype.swap=function(){
    let temp=this.left;
    this.left=this.right;
    this.right=temp;
}
function inOrder(root){
    let visited=[],current=root;
    // function rec(current){
    // current.left && rec(current.left)
    // visited.push(current.data)
    // current.right && rec(current.right)   
    // }
    // console.log("=========",visited)
    // return visited;
    if(current.left) visited = visited.concat(inOrder(current.left))
    visited.push(current.data)
    if(current.right) visited = visited.concat(inOrder(current.right))
    
    return visited;
}
function findDepth(root, depth, current){
    current = current || 1;
    if(depth === current){
        return [root];
    }else{
        return [].concat(root.left ? findDepth(root.left, depth, current+1):[])
        .concat(root.right ? findDepth(root.right, depth, current+1):[]);
    }
}
function swapChildren(root, depth, max){
    let d=depth,i=2;
    while(d<=max){
        findDepth(root, d, 1).forEach(node=>node.swap());
        d=i*depth;
        i++;
    }
    return inOrder(root)
}

function swapNodes(indexes, queries) {
    let nodes = [],_i, k
    for(let i = 0; i<indexes.length; i++){
        _i=i+1
        nodes[i] = new Node(_i)
    }
    for(let i =0; i<nodes.length; i++){
        let [l,r] = indexes[i]
        if(l > -1) nodes[i].left = nodes[l-1]
        if(r > -1) nodes[i].right = nodes[r-1]
    }
    let finalNodes = []
    for(let i = 0; i<queries.length;i++){
    finalNodes.push(swapChildren(nodes[0],queries[i], indexes.length-1))   
    }
    return finalNodes
}

swapNodes