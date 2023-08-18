var isPalindrome = function(s) {
    let newS = s.replace(/[^a-zA-Z0-9]/g, "")
    return newS.split('').reverse().join('').toLowerCase() === newS.toLowerCase()
};


isPalindrome('A man, a plan, a canal: Panama')