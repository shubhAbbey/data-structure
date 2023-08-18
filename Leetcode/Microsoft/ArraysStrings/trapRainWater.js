var trap = function(height) {
    if(height.length < 3) return 0
    let leftArr = [], rightArr = [], i = 1, max=0, waterCount = 0
    leftArr[0] = height[0]
    rightArr[height.length-1] = height[height.length-1]
    // while(i < height.length){
    //     max=Math.max(max, height[i])
    //     leftArr.push(max)
    //     i++
    // }
    // i = height.length-1
    // max=height[height.length-1]
    // while(i >= 0){
    //     max=Math.max(max, height[i])
    //     rightArr[i]=max
    //     i--
    // }
    while(i<height.length){
        leftArr[i] = Math.max(leftArr[i-1], height[i])
        i++
    }
    i=height.length-2
    while(i>=0){
        rightArr[i] = Math.max(rightArr[i+1], height[i])
        i--
    }
    console.log(leftArr, rightArr, height)
    for(let i = 0; i < leftArr.length; i++){
        waterCount+=Math.min(leftArr[i], rightArr[i]) - height[i]
    }
    console.log(waterCount)
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])

//        ||
//   ||   ||
//================= 

0
0
