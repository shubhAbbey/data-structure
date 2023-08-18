// const maxSubArray = function (A) {
//     let max = A[0];
//     let curr = A[0];

//     for (let i = 1; i < A.length; i++)
//     {
//         curr = Math.max(A[i], curr+A[i]);
//         max = Math.max(max, curr);
//     }
//     return max
// };
// const arr = [
//   -120, -202, -293, -60, -261, -67, 10, 82, -334, -393, -428, -182, -138, -167,
//   -465, -347, -39, -51, -61, -491, -216, -36, -281, -361, -271, -368, -122,
//   -114, -53, -488, -327, -182, -221, -381, -431, -161, -59, -494, -406, -298,
//   -268, -425, -88, -320, -371, -5, 36, 89, -194, -140, -278, -65, -38, -144,
//   -407, -235, -426, -219, 62, -299, 1, -454, -247, -146, 24, 2, -59, -389, -77,
//   -19, -311, 18, -442, -186, -334, 41, -84, 21, -100, 65, -491, 94, -346, -412,
//   -371, 89, -56, -365, -249, -454, -226, -473, 91, -412, -30, -248, -36, -95,
//   -395, -74, -432, 47, -259, -474, -409, -429, -215, -102, -63, 80, 65, 63,
//   -452, -462, -449, 87, -319, -156, -82, 30, -102, 68, -472, -463, -212, -267,
//   -302, -471, -245, -165, 43, -288, -379, -243, 35, -288, 62, 23, -444, -91,
//   -24, -110, -28, -305, -81, -169, -348, -184, 79, -262, 13, -459, -345, 70,
//   -24, -343, -308, -123, -310, -239, 83, -127, -482, -179, -11, -60, 35, -107,
//   -389, -427, -210, -238, -184, 90, -211, -250, -147, -272, 43, -99, 87, -267,
//   -270, -432, -272, -26, -327, -409, -353, -475, -210, -14, -145, -164, -300,
//   -327, -138, -408, -421, -26, -375, -263, 7, -201, -22, -402, -241, 67, -334,
//   -452, -367, -284, -95, -122, -444, -456, -152, 25, 21, 61, -320, -87, 98, 16,
//   -124, -299, -415, -273, -200, -146, -437, -457, 75, 84, -233, -54, -292, -319,
//   -99, -28, -97, -435, -479, -255, -234, -447, -157, 82, -450, 86, -478, -58, 9,
//   -500, -87, 29, -286, -378, -466, 88, -366, -425, -38, -134, -184, 32, -13,
//   -263, -371, -246, 33, -41, -192, -14, -311, -478, -374, -186, -353, -334,
//   -265, -169, -418, 63, 77, 77, -197, -211, -276, -190, -68, -184, -185, -235,
//   -31, -465, -297, -277, -456, -181, -219, -329, 40, -341, -476, 28, -313, -78,
//   -165, -310, -496, -450, -318, -483, -22, -84, 83, -185, -140, -62, -114, -141,
//   -189, -395, -63, -359, 26, -318, 86, -449, -419, -2, 81, -326, -339, -56,
//   -123, 10, -463, 41, -458, -409, -314, -125, -495, -256, -388, 75, 40, -37,
//   -449, -485, -487, -376, -262, 57, -321, -364, -246, -330, -36, -473, -482,
//   -94, -63, -414, -159, -200, -13, -405, -268, -455, -293, -298, -416, -222,
//   -207, -473, -377, -167, 56, -488, -447, -206, -215, -176, 76, -304, -163, -28,
//   -210, -18, -484, 45, 10, 79, -441, -197, -16, -145, -422, -124, 79, -464, -60,
//   -214, -457, -400, -36, 47, 8, -151, -489, -327, 85, -297, -395, -258, -31,
//   -56, -500, -61, -18, -474, -426, -162, -79, 25, -361, -88, -241, -225, -367,
//   -440, -200, 38, -248, -429, -284, -23, 19, -220, -105, -81, -269, -488, -204,
//   -28, -138, 39, -389, 40, -263, -297, -400, -158, -310, -270, -107, -336, -164,
//   36, 11, -192, -359, -136, -230, -410, -66, 67, -396, -146, -158, -264, -13,
//   -15, -425, 58, -25, -241, 85, -82, -49, -150, -37, -493, -284, -107, 93, -183,
//   -60, -261, -310, -380,
// ];
// maxSubArray(arr);
var search = function (nums, target) {
  let i = 0,
    j = nums.length - 1;
  //    while(i<=j){
  //        let mid = i+Math.floor((j-i)/2)
  //        if(target < nums[mid]) j = mid-1
  //        else if(target > nums[mid]) i = mid+1
  //        else return mid
  //    }
  //    return i
  // let l = 0; r = 0,x = nums.length()-1, y = nums.length()-1
  // mid = Math.floor((l+r)/2)
  // if(arr[mid]===target) return mid
  // while(l<r){
  //     let mid = Math.floor((l+r)/2)
  //     if(arr[mid] === target) return mid
  //     else if(target > arr[mid] && target < arr[r]) l = mid+1
  //     else if(target < arr[mid] && target > arr[l]) r = mid-1
  //     else return -1
  // }
  // return -1
  return searchPos(nums, target, i, j);
};
function searchPos(nums, target, i, j) {
  if (i > j) return i;
  let mid = i + Math.floor((j - i) / 2);
  if (arr[mid] == target) return mid;
  if (target <= nums[mid] && target >= nums[i])
    return searchPos(nums, target, i, mid - 1);
  if (target >= nums[mid] && target <= nums[j])
    return searchPos(nums, target, mid + 1, j);
  console.log("=====>", i, j);
}
let arr = [1, 3, 5, 6, 7, 9, 10, 11, 18];
// console.log(search(arr, 20))
var sortedSquares = function (nums) {
  if (nums.length < 2) {
    nums[0] *= nums[0];
    return nums;
  }
  let i = 0,
    neg = [],
    j = 0,
    k = 0,
    mergeArr = new Array(nums.length);
  while (nums[0] < 0) {
    neg.push(nums.shift());
  }
  while (i < neg.length) {
    neg[i] *= neg[i];
    i++;
  }
  i = 0;
  while (i < nums.length) {
    nums[i] *= nums[i];
    i++;
  }
  i = 0;
  neg.reverse();
  if (!nums.length) return neg;
  if (!neg.length) return nums;
  while (i < mergeArr.length) {
    if (k === nums.length || neg[j] < nums[k]) {
      mergeArr[i] = neg[j];
      j++;
    } else {
      mergeArr[i] = nums[k];
      k++;
    }
    i++;
  }
  return mergeArr;
};

