var decodeString = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++){
        if(s[i]!=="]") stack.push(s[i])
        else{
            let currStr = '', len = '', decodedStr = ''
            while(stack[stack.length-1] !== "[")
                currStr = stack.pop()+currStr
            
            stack.pop()
            
            while(stack.length && !isNaN(stack[stack.length-1]))
                len=stack.pop()+len
            
            for(let m = 0; m < len; m++)
                decodedStr+=currStr
                
            for(let d = 0; d < decodedStr.length; d++)
                stack.push(decodedStr[d])
        }
    }
    return stack.join('')
};