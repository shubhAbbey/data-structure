var setZeroes = function(matrix) {
// Time = O(n*n)
// Space = O(1)

   let row = false, col = false, n = matrix.length, m = matrix[0].length


   // checks if any zero in 0th index of each row, if yes then updates the row
   // variable true which later on helps in identifying which row needs to be updated with 0
   // completely

   for(let i = 0; i < n; i++) if(matrix[i][0] == 0) row = true

   // checks if any zero in first row, if yes then updates cols
   // variable true which later on helps in identifying which col needs to be updated with 0
   for(let j = 0; j < m; j++) if(matrix[0][j] == 0) col = true


   // checks if there is any 0 in rest of the matrix, if yes then updates 
   // the 0th index of that row or col will get updated to 0
   for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
   }

   // checks if the any of the 0th col got updated with 0 then 
   // the complete row will gets updated to 0
   for(let i = 1; i < n; i++){
        if(matrix[i][0] == 0){
            for(let j = 1; j < m; j++){
                matrix[i][j] = 0
            }
        }
   }

   // checks if the any of the col from 0th row got updated with 0 then 
   // that col of each row will gets updated to zero
   for(let j = 1; j < m; j++){
        if(matrix[0][j] == 0){
            for(let i = 1; i < n; i++){
                matrix[i][j] = 0
            }
        }
    }

    // if row === true then first col of each row will gets updated to 0
    if(row){
        for(let i = 0; i < n; i++){
            matrix[i][0] = 0
        }
    }

    // if col === true then each element in first row will gets updated to 0
    if(col){
        for(let j = 0; j < m; j++){
            matrix[0][j] = 0
        }
    }
}

var setZeroesWithArrays = function(){
    // ------------------ created 2 different arrays -------------------------
// Time = O(n*n)
// Space = O(n)
let n = matrix.length, m = matrix[0].length

// created row array to get which row needs to be updated with 0 completely
// created col array to get which cols needs to be updated with 0
let row = new Array(n).fill(false), col = new Array(m).fill(false)

// iterate over each element in the grid and checks if there is any 0, if yes then 
// updates the row and col array with 0 in specific endex
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] == 0) {
            row[i] = true
            col[j] = true
        }
    }
}

// iterate over the row array and checks if rows[i] === true then updates the complete row to 0
// and checks if col[j] === true then update the martix[i][j] = 0
for(let i = 0 ; i < row.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        if(row[i]) matrix[i][j] = 0
        else if(col[j] === true) matrix[i][j] = 0
    }
}
}
setZeroes(
    [
        [0,1,2,0],
        [3,4,5,2],
        [1,3,1,5]
    ])