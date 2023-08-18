var backspaceCompare = function(s, t) {
    return compare(s) === compare(t)
};
var compare = function(s){
    let hashCount = 0
    for(let i = s.length-1; i >=0 ; i--){
        if(s[i]==='#'){
            s = s.slice(0,i)+s.slice(i+1, s.length)
            hashCount++
        }
        else if(hashCount>0 && s[i]!=='#'){
            s = s.slice(0,i)+s.slice(i+1, s.length)
            hashCount--
        }
    }
    return s
}