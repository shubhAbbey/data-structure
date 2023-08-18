function swap(items, startIndex, endIndex){
    var temp = items[startIndex];
    items[startIndex] = items[endIndex];
    items[endIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        start   = left, //left pointer
        end     = right; //right pointer
    while (start <= end) {
        while (items[start] < pivot) {
            start++;
        }
        while (items[end] > pivot) {
            end--;
        }
        if (start <= end) {
            swap(items, start, end); //sawpping two elements
            start++;
            end--;
        }
    }
    return start;
}
function sortAbsolute(a, start, end) {
    let index;
    if (a.length > 1) {
        index = partition(a, start, end);
        if (start < index - 1) { 
            sortAbsolute(a, start, index - 1);
        }
        if (index < end) {
            sortAbsolute(a, index, end);
        }
    }
    return a;
}
function sortedSubsegments(k, a, queries) {
    let sortedArray = []
    for(let i = 0; i < queries.length; i++){
        let [start,end] = queries[i]
        sortedArray = sortAbsolute(a, start, end);
    }
    return sortedArray[k]
}