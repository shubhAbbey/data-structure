class PriorityQueue {
    constructor(){
        this.values = []
    }
    add(val){
        this.values.push(val)
        this.bubbleUp()
    }
    remove(){
        let min
        if(this.values.length > 1){
            min = this.values[0]
            this.values[0] = this.values.pop()
            this.captureDown()
        }else min = this.values.pop()
        return min
    }
    peek(){
        return this.values[0]
    }
    size(){
        return this.values.length
    }
    bubbleUp(){
        let lastVal = this.values.length-1
        let parent = Math.floor((this.values.length-1)/2)
        while(this.values[lastVal] < this.values[parent]){
            [this.values[lastVal], this.values[parent]] = [this.values[parent], this.values[lastVal]]
            lastVal = parent
            parent = Math.floor((lastVal)/2)
        }
    }
    captureDown(){
        let idx = 0, length = this.values.length, element = this.values[0]
        while(true){
            let leftIdx = (2*idx)+1, rightIdx = (2*idx)+2,
            leftChild, rightChild, swap = null
            if(leftIdx < length){
                leftChild = this.values[leftIdx]
                if(leftChild < element){
                    swap = leftIdx
                }
            }
            if(rightIdx < length){
                rightChild = this.values[rightIdx]
                if(
                    (rightChild < element && swap === null) || 
                    (swap !== null && rightChild < leftChild)
                ){
                    swap = rightIdx
                }
            }
            if(swap === null) break
            [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]]
            idx = swap
        }
    }
}

var minMeetingRooms = function(intervals) {
    if(intervals.length < 1) return 0
    intervals.sort((a,b)=>a[0]-b[0])
    let pQ = new PriorityQueue()
    for(let interval of intervals){
        if(pQ.size() === 0) pQ.add(interval[1])
        else if(pQ.peek() > interval[0]){
            pQ.add(interval[1])
        }else{
            pQ.remove()
            pQ.add(interval[1])
            console.log(pQ.values)
        }
    }
    return pQ.size()
};

console.log(minMeetingRooms([[7,10],[2,4]]))

// 2,4
// 7,10