var merge = function (nums1, m, nums2, n) {
  if (m == 0) return nums2;
  if (n == 0) return nums1;
  let i = m - 1,
    j = n - 1,
    lastIndex = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[lastIndex] = nums1[i];
      i--;
    } else {
      nums1[lastIndex] = nums2[j];
      j--;
    }
    lastIndex--;
  }
  return nums1;
};
function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}

function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}

/*Function to left rotate arr[] of siz n by d*/
function leftRotate(arr, d, n) {
  /* To handle if d >= n */
  d = d % n;
  let g_c_d = gcd(d, n);
  for (let i = 0; i < g_c_d; i++) {
    /* move i-th values of blocks */
    let temp = arr[i];
    let j = i;

    while (1) {
      let k = j + d;
      if (k >= n) k = k - n; // creating cycle

      if (k == i) break;

      arr[j] = arr[k];
      j = k;
    }
    arr[j] = temp;
  }
  return arr;
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// function rotateList(head, k){
//     if(k<1) return head
//     if(!head) return head
//     if(!head.next) return head
//     let curr = head, next = null, len = 0, count = 0
//     while(curr){
//         len++
//         curr = curr.next
//     }
//     if(k%len===0) return head
//     k = k%len
//     curr = head
//     while(count<(len-k)){
//         if(count==(len-k)-1){
//             next = curr.next
//             curr.next=null
//             break;
//         }
//         count++
//         curr=curr.next
//     }
//     console.log("======",next)
//     curr = head
//     let newData = next
//     while(newData){
//         if(!newData.next){
//             newData.next = curr
//             break;
//         }
//         newData = newData.next
//     }
//     head = next
//     while(next){
//         console.log(next.data)
//         next = next.next
//     }
//     return head
// }

var splitListToParts = function (head, k) {
  let curr = head,
    len = 0,
    parts = new Array(k);
  while (curr) {
    len++;
    curr = curr.next;
  }
  if (k < len) {
    let rem = len % k;
    let pair = (len - rem) / k,
      i = 0;
    parts.fill(pair);
    while (rem) {
      parts[i] += 1;
      i++;
      rem--;
    }
  } else {
    let i = 0;
    while (i < len) {
      parts[i] = 1;
      i++;
    }
    i = k - 1;
    while (!parts[i]) {
      parts[i] = [];
      i--;
    }
  }
  curr = head;
  let newArr = [];
  for (let i = 0; i < parts.length; i++) {
    let count = 0,
      prev = new Node(curr.data);
    while (count < parts[i]) {
      if (count == parts[i] - 1) {
        console.log(curr);
        prev.next = null;
        break;
      }
      curr = curr.next;
      prev.next = insert(prev.next, curr.data);
      prev = prev.next;
      count++;
    }
  }
  console.log(JSON.stringify(newArr));
  return newArr;
};
function insert(node, data) {
  node = new Node(data);
  return node;
}
let head = insert(null, 1);
head.next = insert(null, 2);
head.next.next = insert(null, 3);
head.next.next.next = insert(null, 4);
head.next.next.next.next = insert(null, 5);
// console.log(splitListToParts(head, 4))
// 4,2,3,7,5,6,1
// 4,5,3,7,6,1,2
// 4,5,6,7,2,3,1
var moveZeroes = function (nums) {
  let validNoCount = 0;
  for (let i = 0; i < nums.length; i++)
    if (nums[i] != 0) nums[validNoCount++] = nums[i];
  for (let i = validNoCount; i < nums.length; i++) nums[i] = 0;
};
// moveZeroes()

var twoSum = function (numbers, target) {
  let i = 0,
    j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] > target) j--;
    else if (numbers[i] + numbers[j] < target) i++;
    else return [i + 1, j + 1];
  }
};

