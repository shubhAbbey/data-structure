var rotate = function(matrix){
let n = matrix.length, m = matrix[0].length


// transpose an array
for(let i = 0; i < n; i++){
    for(let j = i; j < n; j++){
        // swap items corrosponding to each other
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
}
for(let i = 0; i < n; i++){
    let inner1 = 0, inner2 = matrix[i].length-1
    while(inner1<inner2){
        // swap items [i & n-i] to get the result
        [matrix[i][inner1], matrix[i][inner2]] = [matrix[i][inner2], matrix[i][inner1]]
        inner1++
        inner2--
    }

}


// wrong one
// let n = matrix.length
// let layers = n/2
// for(let i = 0; i < layers; i++){
//     let start = layers
//     let end = n-1-i
//     for(let j = start; j < end; j++){
//         // top in temp
//         let temp = matrix[start][i]
//         // left in top
//         matrix[start][i] = matrix[n-1-i][start]
//         // bottom in left
//         matrix[n-1-i][start] = matrix[end][n-1-i]
//         // right in bottom
//         matrix[end][n-1-i] = matrix[i][end]
//         // top in right
//         matrix[i][end] = temp
//     }
// }
console.log(matrix)
}
rotate([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12],
    [13,14,15,16]
])
// matrix[0][j+1]
// matrix[i+1][0]


// [1, 5, 9, 13]
// [2, 6, 10, 14]
// [3, 7, 11, 15]
// [4, 8, 12, 16]

// 1,2,5,3,6,9,4,7,10,13,8,11,14,12,15,16

// 4, 1, 2, 3
// 5, 8, 6, 7
// 9,10,12,11
// 13,14,15,16