var findReplaceString = function(s, indices, sources, targets) {
    let index = 0, hashTable = [] 
    for(let i = 0; i <= indices.length; i++){
        hashTable.push({id:i, val: indices[i]})
    }
    hashTable.sort((a,b)=>b.val-a.val)
    while(index<indices.length){
        if(!sources[index].length) index++
            let subStr = s.substr(hashTable[index].val, sources[hashTable[index].id].length)
            if(subStr === sources[hashTable[index].id]){
                s = s.slice(0, hashTable[index].val) +
                    targets[hashTable[index].id] +
                    s.slice(hashTable[index].val + sources[hashTable[index].id].length)
            }
        index++
    }
    return s
};