var reverseWords = function (s) {
  let sp = s.split(" ");
  for (let i = 0; i < sp.length; i++) {
    let j = 0,
      k = sp[i].length - 1,
      inner = sp[i].split("");
    while (j < k) {
      [inner[j], inner[k]] = [inner[k], inner[j]];
      j++;
      k--;
    }
    sp[i] = inner.join("");
  }
  return sp.join(" ");
};
function twoSumWithoutSorting(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] >= 0) return [obj[nums[i]], i];
    obj[target - nums[i]] = i;
  }
}

// function TreeNode(data){
//     this.data = data
//     this.left = null
//     this.right = null
// }

// function isBst(node, min, max){
//     if(!node) return true
//     if(min && node.data > min) return false
//     if(max && node.data < max) return false

//     return isBst(node.left)
// }
// function insertTree(data){
//     return new Node(data)
// }

// let rootNode = insertTree(3);
// rootNode.left = insertTree(2);
// rootNode.right = insertTree(5);
// rootNode.left.left = insertTree(1);
// rootNode.left.right = insertTree(4);
// console.log(isBst(rootNode))
// console.log(reverseWords("Let's take LeetCode contest"))

var middleNode = function (head) {
  let i = 0,
    j = 0,
    curr = head;
  while (curr) {
    curr = curr.next;
    i++;
  }
  curr = head;
  while (j + 2 < i && curr) {
    curr = curr.next;
    j = j + 2;
  }
  head = curr;
  return head;
};

