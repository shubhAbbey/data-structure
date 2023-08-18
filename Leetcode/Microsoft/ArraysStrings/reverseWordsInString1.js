var reverseWords = function(s) {
    let arr = s.split(" "), i = 0, j = arr.length-1, index = 0
    while(i < j){
        if((arr[i] || arr[j]) != " "){
            index++
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
    return arr.join(" ").replace(/\s+/g, ' ').trim()
};