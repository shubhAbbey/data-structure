var hasCycle = function(head, pos){
    let curr = head
    while(curr){
        if(curr.visited) return true
        curr.visited = true
        curr = curr.next
    }
    return false
};