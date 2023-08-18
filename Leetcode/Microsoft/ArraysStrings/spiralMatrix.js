var spiralOrder = function(matrix) {
    let top = 0, left = 0, right = matrix[0].length-1, bottom = matrix.length-1, dir = 0
    let res = []
    while(top <= bottom && left <= right){
        if(dir == 0){
             // traverse left to right on top and updates the top
            for(let i = left; i <= right; i++) res.push(matrix[top][i])
            top++   
        }else if(dir==1){
            // for right - bottom
            for(let i = top; i <= bottom; i++) res.push(matrix[i][right])
            right--   
        }else if(dir==2){
            // for bottom - left
            for(let i = right; i >= left; i--) res.push(matrix[bottom][i])
            bottom--   
        }else if(dir == 3){
            // for left - top
            for(let i = bottom; i >= top; i--) res.push(matrix[i][left])
            left++   
        }
        // increments the direction after each iteration and make it 0 if it is > than the sides of matrix - 1
        dir=(dir+1)%4
    }
    return res
};

spiralOrder([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    // [13,14,15,16]
])