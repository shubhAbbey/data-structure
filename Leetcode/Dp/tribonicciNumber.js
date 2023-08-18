
var tribonacci = function(n) {
    if(n < 2) return n
    let t1 = 0, t2 = 1, t3 = t1+t2
    for(let i = 3; i <= n; i++){
        let temp = t1+t2+t3
        t1 = t2
        t2 = t3
        t3 = temp
    }
    return t3
};