var removeNthFromEnd = function (head, n) {
  if (!head) return head;
  let count = 1,
    first = head,
    second = head;
  while (count <= n) {
    first = first.next;
    count++;
  }
  if (!first) return head.next;
  while (first.next) {
    first = first.next;
    second = second.next;
  }
  console.log(head);
  let temp = second.next;
  second.next = temp.next;
  return head;
};

function insert(node, data) {
  node = new Node(data);
  return node;
}
let head3 = insert(null, 1);
head3.next = insert(null, 2);
head3.next.next = insert(null, 3);
head3.next.next.next = insert(null, 4);
head3.next.next.next.next = insert(null, 5);
head3.next.next.next.next.next = insert(null, 6);
// console.log(removeNthFromEnd(head3,2))
// var checkInclusion = function (s1, s2) {
//   let left = 0,
//     right = s1.length - 1, count = {count:0, status:false}
//   while (right < s2.length) {
//       count = checkPermutation(s1, s2, left, count)
//     if (count.status) return true;
//     count.count++
//     left++;
//     right++;
//   }
//   console.log(count, s2.length)
//   return false;
// };
// checkPermutation = function (str1, str2, left, count1) {
//   let count = new Array();
//   let i;
//   for (i = 0; str1[i] && str2[i]; i++, left++) {
//     count1.count++
//     count[str1[i]] = count[str1[i]] || 0;
//     count[str1[i]]++;
//     count[str2[left]] = count[str2[left]] || 0;
//     count[str2[left]]--;
//   }
//   for (i = 0; i < str1.length; i++) if (count[str1[i]] != 0) {
//       count1.count++
//       count1.status = false
//       return count1
//   }
//   count1.status = true
//   return count1
// };

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  let s1map = new Array();
  let s2map = new Array();
  for (let i = 0; i < s1.length; i++) {
    console.log(s1.charCodeAt(i));
    s1map[s1.charCodeAt(i) - "a"] = s1map[s1.charCodeAt(i) - "a"] || 0;
    s1map[s1.charCodeAt(i) - "a"]++;
    s2map[s2.charCodeAt(i) - "a"] = s2map[s2.charCodeAt(i) - "a"] || 0;
    s2map[s2.charCodeAt(i) - "a"]++;
  }
  console.log(console.log(s2map));

  let count = 0;
  for (let i = 0; i < 26; i++) if (s1map[i] == s2map[i]) count++;

  for (let i = 0; i < s2.length - s1.length; i++) {
    let r = s2.charCodeAt(i + s1.length) - "a",
      l = s2.charCodeAt(i) - "a";
    if (count == 26) return true;
    s2map[r]++;
    if (s2map[r] == s1map[r]) count++;
    else if (s2map[r] == s1map[r] + 1) count--;
    s2map[l]--;
    if (s2map[l] == s1map[l]) count++;
    else if (s2map[l] == s1map[l] - 1) count--;
  }
  return count == 26;
};

// var floodFill = function(image, sr, sc, newColor) {
//     let source = image[sr][sc], rows = image.length-1, cols = image[sr].length-1
//     if(newColor === source) return image
//     dfs(image, sr, sc, newColor, rows, cols, source)
//     return image
// };
// function dfs(image, sr, sc, newColor, rows, cols, source){
//     if(sr<0 || sr>rows || sc<0 || sc>cols) return;
//     if(image[sr][sc] != source) return;
//     image[sr][sc] = newColor
//     dfs(image, sr-1, sc, newColor, rows, cols, source)
//     dfs(image, sr, sc+1, newColor, rows, cols, source)
//     dfs(image, sr+1, sc, newColor, rows, cols, source)
//     dfs(image, sr, sc-1, newColor, rows, cols, source)
// }

