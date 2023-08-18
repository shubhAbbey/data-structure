var formatWords = function(beginWord, wordListData, wordList){
    wordListData[beginWord] = []
    for(let j = 0; j < beginWord.length; j++){
            wordListData[beginWord].push(beginWord.replace(beginWord[j], '*'))   
        }
    
    for(let i = 0; i < wordList.length; i++){
        wordListData[wordList[i]] = wordListData[wordList[i]] || []
        for(let j = 0; j < wordList[i].length; j++){
            wordListData[wordList[i]].push(wordList[i].replace(wordList[i][j], '*'))   
        }
    }
    return wordListData
}

var transform = function(beginWord, endWord, wordList, wordListData){
    let queue = [], ladderLen = Infinity, currLen = 0
    queue.push({sWord: beginWord, level: 1})
    while(queue.length){
        let temp = queue.shift()
        if(temp){
            for(let words of wordListData[temp.sWord]){
                for(let letter = 97; letter < 123; letter++){
                    let suggestedWord = words.replace("*", String.fromCharCode(letter))
                    let index = wordList.indexOf(suggestedWord)
                    if(suggestedWord === endWord) {
                        currLen=temp.level+1
                        if(ladderLen > currLen) ladderLen = currLen
                    }
                    if(index!==-1){
                        queue.push({sWord: suggestedWord, level: temp.level+1})
                        wordList.splice(index, 1)
                        currLen = temp.level+1
                    }
                }   
            } 
        }  
    }
    return ladderLen === Infinity ? 0 : ladderLen
}
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)) return 0
    let wordListData = {}
    if(beginWord.length) length = 1
    wordListData = formatWords(beginWord, wordListData, wordList)
    return transform(beginWord, endWord, wordList, wordListData)
};