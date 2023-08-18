let prev
var isValidBST = function(root) {
    prev = null
    return inOrder(root)
};
var inOrder = function(root){
    if(root == null) return true
    if(!inOrder(root.left)) return false
    if(prev != null && root.val <= prev) return false
    prev = root.val
    return inOrder(root.right)
}

console.log(isValidBST({val:0, left:null, right:null}))