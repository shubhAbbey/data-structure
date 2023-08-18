function canConstruct(a) {
    let str = a.join('')
    function permute(s, number){
        if(s.length == 0) {
            console.log(number)
        }
        if(number.length && number.length === a.length && parseInt(number)%3 == 0) return "Yes"
        for(let i = 0; i < s.length; i++){
            let char = s[i],
            left = s.substr(0,i),
            right = s.substr(i+1),
            rest = left+right
            permute(rest, number+char)
        }
    }
    return permute(str, '')
}
