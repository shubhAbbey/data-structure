var reverse = function(s, left, right){
    while(left<right){
        [s[left],s[right]] = [s[right],s[left]]
        left++
        right--
    }
}
var reverseArray = function(s){
    let i = 0, j = 0, n=s.length
    while(i < n){
        while(j<n && s[j]!==' ' ) j++
        reverse(s,i,j-1)
        i=j+1
        j++
    }
    
}
var reverseWords = function(s) {
    reverse(s,0,s.length-1)
    console.log(s)
    reverseArray(s)
};

reverseWords(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"])