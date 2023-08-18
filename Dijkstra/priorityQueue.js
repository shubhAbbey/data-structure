class PriorityQueue {
    constructor(){
        this.values = []
    }
    enqueue(val, priority){
        this.values.push({val, priority})
        this.bubbleUp()
    }
    dequeue(){
        let min = this.values[0]
        this.values[0] = this.values.pop()
        this.captureDown()
        return min
    }
    bubbleUp(){
        let lastVal = this.values.length-1
        let parent = Math.floor((this.values.length-1)/2)
        while(this.values[lastVal].priority < this.values[parent].priority){
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
                if(leftChild.priority < element.priority){
                    swap = leftIdx
                }
            }

            if(rightIdx < length){
                rightChild = this.values[rightIdx]
                if(
                    (rightChild.priority < element.priority && swap === null) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
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
let pQ = new PriorityQueue()
pQ.enqueue(20)
pQ.enqueue(30)
pQ.enqueue(40)
pQ.enqueue(50)
pQ.enqueue(10)
pQ.enqueue(60)
pQ.enqueue(15)
pQ.enqueue(12)
pQ.dequeue()
console.log(pQ.values)