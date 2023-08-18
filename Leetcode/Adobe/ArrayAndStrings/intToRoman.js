var intToRoman = function(num) {
    let data = [
        ["I", 1], ["IV", 4], ["V", 5], ["IX", 9],["X", 10], ["XL", 40], ["L", 50], ["XC", 90], ["C", 100],
        ["CD", 400], ["D", 500], ["CM", 900], ["M", 1000]
    ]
    let res = ""
    while(num)
    for(let i = data.length-1; i >= 0; i--){
        let [sym, val] = data[i]
        let prefix = Math.floor(num/val)
        if(prefix){
            for(let j = 0; j < prefix; j++){
                res+=sym
            }
        }
        num=num%val
    }
    return res
};