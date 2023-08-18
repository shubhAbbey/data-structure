// static int maxHeight(Node root){
//     if (root == null)
//             return 0;
//         else
//         {
//             int lDepth = maxHeight(root.left);
//             int rDepth = maxHeight(root.right);
  
//             if (lDepth > rDepth)
//                 return (lDepth+1);
//              else
//                 return (rDepth+1);
//         }
// }
// 	public static int height(Node root) {
//         int height = maxHeight(root);
//         return height-1;
//     }
// function maxHeight(root){
// if(root === null) return 0
//     else {
//         let left = maxHeight(root.left)
//         let right = maxHeight(root.right)

//         return left > right ? left+1 : right+1
//     }
// }
// function height(root){
//     let h = maxHeight(root)
//     return h-1
// }

// public static void levelOrder(Node root) {
// Queue<Node> queue=new LinkedList<>();
//     queue.add(root);
//     while(!queue.isEmpty()) {
//         Node tempNode=queue.poll();
//         System.out.print(tempNode.data+" ");
//         if(tempNode.left!=null)
//             queue.add(tempNode.left);
//         if(tempNode.right!=null)
//             queue.add(tempNode.right);
//     }
// }
function Node(data){
    this.data = data
    this.left = null
    this.right = null
}
// public static Node insert(Node root,int data) {
//     if(root == null){
//         return new Node(data);
//     }else{
//     Node node  = new Node(data);
//     Node prev=null;
//     Node temp=root;
//     while(temp!=null){
//         if(temp.data>data){
//             prev = temp;
//             temp = temp.left;
//         }else if(temp.data<data){
//             prev = temp;
//             temp = temp.right;
//         }
//     }
//     if(prev.data>data){
//         prev.left = node;
//     }else prev.right=node;
//     return root;
//     }
// }

// function insert(root, data){
//     if(root == null) return new Node(data)
//     else {
//         let node = new Node(data)
//         let prev = null
//         let temp = root
//         while(temp != null){
//             if(data<temp.left){
//                 prev = temp
//                 temp = temp.left
//             }else if(data>temp.left){
//                 prev = temp
//                 temp = temp.right
//             }
//         }
//         if(data<prev.data){
//             prev.left = node
//         }else if(data>prev.data) prev.right = node
//         return root
//     }
// }

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
function inOrder(root){
    if(!root){
        return;
    }
    
    inOrder(root.left)
    console.log("=====>",root.data)
    // inOrder(root.right)
    
}
let root1 = null
root1 = insert(root1,4)
insert(root1,2)
insert(root1,3)
insert(root1,1)
insert(root1,7)
insert(root1,6)
insert(root1,6)
// insert(root1,11)
insert(root1,8)
insert(root1,5)
// insert(root1,9)
// insert(root1,0)


inOrder(root1)

// void decode(String s, Node root) {
//     String result = new String();
//     Node node = root;
//     for(int i = 0; i < s.length(); i++){
//         node = s.charAt(i) == '1' ? node.right: node.left;
//         if(node.left == null && node.right== null){
//         result+=node.data;
//         node = root;   
//         }
//     }
//     System.out.println(result);
// }