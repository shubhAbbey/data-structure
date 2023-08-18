var isValid = function(s) {
    let stack = [], i = 0, brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    while(i < s.length){
        if(s[i] === '{' || s[i] === '[' || s[i] === '('){
            stack.push(s[i])
            i++
        }else {
            let curr = stack.pop()
            console.log(curr, brackets[s[i]])
            if(curr === brackets[s[i]]) i++
            else return false
        }
    }
    if(stack.length>0) return false
    return true
};

console.log(isValid('{{}[][[[]]}'))


// Can also perform from middle to left and right