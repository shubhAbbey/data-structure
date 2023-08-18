var leftHeight = function(root){
    let height = 0
    while(root){
        height++
        root=root.left
    }
    return height
}
var rightHeight = function(root){
    let height = 0
    while(root){
        height++
        root=root.right
    }
    return height
}
var countNodes = function(root) {
    if(root === null) return 0
    let lh = leftHeight(root)
    let rh = rightHeight(root)
    
    if(lh===rh) return (1 << lh) -1
    return 1+countNodes(root.left)+
        countNodes(root.right)
};