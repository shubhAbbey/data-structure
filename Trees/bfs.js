// function TreeNode(data){
//     this.data = data
//     this.left = null
//     this.right = null
// }
// const obj = { 
// //param A : integer
// //return an array of TreeNode
//    insert: function(temp, data){
//        var q = [];
//        q.push(temp);
//        while (q.length!=0) {
//            temp = q.pop();
//            if (temp.left == null) {
//                temp.left = new TreeNode(data);
//                break;
//            } else
//                q.push(temp.left);

//            if (temp.right == null) {
//                temp.right = new TreeNode(data);
//                break;
//            } else
//                q.push(temp.right);
//        }
//    },
//    generateTrees : function(A){
//     let newNode = new TreeNode(1), returnedArr = []
//        for(let i = 2; i <= A; i++){
//            this.insert(newNode, i)
//        }
//        this.postOrder(newNode, returnedArr)
//        console.log(returnedArr)
//    },
//    postOrder: function(root, returnedArr){
//        if(root===null) return;
//        this.postOrder(root.left, returnedArr)
//        this.postOrder(root.right, returnedArr)
//     //    returnedArr.push(root.data)
//    }
// };
// var numTrees = function(n) {
//     var dp = [1, 1];
//     for (i = 2; i <= n; i++) {
//       dp[i] = 0;
//       for (j = 1; j <= i; j++) {
//         dp[i] += dp[i - j] * dp[j - 1];
//       }
//     }
//     return dp[n];
//   };
// function insert(root,data){
//     return root = insertRec(root,data)
// }
// function insertRec(root,data){
//     if(!root) return new Node(data)
//     else{
//         if(data<root.data){
//             root.left = insertRec(root.left,data)
//         }else if(data>root.data){
//             root.right = insertRec(root.right, data)
//         }
//         return root
//     }
// }


// function preOrder(root){
//     let current = root, visited = []
//     function rec(root){
//         if(root.right) rec(root.right)
//         if(root.left) rec(root.left)
//         visited.push(root.data)
//     }
//     rec(current)
//     console.log(visited)
//     return visited
// }

// function lca(root,key1,key2){
//     // if(!root) return root
//     // if(((key1<root.data) && (key2>root.data)) || ((key1>root.data) && (key2<root.data))) console.log(root.data)
//     // else{
//     //     if((key1>root.data) && (key2>root.data)) lca(root.right,key1,key2)
//     //     else if((key1<root.data) && (key2<root.data)) lca(root.left, key1,key2)
//     //     else return null
//     // }
//     if(root == null) return root;
//         if(key1>root.data && key2>root.data) return lca(root.right, key1,key2);
//         if(key1<root.data && key2<root.data) return lca(root.left, key1,key2);
//         console.log(root.data)
//         return root;
// }
//          4
//        2   7
//       1 3 6 10
//            8  11
//           5

// function bfs(root){
//     let queue = [], visited = [], node = root
//     queue.push(node)
//     while(queue.length){
//         node = queue.shift()

//         visited.push(node.data)
//         if(node.left) queue.push(node.left)
//         if(node.right) queue.push(node.right)
//     }
//     console.log(visited)
// }

// let root1 = null
// root1 = 
// obj.generateTrees(3)
// console.log(numTrees(3))
// insert(2)
// insert(root1,3)
// insert(root1,1)
// insert(root1,7)
// insert(root1,6)
// insert(root1,10)
// insert(root1,11)
// insert(root1,8)
// insert(root1,5)

// lca(root1,10,11)
  const obj = {
   solve : function(A){
     const arrSquare = []
     for(let i = 0; i < A.length; i++){
       arrSquare.push(A[i]*A[i])
     }
     this.mergeSort(arrSquare, 0, arrSquare.length - 1)
     console.log(arrSquare)
   },
   sortArray: function(arr, l, m, r){
     var n1 = m - l + 1;
     var n2 = r - m;
   
     var L = new Array(n1); 
     var R = new Array(n2);
   
     for (var i = 0; i < n1; i++)
         L[i] = arr[l + i];
     for (var j = 0; j < n2; j++)
         R[j] = arr[m + 1 + j];
     var i = 0;
     var j = 0;
     var k = l;
   
     while (i < n1 && j < n2) {
         if (L[i] <= R[j]) {
             arr[k] = L[i];
             i++;
         }
         else {
             arr[k] = R[j];
             j++;
         }
         k++;
     }
     while (i < n1) {
         arr[k] = L[i];
         i++;
         k++;
     }
     while (j < n2) {
         arr[k] = R[j];
         j++;
         k++;
     }
   },
   mergeSort: function(arr,l, r){
     if(l>=r){
         return;
     }
     var m =l+ parseInt((r-l)/2);
     this.mergeSort(arr,l,m);
     this.mergeSort(arr,m+1,r);
     this.sortArray(arr,l,m,r);
 }
}
obj.solve([-6, -3, -1, 2, 4, 5])