// class Solution{
//     solve(N, Q, Edge, query){
//         let hashMap = {}, visited = new Set()
//         for(let i = 0; i < N; i++){
//             hashMap[i] = []
//         }
//         for(let i = 0; i < Edge.length; i++){
//             let [row, col] = Edge[i]
//             hashMap[row].push(col)
//             hashMap[col].push(row)
//         }
//         let maxDist = []
//         function dfs(elem, qr, qc, max){
//             if(visited.has(elem) || (qr == elem && qc == hashMap[elem])) return 0
//             visited.add(elem)
//             for(let el of hashMap[elem]){
//                 max = 1+dfs(el, qr, qc, max)   
//             }
//             return max
//         }
//         for(let i = 0; i < query.length; i++){
//             maxDist[i] = maxDist[i] || 0
//             let currDist = 0
//             let [row, col] = query[i]
//             for(let keys in hashMap){
//                 visited.add(parseInt(keys))
//                 for(let elem of hashMap[keys]){
//                 if(row !== keys && col !== elem){
//                     maxDist[i] = Math.max(maxDist[i], dfs(elem, row, col, currDist))
//                 }
//                 }
//             }
//             visited = new Set()
//         }
//         console.log(maxDist)
//         return maxDist
//     }
// }

// let sol = new Solution()
// let edge = [
//    [9, 1]
// [5, 7],
// [0, 2],
// [7, 8],
// [0, 8],
// [1, 2],
// [2, 6],
// [4, 8],
// [0, 3],
// [4, 8],
// ]
// let q = [
//     [1,4]
// ]
// sol.solve(9, 1, edge, 1)

// class Solution{
    function solve(n,a, x){
        x.sort((a,b) => a-b)
        console.log(x)
           let max = 0
           let left = 0, right = n-1
           while(left < right){
               max = Math.max(max, (x[left]-a)+(x[right]-a))
               if(x[left] < x[right]){
                   left++
               }else {
                   right--
               }
           }
           return max
    }
// }

console.log(solve(10, 7, [9, 9, 3, 1, 7, 9, 5, 6, 5, 4]))