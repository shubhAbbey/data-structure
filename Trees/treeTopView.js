//  //new class to store level of each node along with the node 
//  static class QueueNode{
//     Node node;
//     int level;
//     public QueueNode(Node node, int level){
//         this.node = node;
//         this.level = level;
//     }
// }


// public static void topView(Node root) {
//     //took a queue - similar to BFS approach
//     Queue<QueueNode> queue = new LinkedList<QueueNode>();
   
//     //Taking a TreeMap<first, second>
//     //first - stores the level of the node
//     

//     TreeMap<Integer, Integer> map = new TreeMap<Integer, Integer>();
// //why TreeMap? Because I want the nodes to be sorted from leftmost to rightmost
    
//     //start (since root, level = 0)
//     queue.add(new QueueNode(root, 0));
    
//     while(!queue.isEmpty()){
//         //remove element from queue
//         QueueNode r = queue.poll();
//         //if the level of this node has never been reached before -> visible in top view
//         if(!map.containsKey(r.level)){
//             map.put(r.level, r.node.data);
//         }
        
//         //add node's descendants
//         //all left child node levels = node.level - 1
//         //all right child node levels = node.level + 1
//         if(r.node.left != null){
//             queue.add(new QueueNode(r.node.left, r.level - 1));
//         }
//         if(r.node.right != null){
//             queue.add(new QueueNode(r.node.right, r.level + 1));
//         }
//     }
//     //since already sorted (cuz TreeMap), print from left to right
//     for (Integer value : map.values()) {
//         System.out.print(value + " ");
//     }
// }


class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class QueueNode{
    constructor(node, level){
        this.node = node;
        this.level = level;
    }
}

function insert(root,data){
    return root = insertRec(root,data)
}
function insertRec(root,data){
    if(!root) return new Node(data)
    else{
        if(data<root.data){
            root.left = insertRec(root.left,data)
        }else if(data>root.data){
            root.right = insertRec(root.right, data)
        }
        return root
    }
}

function topView(root){
    let visited = {}, queue = [], q;
    queue.push(new QueueNode(root,0));
    while(queue.length > 0){
        q = queue.shift();
        visited[q.level] = q.node.data;
        if(q.node.left) queue.push(new QueueNode(q.node.left,q.level-1));
        if(q.node.right) queue.push(new QueueNode(q.node.right,q.level+1));
    }
    let v = []
    for(let keys in visited){
        v.push(visited[keys])
    }
    console.log(v.join(" "))
}


let root1 = null
root1 = insert(root1,4)
insert(root1,3)
insert(root1,2)
insert(root1,1)
insert(root1,5)
insert(root1,6)
insert(root1,15)
insert(root1,16)
insert(root1,17)
insert(root1,7)
insert(root1,8)
insert(root1,9)
insert(root1,10)
insert(root1,11)
insert(root1,12)
insert(root1,13)

topView(root1)