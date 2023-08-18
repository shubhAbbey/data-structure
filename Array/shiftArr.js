// function swap(A, i, j){
//     var temp;
//     while(i<=j){
//         temp = A[i];
//         A[i] = A[j];
//         A[j] = temp;
//         i++;
//         j--;
//     }
// }

// function rotateArray(A, B){
//     if(B < 1){
//         return A;
//     } else{
//         B = B%A.length;
//     }
//     swap(A, B, A.length-1);
//     swap(A, 0, B-1);
//     swap(A, 0, A.length -1);
//     return A;
// }

// function rotateArray(A, B){
//     let n = B % A.length;
//     return A.slice(n).concat(A.slice(0, n));
// }
// console.log(rotateArray([2,3,4,5,6],1))

Array.prototype.shift2 = function () {
  let removedValue = this[0];
  for (let i = 1; i < this.length; i++) {
    let j = i - 1;
    if (this[i + 1]) [this[j], this[i]] = [this[i], this[i + 1]];
    else this.length = this.length - 1;
  }
  return removedValue;
};
Array.prototype.unshift2 = function (val) {
  if (val) {
    for (let i = this.length - 1; i >= 0; i--) {
      [this[i + 1]] = [this[i]];
    }
    this[0] = val;
  } else console.log("Array.unshift2 requires 1 parameter");
};
// let d = [2,3,4,5,6]
// // d.unshift(10)
// console.log(d.unshift2(15))
// console.log(d)

// function spiralOrder(A){
//     return order(A,[])
// //     const arr = [];
// //     let i = 0
// //  while (A.length) {
// //      if(A[i] && A[i].length > 1)
// //    arr.push(
// //      ...A.shift(),
// //      ...A.map(a => a.pop()),
// //      ...(A.pop() || []).reverse(),
// //      ...A.map(a => a.shift()).reverse()
// //    )
// //    else arr.push(...A.shift())
// //    i++
// //  }
// //  console.log(arr)
// //  return arr;
// }
// function order(A,arr){
//     if (A.length == 0) {
//     return arr;
// }

// arr = arr.concat(A.shift());

// A.forEach(function(rightEnd) {
//     arr.push(rightEnd.pop());
// });

// arr = arr.concat((A.pop() || []).reverse());

// var tmp = [];
// A.forEach(function(leftEnd) {
//     leftEnd[0] && tmp.push(leftEnd.shift());
// });
// arr = arr.concat(tmp.reverse());
// return order(A,arr)
// }

// function spiralOrder(A) {
//       let arr = []
//       let i = 0
//   while (A.length) {
//       if(A[i] && A[i].length)
//     arr.push(
//       ...A.shift(),
//       ...A.map((a) => a.pop()),
//       ...(A.pop() || []).reverse(),
//       ...A.map((a) => a.shift()).reverse()
//     );
//     else arr.push(...A.shift())
//     i++
//   }
//       console.log(arr)
// }
// function spiralOrder(A) {
//   var row = (currentRow = A.length),
//     column = (currentColumn = A[0].length),
//     arr = [];

//   while (currentRow > row / 2) {
//     // traverse row forward
//     for (var i = column - currentColumn; i < currentColumn; i++) {
//       arr.push(A[row - currentRow][i]);
//     }

//     // traverse column downward
//     for (var i = row - currentRow + 1; i < currentRow; i++) {
//       arr.push(A[i][currentColumn - 1]);
//     }

//     // traverse row backward
//     for (var i = currentColumn - 1; i > column - currentColumn; i--) {
//       arr.push(A[currentRow - 1][i - 1]);
//     }

//     // traverse column upward
//     for (var i = currentRow - 1; i > row - currentRow + 1; i--) {
//       arr.push(A[i - 1][column - currentColumn]);
//     }

//     currentRow--;
//     currentColumn--;
//   }
//   console.log(arr);
// }
// function spiralOrder(A){
//     let arr = []
//     function spiral (A,arr) {
//     if(A.length && A[0].length) {
//         A[0].forEach(entry => { arr.push(entry)})
//         A.shift();
//         A.forEach(item => {
//             arr.push(item.pop())
//         });
//         return spiral(reverse(A),arr)
//     }
//     return arr
// }
// function reverse(A) { 
//     A.forEach(item => { 
//         item.reverse() 
//     }); 
//     A.reverse(); 
//     return A; 
// }
// return spiral(A,arr)
//   }
// console.log(spiralOrder([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
//   [13, 14, 15],
// ]));

