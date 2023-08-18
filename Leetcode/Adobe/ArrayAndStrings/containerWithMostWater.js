var maxArea = function(height) {
    let i = 0, j = height.length-1, max = 0, width = 0, h = 0
    while(i < j){
        if(height[i] < height[j]){
            h = height[i]
            i++
        }else {
            h = height[j]
            j--
        }
        width = j-i+1
        max = Math.max(max, h*width)
    }
    return max
};