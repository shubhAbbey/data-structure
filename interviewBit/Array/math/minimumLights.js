function minimumLights(A, B){
    let count=0;
    let i = 0, n = A.length
    while(i<n){
        let right = Math.min(i+B-1, n-1),
        left = Math.max(i-B+1, 0),
        bulbFound=false
        while(right>left){
            if(A[right]===1) {
                bulbFound=true
                break;
            }else right--
        }
        if(!bulbFound) return -1
        count++
        i=right+B
    }
    return count
}
minimumLights(A,B)