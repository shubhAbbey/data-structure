function nearestCafe(edges, friends, cafe) {
  let graph = {},
    nodeCount = {};
  for (let i = 0; i < edges.length; i++) {
    let [v1, v2] = edges[i];
    graph[v1] = graph[v1] || [];
    graph[v2] = graph[v2] || [];
    graph[v1].push(v2);
    graph[v2].push(v1);
  }
  for (let i = 0; i < cafe.length; i++) {
    nodeCount[cafe[i]] = -1;
  }
  for (let f = 0; f < friends.length; f++) {
    let queue = [],
    visited = new Set();
    queue.push(friends[f]);
    visited.add(friends[f]);
    let level = 0
    while (queue.length) {
      let size = queue.length
      for (let i = 0; i < size; i++) {
        let currNode = queue.shift();
        for (let edge of graph[currNode]) {
          if (!visited.has(edge)) {
            visited.add(edge);
            queue.push(edge);
          }
        }
        for (let j = 0; j < cafe.length; j++) {
          if (currNode === cafe[i]) {
            nodeCount[cafe[i]] = Math.max(nodeCount[cafe[i]], level);
          }
        }
      }
      level++;
    }
  }
  console.log(nodeCount, graph)
}

let edges = [
    [1, 2],
    [1, 10],
    [2, 11],
    [2, 6],
    [3, 7],
    [7, 8],
    [8, 6],
    [10, 8],
  ],
  friends = [1, 2, 3],
  cafe = [5, 6, 7, 8, 9];
nearestCafe(edges, friends, cafe);
