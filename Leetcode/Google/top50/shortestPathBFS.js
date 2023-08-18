var getFood = function (grid) {
  let queue = [],
    r = [-1, 0, 1, 0],
    c = [0, 1, 0, -1],
    visited = new Set();
  for (let row = 0; row < grid.length; row++)
    for (let col = 0; col < grid[0].length; col++)
      if (grid[row][col] === "*") queue.push([row, col, 0]);
  while (queue.length) {
    let [row, col, level] = queue.shift();
    visited.add(row + "," + col);
    if (grid[row][col] === "#") return level;
    for (let i = 0; i < 4; i++) {
      let sr = row + r[i],
        sc = col + c[i];
      if (
        sr < 0 ||
        sc < 0 ||
        sr >= grid.length ||
        sc >= grid[0].length ||
        grid[sr][sc] == "X" ||
        visited.has(sr + "," + sc)
      )
        continue;
      queue.push([sr, sc, level + 1]);
      visited.add(sr + "," + sc);
    }
  }
  return -1;
};

var getFood = function (grid) {
  let queue = [],
    r = [-1, 0, 1, 0],
    c = [0, 1, 0, -1],
    visited = new Set(),
    nodesInLeft = 1,
    moveCount = 0,
    nodesleft = 0,
    reachedEnd = false;
  for (let row = 0; row < grid.length; row++)
    for (let col = 0; col < grid[0].length; col++)
      if (grid[row][col] === "*") queue.push([row, col]);
      
  function exploreNbrs(row, col) {
    for (let dir = 0; dir < 4; dir++) {
      let rr = row + r[dir],
        cc = col + c[dir];
      if (
        rr >= 0 &&
        rr < grid.length &&
        cc >= 0 &&
        cc < grid[0].length &&
        grid[rr][cc] != "X" &&
        !visited.has(rr + "," + cc)
      ) {
        queue.push([rr, cc]);
        visited.add(rr + "," + cc);
        nodesleft++;
      }
    }
  }
  while (queue.length) {
    let [row, col] = queue.shift();
    visited.add(row + "," + col);
    if (grid[row][col] === "#") {
      reachedEnd = true;
      break;
    }
    exploreNbrs(row, col);
    nodesInLeft--;
    if (nodesInLeft === 0) {
      nodesInLeft = nodesleft;
      nodesleft = 0;
      moveCount++;
    }
  }
  if (reachedEnd == true) return moveCount;
  return -1;
};
