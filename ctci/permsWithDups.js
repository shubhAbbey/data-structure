
function constructHT(str){
    let ht = {}
    for(let i = 0; i < str.length; i++){
        ht[str[i]] = ht[str[i]] || 0
        ht[str[i]]++
    }
    return ht
}
function perms(str){
    let result = []
    let map = constructHT(str)
    result = constructPerms(map, "", str.length, result)
    return result
}

function constructPerms(map, prefix, rem, result){
    if(rem === 0){
        result.push(prefix)
        return prefix
    }
    for(let keys in map){
        let count = map[keys]
        if(count > 0){
            map[keys] = count-1
            console.log("=========",keys, map[keys])
            constructPerms(map, prefix+keys, rem-1, result)
            map[keys] = count
            console.log("))))))))",keys,map[keys])
        }
    }
    return result
}

// console.log(
    perms('aba')
    // , c)