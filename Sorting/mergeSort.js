const unsortedArr = [
  31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37,
  7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50,
  46, 25, 18, 33, 47, 4, 45, 39, 23, 2,
];

// Function to merge and sort the array
// const merge = (arr1, arr2) => {
//   let sorted = [];

//   while (arr1.length && arr2.length) {
//     if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
//     else sorted.push(arr2.shift());
//   }

//   return sorted.concat(arr1.slice().concat(arr2.slice()));
// };

function merge(arrLeft, arrRight) {
    const len1 = arrLeft.length;
    const len2 = arrRight.length;
    const len = len1 + len2;
    const merged = Array(len);
    // console.log('mergeeee', arrLeft, arrRight)
    let i = 0;
    let l = 0;
    let r = 0;
    while(i < len) {
      if(r === len2 || arrLeft[l] < arrRight[r]) {
        merged[i] = arrLeft[l];
        l++;
      } else {
        merged[i] = arrRight[r];
        r++;
      }
      i++;
    }
    return merged;
  }

// console.log(merge([2, 5, 10, 57], [9, 12, 13]));

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    // console.log('====>',arr)
    return arr;
  }

  // console.log('outside',arr)
  let mid = Math.floor(arr.length / 2),
    left = mergeSort(arr.slice(0, mid)),
    right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
let a = [3,2,1,2,5,1,7,4]
let sorted = mergeSort(a)
console.log(sorted)
