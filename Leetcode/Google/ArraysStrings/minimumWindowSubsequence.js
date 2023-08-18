
var minWindow = function(s1, s2) {
  let right = 0, startS2 = 0, backtrackIndex = Infinity, minLength = Infinity, subSequence = "", currSeq = ""
  while(right <= s1.length){
      if(startS2 < s2.length){
          if(s1[right] === s2[startS2]){
              currSeq += s1[right]
              right++
              startS2++
          }else {
              if(currSeq) currSeq+=s1[right]
              if(s2[0] === s1[right]) backtrackIndex = Math.min(backtrackIndex, right)
              right++
            }
      }else{
          if(backtrackIndex !== Infinity) right = backtrackIndex-1
          if(minLength > currSeq.length){
            subSequence = currSeq
            minLength = currSeq.length
          }
          right++
          currSeq = ""
          startS2 = 0
          backtrackIndex = Infinity
      }
  }
  return subSequence
};

console.log(minWindow(
    "ffynmlzesdshlvugsigobutgaetsnjlizvqjdpccdylclqcbghhixpjihximvhapymfkjxyyxfwvsfyctmhwmfjyjidnfryiyajmtakisaxwglwpqaxaicuprrvxybzdxunypzofhpclqiybgniqzsdeqwrdsfjyfkgmejxfqjkmukvgygafwokeoeglanevavyrpduigitmrimtaslzboauwbluvlfqquocxrzrbvvplsivujojscytmeyjolvvyzwizpuhejsdzkfwgqdbwinkxqypaphktonqwwanapouqyjdbptqfowhemsnsl"
,"ntimcimzah"
// "abcdebdbde"
// ,"bde"
)) 