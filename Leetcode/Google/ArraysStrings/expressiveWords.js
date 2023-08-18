var expressiveWords = function(s, words) {
    let result = 0
    for(let word of words){
        let left = 0, right = 0, start = 0, isValid = true, set = new Set()
        while(left < s.length && start < word.length){
            set.add(word[start])
            if(word.length > s.length) isValid = false
            // console.log(word[start], start, right, s[left])
            if(s[left] === word[start]){
                right = left
                while(s[right] === s[right+1]) right++
                let diff = right-left
                if(diff<3 && diff>1 && word[start] !== word[start+1]) {
                    isValid = false
                    left=s.length
                }
                left = right+1
                start++
            }else{
                // console.log(s[left], "===", word[start], word)
                left++
                right++
                isValid = false
                // break
            }
        }
        while(set.has(s[left]) && left<s.length) left++
        if(left !== s.length) isValid = false
        if(isValid) result++
    }
    return result
};