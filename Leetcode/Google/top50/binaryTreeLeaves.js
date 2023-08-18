

// DFS without sorting -----> PostOrder Traversal
var findLeaves = function (root) {
  let res = [];
  var getHeight = function (node) {
    if (node === null) return -1;
    let left = getHeight(node.left);
    let right = getHeight(node.right);
    let currHeight = 1 + Math.max(left, right);
    res[currHeight] = res[currHeight] || [];
    res[currHeight].push(node.val);
    return currHeight;
  };
  getHeight(root);
  return res;
};

var findLeavesWithSorting = function (root) {
    let res = [];
    var getHeight = function (node) {
      if (node === null) return -1;
      let left = getHeight(node.left);
      let right = getHeight(node.right);
      let currHeight = 1 + Math.max(left, right);
      res.push([currHeight, node.val])
      return currHeight;
    };
    getHeight(root);
    let height = 0, result = [], i = 0
    res.sort((a,b)=>a[0]-b[0])
    while(i < res.length){
        let nums = []
        while(i < res.length && res[i][0] === height) {
            nums.push(res[i][1])
            i++
        }
        if(i < res.length)
        height = res[i][0]
        result.push(nums)
    }
    return result
  };

  findLeavesWithSorting([1,2,3,4,5])