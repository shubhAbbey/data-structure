var totalFruit = function (fruits) {
  let max = 0,
    currMax = 0,
    bucket = [],
    start = 0,
    end = 0,
    trees = {};
  while (end < fruits.length) {
    trees[fruits[end]] = end;
    if (bucket[0] !== fruits[end] && bucket[1] !== fruits[end])
      bucket.push(fruits[end]);
    if (bucket.length > 2) {
      let currStart =
        trees[
          bucket[0] === fruits[end - 1]
            ? bucket.splice(bucket.length - 2, 1)
            : bucket.shift()
        ];
      start = currStart;
      currMax = end - start;
    } else {
      currMax++;
    }
    max = Math.max(max, currMax);
    end++;
  }
  return max;
};
