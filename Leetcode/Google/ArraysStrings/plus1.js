var plusOne = function(digits) {
    let carry = 0, n = digits.length-1, mod = 0
    let sum = carry+digits[n]+1
        carry = Math.floor(sum/10)
        mod = sum%10
        digits[n] = mod
    while(carry > 0){
        n--
        if((n < 0) && carry > 0){
            digits.unshift(carry)
        }
        sum = carry+digits[n]
        carry = Math.floor(sum/10)
        mod = sum%10
        digits[n] = mod
    }
    return digits
};