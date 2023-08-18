var shortestBridge = function (grid) {
  let dirs = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ],
    visited = new Set(),
    queue = [];
  function isInvalid(row, col) {
    return (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      visited.has(row + "," + col)
    );
  }

  function dfs(row, col) {
    if (isInvalid(row, col) || grid[row][col] != "1") return;
    queue.push([row, col]);
    visited.add(row + "," + col);
    for (let [rr, cc] of dirs) {
      dfs(row + rr, cc + col);
    }
  }

  function bfs() {
    let res = 0

    while (queue.length) {
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let [row, col] = queue.shift();
        for (let dir of dirs) {
          let r = dir[0] + row,
            c = dir[1] + col;
          if (isInvalid(r, c)) continue;
          if (grid[r][c] == "1") return res;
          queue.push([r, c]);
          visited.add(r + "," + c);
        }
      }
      res += 1;
    }
  }
  for (let row = 0; row < grid.length; row++)
    for (let col = 0; col < grid[0].length; col++)
      if (grid[row][col] == "1") {
        dfs(row, col);
        return bfs();
      }
};
