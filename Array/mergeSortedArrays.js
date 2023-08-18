
function mergeSortedArrays(array1, array2){
    let mergedArray = []
    let array1Item = array1[0]
    let array2Item = array2[0]
    let index1 = 0
    let index2 = 0
    if(array1.length === 0){
        return array2
    }
    if(array2.length === 0){
        return array1
    }
    while(array1Item || array2Item){
        if(!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item)
            index1++
            array1Item = array1[index1]
        }else{
            mergedArray.push(array2Item)
            index2++
            array2Item = array2[index2]
        }
    }
    return mergedArray
}

console.log(mergeSortedArrays([1, 2, 4, 8, 9], [2, 4, 5, 8])) 