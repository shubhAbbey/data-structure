var Solution = function(w) {
    this.weight = w
    this.total = w.reduce((acc, rest)=>acc+=rest)
    this.lastSum = 0
    this.data = w.map((item, index, arr)=>{
        return (arr[index-1] || 0) + parseInt(item)
    })
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = Math.floor(Math.random()*parseInt(this.total)+1)
    let l = 0, r = this.data.length-1
    while(l < r){
        let mid = Math.floor((l+r)/2)
        if(target > this.data[mid])
            l = mid+1
        else
            r = mid
    }
    return l
};