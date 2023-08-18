var maxArea = function(height) {
    let n = height.length, i = 0, j = n-1, max = 0
    while(i<=j){
        let area = Math.min(height[i], height[j])*(j-i)
        max = Math.max(max, area)
        if(height[i] < height[j]) i++
        else j--
    }
    return max
};