var diameterOfBinaryTree = function(root) {
    let max = 0
    function dfs(root){
        if(root === null) return -1
        let left = dfs(root.left), right = dfs(root.right)
        max = Math.max(max, 2+left+right) // max diameter
        return 1+Math.max(left, right) // height of current node
    }
    dfs(root)
    return max
};
