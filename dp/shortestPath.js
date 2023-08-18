let graph = {
    A: [
        { node: 'B', weight: 2 },
        { node: 'D', weight: 1 },
    ],
    B: [
        { node: 'A', weight: 2 },
        { node: 'C', weight: 3 }, 
        { node: 'E', weight: 5 }
    ],
    C: [
        { node: 'B', weight: 3 },
        { node: 'D', weight: 4 }
    ],
    D: [
        { node: 'A', weight: 1 },
        { node: 'C', weight: 4 }
    ],
    E: [
        { node: 'B', weight: 5 },
        { node: 'F', weight: 7 },
        { node: 'H', weight: 6 }
    ],
    F: [
        { node: 'E', weight: 7 },
        { node: 'G', weight: 8 }
    ],
    G: [
        { node: 'F', weight: 8 },
        { node: 'H', weight: 9 }
    ],
    H: [
        { node: 'E', weight: 6 },
        { node: 'G', weight: 9 }
    ]
}

function findShortestPath(){

}