// var maxAreaOfIsland = function (grid) {
//   let rows = grid.length,
//     cols = grid[0].length,
//     max = 0;
//   let inner = new Array(cols);
//   inner.fill(null);
//   let seen = new Array(rows);
//   seen.fill(inner);
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       max = Math.max(max, dfs(grid, seen, i, j, rows, cols));
//       console.log(i,j,seen[i][j])
//     }
//   }
//   return max;
// };

// function dfs(grid, seen, sr, sc, rows, cols) {
//   if (
//     sr < 0 ||
//     sr >= rows ||
//     sc < 0 ||
//     sc >= cols ||
//     seen[sr][sc] ||
//     grid[sr][sc] == 0
//   )
//     return 0;
//     console.log(sr, sc)
//   seen[sr][sc] = true;
//   return (
//     1 +
//     dfs(grid, seen, sr + 1, sc, rows, cols) +
//     dfs(grid, seen, sr - 1, sc, rows, cols) +
//     dfs(grid, seen, sr, sc + 1, rows, cols) +
//     dfs(grid, seen, sr, sc - 1, rows, cols)
//   );
// }
let perms = []
function findAllPerms(s, answer){
    if(s.length == 0) perms.push(answer)
    for(let i = 0; i < s.length; i++){
        console.log(i, s[i], answer)
        let ch = s[i]
        let left = s.slice(0, i) 
        let right = s.slice(i+1)
        let rest = left+right
        console.log("reest========>",rest)
        findAllPerms(rest, answer+ch)
    }
}
// findAllPerms('abc', '')
// console.log(perms)

var longestPalindrome = function(s) {
    let cache = [], count = {count:0}
    for(let diff = 0; diff < s.length; diff++){
        cache[diff] = cache[diff] || []
        checkPalindrome(s, 0, diff, cache, count)
    }
    let maxSubstringData = [null, null, 0]
    console.log(count)
    for(let left = 0; left < cache.length; left++){
        let right = cache[left].lastIndexOf(1)
        if(maxSubstringData[2] < right-left+1){
            maxSubstringData = [left, right, right-left+1]
        }
    }
    return s.slice(maxSubstringData[0], maxSubstringData[1]+1)
};

function checkPalindrome(s, left, right, cache, count){
    count.count++
    if(left >= s.length || right >= s.length) return
    cache[left] = cache[left] || []
    if(left === right) cache[left][right] = 1
    if(left < right){
        if(s[left] === s[right]){
            if(cache[left+1][right-1] == 0 && s.length > 2){
                cache[left][right] = 0
            }else cache[left][right] = 1
        }else cache[left][right] = 0
    }
    checkPalindrome(s, left+1, right+1, cache, count)
}

// console.log(longestPalindrome('aaaabbaa'))

