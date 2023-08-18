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

class Graph {
    constructor(){
        this.adjecentList = {}
    }
    addVertex(vertex){
        if(!this.adjecentList[vertex]) this.adjecentList[vertex] = []
    }
    addEdges(vertex1, vertex2, weight){
        this.adjecentList[vertex1].push({node: vertex2, weight})
        this.adjecentList[vertex2].push({node: vertex1, weight})
    }
    removeVertex(vertex){
        while(this.adjecentList[vertex].length){
            let adjecentVertex = this.adjecentList[vertex].pop().node
            this.removeEdges(adjecentVertex, vertex)
        }
        delete this.adjecentList[vertex]
    }
    removeEdges(vertex1, vertex2){
        this.adjecentList[vertex1] = this.adjecentList[vertex1].filter(item=>item.node !== vertex2)   
    }
    dijkstra(start, end){
        let nodes = new PriorityQueue()
        let distance = {} // stores the updated distances
        let previous = {} // stores the previous node from where we reached the current node
        let path = [] // stores tha shortest path from source to destination
        let smallest // stores the smallest value from all the neighbours
        for(let vertex in this.adjecentList){
            previous[vertex] = null
            if(vertex === start) {
                distance[vertex] = 0
                nodes.enqueue(vertex, 0)
            }
            else {
                distance[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
        }
        while(nodes.values.length){
            smallest = nodes.dequeue().val
            if(smallest === end){
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }
            if(smallest || distance[smallest] !== Infinity){
                for(let neighbour in this.adjecentList[smallest]){
                    //find neighbouring node
                    let nextNode = this.adjecentList[smallest][neighbour]
                    // calculate smallest distance to neighbouring node
                    let candidate = distance[smallest]+nextNode.weight
                    if(candidate < distance[nextNode.node]){
                        //updating new smaller distance to neighbour
                        distance[nextNode.node] = candidate
                        // updating previous - How we got to next neighbour
                        previous[nextNode.node] = smallest
                        // enqueue priority queue with new priority
                        nodes.enqueue(nextNode.node, candidate)
                    }
                    
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}
let dij = new Graph()
dij.addVertex("A")
dij.addVertex("B")
dij.addVertex("C")
dij.addVertex("D")
dij.addVertex("E")
dij.addVertex("F")

dij.addEdges("A", "B", 4)
dij.addEdges("A", "C", 2)
dij.addEdges("C", "F", 4)
dij.addEdges("C", "D", 2)
dij.addEdges("D", "F", 1)
dij.addEdges("D", "E", 3)
dij.addEdges("F", "E", 1)
dij.addEdges("B", "E", 3)

console.log(dij.dijkstra("A", "E"))