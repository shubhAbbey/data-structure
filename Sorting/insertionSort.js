function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let j = i-1; 
            while ((j > -1) && (inputArr[i] < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = inputArr[i];
        }
    return inputArr;
}
console.log(insertionSort([5,7,2,0,13,12,11,10]))