// console.log(checkInclusion(
//     'ab',
//     "eidboaoo"
// ))
let grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
// console.log(maxAreaOfIsland(grid));
// console.log(checkInclusion(
//   "vbzwdxyoxrtowto",
//   `cjehbprbluswbhznamxjphrxazdikfwtprmhxpsaixpqcxibfetdotmnjkpqotjthwyjhwgbdicwwuoxadyomsmiusrthqygowuruhpijhfughzvlrpljlicjxzezhogyptxqelwjmdhnkqivhtzuwqmzqruixtxjynysawqjvyjdnqbpcdljvrkxumcasaqnpxpwoakzzfftloqqvmbfuhltqboyxgbwfdjsupgdyryfynbxurtybuqccnidioemppzuusrlojsjwjdapbxdyxlxigupaguhdnsvyyizlcrsfulmohpovkidgsqsfwcufhzirtsmgfsqnpitfenmipmjsketuohbjtnshfpbmmbzhjyjcplqutqkgrgmhuaxgrvsdaxkgvaprdbpiifrruriskedpymchkmjgtksliwtxjlckifwfzhxivtyqfiqehtvgypugyaiumjrqskbvcwmxzukbyofoohdmvwstowdhczgptxwubzkuolibqszwozweuqyznmrtowehxbuxvuvanoaokwzpzrphzuisrpptbrrznriwoeafrsdlflpjmflbzznxurpdcxhnnvptyxdmawcsfueywxubcarxheddxfeyxukxknkwqivgpvgrxodbtxywwrootzonzjgrttnlipyvrfbkwbpykiioxjlsrbfntkzzpqugstplbcctlrffudclnvqeztfrqspjuxthclsovkrzvhyqkemqecofolqzkytzbnxhhjxsopgrfkoubyiumgccrwctmilqvldbpoqwgfyvrqcepadbtuszgmsizuvpbqkkotkxnfqbcgcmvxndibykjgnmljmnlskiuidedytuhqykhowzjovbnlnsqmsclroxydjzgwzzbhwfhyfryhflypzxcuafuslujcbvpdxcbaqttbawkfzfaqazrvnkdlqiffdcutamgczvhrxtynomkcokndpqwkbvvqdfzihzxrfeuanuwnnqsouqjpaqkrqzforgevdcxtsoytmphtkqquahifrsycpjkymmuwzfnqoywnkabfffgdvurlduzlonaeqarbwxiahzcubblxxheniqaanzikdjpoksbgzegsohkgjahfbfojhjrkapmixohgbuncfirpreehluunxeqxxdzqnhumzdlwwxixgdbwtqalkgglzkzbggkjevndjofpqlbzfyxclbhkfqcxoojopmibuonokbrdzdqjbyrssptkpnvsooftkzxgarplduvuquqttzzufjuzyflbizkdhtryncwmqqsntmpzuru`
//   ))

// var removeDuplicates = function(s, k) {
//     let mainStack = [], index = 0
//     for(let i = 0; i < s.length; i++){
//         if(mainStack[index-1] && s[i] === mainStack[index-1].key) {
//             mainStack[index-1].val+=1
//             if(mainStack[index-1].val === k) {
//                 mainStack.pop()
//                 index--
//             }
//         }
//         else {
//             mainStack[index] = mainStack[index] || {}
//             mainStack[index].key = s[i]
//             mainStack[index].val = 1
//             index++
//         }
//     }
//     s=''
//     for(let { key, val } of mainStack){
//         for(let i = 0; i < val; i++){
//             s+=key
//         }
//     }
//     return s
// };




// var newValue = function(s, k){
//     let l=0, r = 1, obj = {}, newStringArray = []
//     while(r<s.length){
//         let rp = s[r]
//         if(s[l]!==s[r]){
//             // console.log(s[l])
//             newStringArray.push(s[l])
//             l++
//             r++
//         }else{
//             let index = r
//             if(isSubstringWithAllDuplicates(s,l,r,k)){
//                 if(index != null && index>=l && index <= r) {
//                     l = index+1
//                 }
//                 r=r+2
//             }
//             newStringArray.push(s[l])
//             l+
//             r++
//             // obj[rp] = r
//             // console.log(s[l], s[r])
            
//         }
//     }
//     return newStringArray
// }
// var isSubstringWithAllDuplicates = function(s, l, r, k){
//     let i = l; count = 0
//     while(i < r){
//         if(s[i] === s[i+1]){
//             count++
//         }
//         i++
//     }
//     return count+1 === k
// }


// l = 0, r = 2
// 0-2
// d != e
// l = 1, r = 3
// console.log(removeDuplicates("yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy",4))\

function freq(arr){
    let count = 0
    let l = 0, mid = Math.floor(arr.length/2), frqObj={}
    while(mid<arr.length){
        if(l<mid){
            frqObj[arr[l]] = frqObj[arr[l]] || 0
            frqObj[arr[l]]++
            l++
        }
        count++
        frqObj[arr[mid]] = frqObj[arr[mid]] || 0
        frqObj[arr[mid]]++
        mid++
    }
    return frqObj
}
console.log(freq([1,2,3,4,4,5,5,6,7,8,8,8,9,10]))

