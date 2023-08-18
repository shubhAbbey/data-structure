// function Node(data){
//     this.data = data
//     this.right = null
//     this.left = null
// }
// let root = null
// function triplets(arr){
//     let suffix = [], n = arr.length
//     for(let i = n-1; i >= 0; i--){
//         if(i===n-1) suffix[i] = arr[i]
//         else suffix[i] = Math.max(suffix[i+1],arr[i])
//     }
//     let max = 0
//     insert(arr[0])
//     for(let i = 1; i < n; i++){
//         console.log(arr[i],"!==", suffix[i])
//         if(arr[i] !== suffix[i]){
//             insert(arr[i])
//             let data=[]
//             inOrder(root, arr[i], data)
//             if(data.length){
//             max=Math.max(data[data.length-1]+arr[i]+suffix[i], max)
//             }
//         }
//     }
//     return max
    // while(i<n) {
    //     let triplet = [], j=i+1
    //     // if( n-i-1 >= 3){
    //         triplet.push(prefix[i].val)
    //         while(triplet.length<3 && j<n){
    //             if(prefix[i].id < prefix[j].id){
    //                 console.log("======>", n-i)
    //                 triplet.push(prefix[j].val)
    //             }
    //             j++
    //         }
    //     // }
    //     console.log("---------",triplet)
    //     var sum = triplet.length === 3 ? triplet.reduce((a,b)=>a+b) : 0
    //     maxArr.push(sum)
    //     console.log("ssssss", sum)
    //     i++
    // }
    // console.log(Math.max(...maxArr))
    // return Math.max(...maxArr)
// }
// function Node(data){
//     this.data = data
//     this.left = null
//     this.right = null
// }

let obj = {
	solve : function(arr){
        let root = null
        function Node(data){
            this.data = data
            this.left = null
            this.right = null
        }
        let suffix = [], n = arr.length
    for(let i = n-1; i >= 0; i--){
        if(i===n-1) suffix[i] = arr[i]
        else suffix[i] = Math.max(suffix[i+1],arr[i])
    }
    let max = 0
    insert(arr[0])
    for(let i = 1; i < n; i++){
        if(arr[i] !== suffix[i]){
            insert(arr[i])
            let data=[]
            inOrder(root, arr[i], data)
            if(data.length){
            max=Math.max(data[data.length-1]+arr[i]+suffix[i], max)
            }
        }
    }
    function insert(key){
        root = insertRec(key, root)
    }
    function insertRec(x, root){
    if(root === null){
        root = new Node(x)
        return root
    }
    if(x < root.data) root.left = insertRec(x, root.left)
    else if(x > root.data) root.right = insertRec(x, root.right)
    return root
    }
function inOrder(root, key, data){
    if(!root) return;
        inOrder(root.left, key, data)
        if(root.data < key) data.push(root.data)
        else return;
        inOrder(root.right, key, data)
    }
    console.log(max)
    return max
	}
}
// var arr = [ 18468, 6335, 26501, 19170, 15725, 11479, 29359, 26963, 24465, 5706, 28146, 23282, 16828, 9962, 492, 2996, 11943, 4828, 5437, 32392, 14605 ]
var arr = [ 154, 293, 12383, 17422, 18717, 19719, 19896, 5448, 21727, 14772, 11539, 1870 ]
// var arr = [2, 5, 3, 1, 4, 9]
// 14 24 16 14 23 34
obj.solve(arr)

// function insert(key){
//     root = insertRec(key, root)
// }
// function insertRec(x, root){
//     if(root === null){
//         root = new Node(x)
//         return root
//     }
//     if(x < root.data) root.left = insertRec(x, root.left)
//     else if(x > root.data) root.right = insertRec(x, root.right)
//     return root
// }
// function searchLeft(key){
//     return search(root, key)
// }
// function search(root, key){
//     if(root.data === key) return root.left
//     else{
//         if(key<root.data) return search(root.left, key)
//         else if(key>root.data) return search(root.right, key)
//     }
// }
// function inOrder(root, key, data){
//     if(!root) return;
//         inOrder(root.left, key, data)
//         if(root.data < key) data.push(root.data)
//         else return;
//         inOrder(root.right, key, data)
// }