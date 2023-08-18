var minWindow = function(s, t) {
    if(!s.length || !t.length) return ""
    if(s.length < t.length) return ""
    let windowCount = {}, dictForT = {},left = 0, right = 0, haveCount = 0, neededCount = 0, result = [], length = Infinity
    for(let i = 0; i < t.length; i++){
        dictForT[t[i]] = dictForT[t[i]] || 0
        dictForT[t[i]]++
        windowCount[t[i]] = 0
    }
    neededCount = [...new Set(...t.split())].length
    while(right < s.length || haveCount === neededCount){
        let rightVal = s[right]
        // if haveCount === neededCount then we have got our substring which includes t value
        if(haveCount === neededCount){
            if(right-left < length){
                length = right-left
                result[0] = left
                result[1] = right
            }
            if(windowCount[s[left]] > 0) {
                if(windowCount[s[left]] === dictForT[s[left]]) haveCount--
                windowCount[s[left]]--  
            }
            left++
        }else {
            if(windowCount[rightVal] >= 0){
                windowCount[rightVal]++
                if(windowCount[rightVal] === dictForT[rightVal]) haveCount++
            }
            right++
        }
    }
    console.log(result, left, right)
    if(!result.length) return ""
    return s.slice(result[0], result[1])
};
console.log(minWindow("a","b"))

// ODEBA
//LEFT = 0, RIGHT=0
//A
//AD
//ADO
//ADOB
//ADOBE
//ADOBEC

//LEFT = 1, RIGHT = 6
//DOBECO
//DOBECOD
//DOBECODE
//DOBECODEB
//DOBECODEBA

//LEFT = 2, RIGHT = 11
//OBECODEBA

//LEFT = 3, RIGHT = 12
//BECODEBAN

// haveCount = 1            neededCount = 1
// windowCount = {          dictForT = {
//     a: 1                     a: 1
//     B: 1                     B: 1
//     C: 1                     C: 1
// }                        }