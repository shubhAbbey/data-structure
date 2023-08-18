// function largestNum(A) {
//     return A
//         .map(String)
//         .sort((a, b) => (a + b) < (b + a) ? 1 : -1)
//         .join('');
    // console.log('A', A)
    // A.sort(function compare(first,second) {
    //     console.log('ffff', first, second)
    //     var firstsecond ='' + first + second;
    //     var secondfirst ='' + second + first;
    //     // console.log('fs',firstsecond)
    //     // console.log('sf',secondfirst)
    //     return secondfirst - firstsecond;
    // })
    // console.log(A)
// }

// console.log(largestNum([3, 30, 34, 5, 9]))
// 330 < 303
const obj = { 
    solve : function(numbers) {
      'use strict';
  
      Array.prototype.fill = function(x) {
        for (var i = 0; i < this.length; i++) {
          this[i] = x;
        }
        return this;
      };
  
      var count = new Array(numbers.length + 1).fill(0);
      var i;
      for (i = 0; i < numbers.length; i++) {
        if (0 <= numbers[i] && numbers[i] < numbers.length) {
          count[numbers[i]]++;
        } else if (numbers[i] >= numbers.length) {
          count[numbers.length]++;
        }
      }
  
      var greater = new Array(count.length).fill(0);
      for (i = greater.length - 2; i >= 0; i--) {
        greater[i] = greater[i + 1] + count[i + 1];
      }
  
      for (i = 0; i < greater.length - 1; i++) {
        if (i == greater[i] && count[i] != 0) {
          return 1;
        }
      }
      return -1;
    },
    waveArray: function(left, right){
        let len1 = left.length,
        len2 = right.length,
        len = len1 + len2,
        arr = new Array(len),
        i = 0,
        l = 0,
        r = 0
        while(i < len){
            if(r === len2 || left[l] < right[r]){
                arr[i] = left[l]
                l++
            }else{
                arr[i] = right[r]
                r++
            }
            i++
        }
        return arr
    },
    merge: function(A){
        if(A.length < 2) return A;
        const mid = Math.floor(A.length/2),
        left = this.merge(A.slice(0, mid)),
        right = this.merge(A.slice(mid))
        return this.waveArray(left, right)
    },
    sample: function(A){
        A.sort((a,b)=> a-b)
        const swap = (i, j) => [A[i], A[j]] = [A[j], A[i]]
        for(let i = 0; i < A.length; i++){
            if(i % 2 === 0){
                if(A[i] < A[i+1]){
                    swap(i, i+1)
                }
            }
        }
        return A
    },
    booking: function(A, B, C){
        A.sort((a,b)=>a-b)
        B.sort((a,b)=>a-b)
        console.log(A)
        console.log(B)
        let count = 0,
        l = 0,
        r = 0
        while(l < A.length && r < B.length){
            if(A[l] < B[r]){
                l++
                count++
                if(count > C) break;
            }else{
                r++
                count--
            }
        }
        console.log(count)
        if(count > C) return 0
        else return 1
    },
    maxDist: function(A){
        let maxDiff;
        let i, j, n = A.length;
        let RMax = new Array(n),
        LMin = new Array(n)
        LMin[0] = A[0];
        for (i = 1; i < n; ++i)
            LMin[i] = this.min(A[i], LMin[i - 1]);
        RMax[n - 1] = A[n - 1];
        for (j = n - 2; j >= 0; --j)
            RMax[j] = this.max(A[j], RMax[j + 1]);
        i = 0;
        j = 0;
        maxDiff = -1;
        while (j < n && i < n) {
            if (LMin[i] <= RMax[j]) {
                maxDiff = this.max(maxDiff, j - i);
                j = j + 1;
            }
            else
                i = i + 1;
        }
  
        return maxDiff;
    },
    min: function(x, y){
        return x < y ? x : y
    },
    max: function(x, y){
        return x > y ? x : y
    }
  };
  console.log(obj.maxDist([3, 5, 4, 2]))
  
const rotate = (a) => {
    var n=a.length;
        for (var i=0; i<n/2; i++) {
            for (var j=i; j<n-i-1; j++) {
                var tmp=a[i][j];
                a[i][j]=a[n-j-1][i];
                a[n-j-1][i]=a[n-i-1][n-j-1];
                a[n-i-1][n-j-1]=a[j][n-i-1];
                a[j][n-i-1]=tmp;
            }
        }
        return a;
    // let [a, b] = A
    // for(let i = A.length-1; i >=0 ; i--){
    //     if(A[i+1]){
    //         A[i].unshift(A[i+1][0])
    //         A[i+1].push(A[i][A[i].length-1])
    //         A[i].pop()
    //         A[i+1].shift()
    //     }
    // }
    // return A
    
    // for(let i = 0; i < A.length; i++){
    //     if(A[i+1]){
    //         A[i].unshift(A[i+1][0])
    //         A[i+1].push(A[i][A[i].length-1])
    //         A[i].pop()
    //         A[i+1].shift()
    //     }
    // }
    // return A[0].map((val, index) => A.map(row => row[index]).reverse())
}

// console.log(rotate([
//     [1, 2], 
//     [3, 4]
// ]))
// console.log(rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]))

  // 4, 1, 2
  // 7, 5, 6
  // 8, 9, 3