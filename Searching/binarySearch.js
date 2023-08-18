

function binarySearch(arr, len, val){
    let max = len-1
    let min = 0

    let mid, step = 0
    while(max>=min){
        mid = Math.floor((max + min) / 2)
        step++
        if(val < arr[mid]){
            max = mid - 1
        }else if(val > arr[mid]){
            min = mid + 1
        }else{
            console.log(step)
            return mid
        }
    }
    return -1
}

    let arr1 = [0,1,2,3,4,7,8,9,13,15,18,20,25,30,70,71,72,75,80,85]
    let result = binarySearch(arr1, arr1.length, 70)
    console.log(result)