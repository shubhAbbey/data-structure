function radixSort(arr){
    let maxVal = Math.max(...arr).toString(),n = maxVal.length, obj = {}
for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toString()
    obj[i] = []
    while(arr[i].length < maxVal.length) arr[i] = "0"+arr[i]
}
for(let j = n-1; j >= 0; j--){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        obj[arr[i][j]].push(arr[i])
    }
    for(let i = 0; i<arr.length;i++) {
        newArr.push(...obj[i])
        obj[i] =[]
    }
    arr = newArr
}
return arr.map(item=>parseInt(item))
}

console.log(radixSort([5,7,2,0,130,12,11,10]))