// function maxNum(A){
//   let arr = []
//   let subArray = []
//   let sum = 0
//   for(let i = 0; i < A.length; i++){
//     if(A[i] > -1) {
//       subArray.push(A[i])
//       sum = sum + A[i]
//       if(!A[i+1]){
//         let obj = {}
//       obj.id = sum
//       obj.value = subArray
//       arr.push(obj)
//       }
//     }else{
//       let obj = {}
//       obj.id = sum
//       obj.value = subArray
//       arr.push(obj)
//       subArray = []
//       sum = 0
//     }
//   }
//   let max = 0
//   maxArr = []
//   arr.sort((a,b)=>a.id-b.id)
//   for(let i = 0; i < arr.length; i++){
//       if(max < arr[i].id){
//         max = arr[i].id
//         maxArr = arr[i].value
//       }else if(max === arr[i].id){
//         if(maxArr.length < arr[i].value.length){
//           max = arr[i].id
//           maxArr = arr[i].value
//         }else if(maxArr.length === arr[i].value.length){
//           if(arr[i].value[0] < maxArr[0]) maxArr = arr[i].value
//         }
//       }
//   }
//   return maxArr
// }
// maxNum([ 1, 2, 5, -7, 2, 5 ])

function MaxArSum(A, B){
 let data = []
 let frontSub = B, lastSub = 0
 while(frontSub--){
  let prefix = [], i = 0,j = 0,suffix = [],k = 0,l = 0,m = 0, n = 0
   let arr = A.slice(0,frontSub+1)
   let arr2 = A.slice(A.length - lastSub)
  for(let k = 0; k < arr.length; k++){
    prefix.push({id:i,val: arr[k]})
    i++
  }
  for(let k = 0; k < arr2.length; k++){
    suffix.push({id:j,val: arr2[k]})
    j++
  }
  prefix.sort((a,b)=>a.val-b.val)
  suffix.sort((a,b)=>a.val-b.val)
  m = prefix.length, n = suffix.length
  let sum = 0
  while(m>=0 || n>=0){
    m--
    n--
    if(prefix[m] && suffix[n]) sum = prefix[m].val+suffix[n].val
    else if(prefix[m]) sum = prefix[m].val
    else if(suffix[n]) sum = suffix[n].val
  }
  console.log(sum)
  // let prefixMax = prefix[0].val, suffixMax = []
  // for(let m = 0; m < prefix.length; m++){
  //   if(prefix[m+1]){
  //     prefixMax = Math.max(prefixMax, prefix[m+1].val)
  //     if(prefix[m].id>prefix[m+1].id){
  //       prefixMax = Math.max(prefixMax, prefix[m].val - prefix[m+1].val)
  //     }
  //   }
  // }
  // if(suffix.length){
  //   suffix.sort((a,b)=>a.val-b.val)
  //   suffixMax = suffix[0].val
  //   for(let m = 0; m < suffix.length; m++){
  //     if(suffix[m+1]){
  //       suffixMax = Math.max(suffixMax, suffix[m+1].val)
  //       if(suffix[m].id>suffix[m+1].id){
  //         suffixMax = Math.max(suffixMax, suffix[m].val - suffix[m+1].val)
  //       }
  //     }
  //   }
  //   data.push(suffixMax)
  // }
  data.push(sum)
  lastSub = B-frontSub
 }
 console.log(Math.max(...data))
}


MaxArSum([ -533, -666, -500, 169, 724, 478, 358, -38, -536, 705, -855, 281, -173, 961, -509, -5, 942, -173, 436, -609, -396, 902, -847, -708, -618, 421, -284, 718, 895, 447, 726, -229, 538, 869, 912, 667, -701, 35, 894, -297, 811, 322, -667, 673, -336, 141, 711, -747, -132, 547, 644, -338, -243, -963, -141, -277, 741, 529, -222, -684, 35 ],48)