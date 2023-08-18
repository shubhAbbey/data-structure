let arr = [12, 35, [1, 10, [34, 1]]]
let result = []
const flatArr = function(){
    let queue = [arr[0]], i=1
    while(queue.length){
        let temp = queue.shift()
        if(temp)
        if(temp.length){
            let j = 0
            while(j < temp.length) {
                queue.push(temp[j])
                j++
            }
        }else {
            result.push(temp)
            queue.push(arr[i])
        }
        i++
    }
    return result
}

console.log(flatArr())