// let mainArr = [], n = pickup.length
// for(let i = 0; i < pickup.length; i++){
//     let tempArr = []
//     tempArr.push(pickup[i])
//     tempArr.push(drop[i])
//     tempArr.push(tip[i])
//     mainArr.push(tempArr)
// }
// mainArr.sort()
// let pd=[]
// pd.push(mainArr[0][2])
// for(let i=1; i<n; i++){
//     let j=i-1
//     while(j>0 && mainArr[j][0]>mainArr[i][1]) j--
//     let cost=0
//     if(j>=0 && mainArr[j][0]<=mainArr[i][1]){
//         cost=pd[j]  
//     }
//     pd[i]=Math.max(pd[i-1], cost+mainArr[i][2])
// }
// console.log(pd)
// return pd[n-1]

var maxAreaOfIsland = function(grid) {
  let rows = grid.length, cols = grid[0].length, max = 0
  for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
          max = Math.max(max, dfs(grid, i, j, rows, cols))
      }
  }
  return max
};

function dfs(grid, sr, sc, rows, cols){
   if(sr<0 || sr >= rows || sc < 0 || sc >= cols || grid[sr][sc]==0) return 0
   // update the visited value to 0 so that it will not call the same neighbour again and again
   // and prevents the infinite loop
   grid[sr][sc] = 0
   return (1 + dfs(grid, sr+1, sc, rows, cols) + 
           dfs(grid, sr-1, sc, rows, cols) + 
           dfs(grid, sr, sc-1, rows, cols) +
           dfs(grid, sr, sc+1, rows, cols))
}

// let reg = /^0$|^-?[1-9]\d*(\.\d+)?$/
// let val = "    -42jkdsfghsdgfh"
// let newVal = val.replace(/^-?[1-9]/g, '')
// console.log(val)

let s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
var reverseWords = function(s) {
  let joined = s.join('').split(' '), i = 0, j = joined.length-1
  while(i < j) {
      [joined[i], joined[j]] = [joined[j], joined[i]]
      i++
      j--
  }
  return joined.join(' ').split('')
};
console.log(reverseWords(s))


["m","y"," ","n","a","m","e"," ","i","s"]

function join(s){
  let index = 0, j = 0, indexOfSpace = s.indexOf(' ')
  while(j<s.length){
      if(s[j] !== " "){
          if(s[index] === ' '){
              s[index]=''
          }
          if(s[index] === s[j]) j++
          console.log(s[index], s[j])
          s[index] = s[index] + s[j]
          s[j] = ''
      }else {
          index++
      }
      j++
  }
  s.splice(index+1)
}
function split(s){
  s[s.length] = 'end'
  let index = 0, end = s.length
  for(let i = 0; i < s.length && s[i] !== 'end'; i++){
      if(s[i]!=='end'){
          for(let j = 0; j < s[i].length; j++){
              s[s.length] = s[i][j]
          }
          s[s.length] = ' '
      }
  }
  s.splice(0,end)
  s.length = s.length-1
}
var reverseWords = function(s) {
  join(s)
  console.log(s)
  let i = 0, j = s.length-1
  while(i<j){
  [s[i], s[j]] = [s[j], s[i]]
      i++
      j--
  }
  split(s) 
};


// reverse words in string II Leetcode 

var reverse = function(s, left, right){
  while(left<right){
      [s[left],s[right]] = [s[right],s[left]]
      left++
      right--
  }
}
var reverseArray = function(s){
  let i = 0, j = 0, n=s.length
  while(i < n){
      while(j<n && s[j]!==' ' ) j++
      reverse(s,i,j-1)
      i=j+1
      j++
  }
}
var reverseWords = function(s) {
  reverse(s,0,s.length-1)
  reverseArray(s)
};