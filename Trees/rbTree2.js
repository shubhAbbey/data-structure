// const RED = true;
// const BLACK = false;
// class Node {
//   constructor(key, value) {
//     this.key = key;
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.color = RED;
//   }
// }

// class RBT {
//   constructor() {
//     this.root = null;
//     this.size = 0;
//   }
//   isRed(node) {
//     if (!node) return BLACK;
//     return node.color;
//   }
//   // Left right red left black
//   leftRotate(node) {
//     let tmp = node.right;
//     node.right = tmp.left;
//     tmp.left = node;
//     tmp.color = node.color;
//     node.color = RED;
//     return tmp;
//   }
//   // Right rotation left red left sub red
//   rightRoate(node) {
//     let tmp = node.left;
//     node.left = tmp.right;
//     tmp.right = node;
//     tmp.color = node.color;
//     node.color = RED;
//     return tmp;
//   }
//   // Color reversal
//   flipColors(node) {
//     node.color = RED;
//     node.left.color = BLACK;
//     node.right.color = BLACK;
//   }
//   add(key, value) {
//     this.root = this.addRoot(this.root, key, value);
//     this.root.color = BLACK; // Root node is always black
//   }
//   addRoot(node, key, value) {
//     if (!node) {
//       this.size++;
//       return new Node(key, value);
//     }
//     if (key < node.key) {
//       node.left = this.addRoot(node.left, key, value);
//     } else if (key > node.key) {
//       node.right = this.addRoot(node.right, key, value);
//     } else {
//       node.value = value;
//     }
//     if (this.isRed(node.right) && !this.isRed(node.left)) {
//       node = this.leftRotate(node);
//     }
//     if (this.isRed(node.left) && this.isRed(node.left.left)) {
//       node = this.rightRoate(node);
//     }
//     if (this.isRed(node.left) && this.isRed(node.right)) {
//       this.flipColors(node);
//     }
//     return node;
//   }
//   minimum(node = this.root) {
//     if (node.left == null) return node;
//     return this.minimum(node.left);
//   }
//   generateDepthString1() {
//       if(this.root){
//         let queue = [];
//         queue.unshift(this.root);
//         while (queue.length > 0) {
//           let tmpqueue = [];
//           let ans = [];
//           queue.forEach((item) => {
//             ans.push(item.key);
//             item.left ? tmpqueue.push(item.left) : "";
//             item.right ? tmpqueue.push(item.right) : "";
//           });
//           console.log(...ans);
//           queue = tmpqueue;
//         }
//       }
//   }
//   getGreaterNode(node, key) {
//     if (key > node.key) {
//       if (!node.right) {
//         return null;
//       }
//       return this.getGreaterNode(node.right, key);
//     } else if (key < node.key) {
//       if (!node.left) {
//         return node;
//       }
//       return this.getGreaterNode(node.left, key);
//     } else {
//       if (node.right) return this.minimum(node.right);
//       else return null;
//     }
//   }
//   nextGreater(key, node = this.root) {
//     if (!node) return null;
//     else {
//       if (this.getGreaterNode(node, key)) {
//         return this.getGreaterNode(node, key).key;
//       } else return null;
//     }
//   }
// }


let RED = "red";
let BLACK = "black";
class RBT2 {
    constructor(){
        this.nil = { p: null, color: BLACK };
        this.root = this.nil; 
    }
    leftRotate(x) {
        let y = x.right;
        x.right = y.left;
        if (y.left != this.nil) y.left.p = x;
        y.p = x.p;
        if (x.p == this.nil) this.root = y;
        else if (x == x.p.left) x.p.left = y;
        else x.p.right = y;
        y.left = x;
        x.p = y;
      };
      
      // Dextral rotation
    rightRotate(x) {
        // console.log('rightRotate:'+x.key)
        let y = x.left;
        x.left = y.right;
        if (y.right != this.nil) y.right.p = x;
        y.p = x.p;
        if (x.p == this.nil) this.root = y;
        else if (x == x.p.right) x.p.right = y;
        else x.p.left = y;
        y.right = x;
        x.p = y;
      };
      
      // Insertion element
      insert(key, color = RED) {
        // console.log('insert:'+z.key)
        let z = {key, color}
        z.p = this.nil;
        //
        let y = this.nil;
        let x = this.root;
        while (x != this.nil) {
          y = x;
          if (z.key < x.key) x = x.left;
          else x = x.right;
        }
        z.p = y;
        if (y == this.nil) this.root = z;
        else if (z.key < y.key) y.left = z;
        else y.right = z;
      
        //
        z.left = this.nil;
        z.right = this.nil;
        z.color = RED;
        this.insertFixup(z);
      };
      
      
      insertFixup(z) {
        while (z.p.color == RED) {
          if (z.p == z.p.p.left) {
            let y = z.p.p.right;
            if (y.color == RED) {
              z.p.color = BLACK;
              y.color = BLACK;
              z.p.p.color = RED;
              z = z.p.p;
            } else {
              if (z == z.p.right) {
                z = z.p;
                this.leftRotate(z);
              }
              z.p.color = BLACK;
              z.p.p.color = RED;
              this.rightRotate(z.p.p);
            }
          } else {
            let y = z.p.p.left;
            if (y.color == RED) {
              z.p.color = BLACK;
              y.color = BLACK;
              z.p.p.color = RED;
              z = z.p.p;
            } else {
              if (z == z.p.left) {
                z = z.p;
                this.rightRotate(z);
              }
              z.p.color = BLACK;
              z.p.p.color = RED;
              this.leftRotate(z.p.p);
            }
          }
        }
        this.root.color = BLACK;
      };
      
      search(k, x=this.root) {
          if (k == x.key) return x;
          if (k < x.key) return this.search(k, x.left);
          else return this.search(k, x.right);
      };
      
      getParent = function(x, k){
          if(x.p != this.nil && x.p.key <= k){
              x = x.p
              return this.getParent(x, k)
          }else if(x.p && x.p.key){
              x = x.p
              return x
          }else return this.nil
      }
      
      getLeftChild(x, k){
          if(x.left != this.nil && x.left.key > k){
              x = x.left
              return this.getLeftChild(x,k)
          }else return x
      }
      
      getRightChild(x){
          if(x.right != null){
              return x.right
          }else return this.nil
      }
      
      getNextGreatest(k, x = this.root) {
        let search = this.search(k, x)
        if(search != this.nil){
          if(this.getRightChild(search) == this.nil){
              if(this.getParent(search, k) != this.nil)
            return this.getParent(search, k).key
            else return null
          }else{
            search=this.getRightChild(search);
            search = this.getLeftChild(search, k)
            return search.key;
          }
        }
      };

}


function maximumSum(a, m) {
  let prefix_sum = [];
  let count = 0;
  a.forEach((item, index) => {
    count = ((item % m) + count) % m;
    prefix_sum[index] = count;
  });
  let maxVal = 0;
  let TreeSet = new RBT2();
 
  for (let i = 0; i < a.length; i++) {
      TreeSet.insert(prefix_sum[i])
    if (TreeSet.getNextGreatest(prefix_sum[i])) {
      let arr = [
        maxVal,
        (prefix_sum[i] - TreeSet.getNextGreatest(prefix_sum[i]) + m) % m,
      ];
      maxVal = Math.max(...arr);
    } 
    else {
      let arr = [maxVal, prefix_sum[i]];
      maxVal = Math.max(...arr);
    }
  }
  return maxVal;
}
// let arr = [5, 3, 9, 9, 7, 8, 1, 70, 10, 33, 75, 72];
let arr = [71, 38, 80, 70, 52, 82, 16, 30, 96, 89, 20, 73, 30, 46, 14, 51, 87, 14, 52, 23, 55, 78, 58, 62, 99, 56, 54, 94, 27, 79, 71]
// let arr = [
    // 3,3,9,9,5
  // 846930887, 1681692778, 1714636916, 1957747794, 424238336, 719885387,
  // 1649760493, 596516650, 1189641422, 1025202363, 1350490028, 783368691,
  // 1102520060, 2044897764, 1967513927, 1365180541, 1540383427, 304089173,
  // 1303455737, 35005212, 521595369, 294702568, 1726956430, 336465783, 861021531,
  // 278722863, 233665124, 2145174068, 468703136, 1101513930, 1801979803,
  // 1315634023, 635723059, 1369133070, 1125898168, 1059961394, 2089018457,
  // 628175012, 1656478043, 1131176230, 1653377374, 859484422, 1914544920,
  // 608413785, 756898538, 1734575199, 1973594325, 149798316, 2038664371,
  // 1129566414,
    // 412776092, 1424268981, 1911759957, 749241874, 137806863, 42999171, 982906997,
    // 135497282, 511702306, 2084420926, 1937477085, 1827336328, 572660337,
    // 1159126506, 805750847, 1632621730, 1100661314, 1433925858, 1141616125,
    // 84353896, 939819583, 2001100546, 1998898815, 1548233368, 610515435,
    // 1585990365, 1374344044, 760313751, 1477171088, 356426809, 945117277,
    // 1889947179, 1780695789, 709393585, 491705404, 1918502652, 752392755,
    // 1474612400, 2053999933, 1264095061, 1411549677, 1843993369, 943947740,
    // 1984210013, 855636227, 1749698587, 1469348095, 1956297540, 1036140796,
    // 463480571,
  //   1975960379, 317097468, 1892066602, 1376710098, 927612903, 1330573318,
  //   603570493, 1687926653, 660260757, 959997302, 485560281, 402724287, 593209442,
  //   1194953866, 894429690, 364228445, 1947346620, 221558441, 270744730,
  //   1063958032, 1633108118, 2114738098, 2007905772, 1469834482, 822890676,
  //   1610120710, 791698928, 631704568, 498777857, 1255179498, 524872354, 327254587,
  //   1572276966, 269455307, 1703964684, 352406220, 1600028625, 160051529,
  //   2040332872, 112805733, 1120048830, 378409504, 515530020, 1713258271,
  //   1573363369, 1409959709, 2077486716, 1373226341, 1631518150, 200747797,
  // 1117142619, 168002246, 150122847, 439493452, 990892922, 1760243556,
  // 1231192380, 1622597489, 111537765, 338888229, 2147469842, 438792351,
  // 1911165194, 269441501, 2142757035, 116087765, 1869470125, 155324915, 8936988,
  // 1982275857, 1275373744, 387346492, 350322228, 841148366, 1960709860,
  // 1760281937, 771151433, 1186452552, 1244316438, 971899229, 1476153276,
  // 213975408, 1139901475, 1626276122, 653468859, 2130794396, 1239036030,
  // 1884661238, 1605908236, 1350573794, 76065819, 1605894429, 1789366144,
  // 1987231012, 1875335929, 1784639530, 2103318777, 1597322405, 1939964444,
  // 2112255764,
//   1569229321, 705178737, 1590079445, 434248627, 1977648523, 1470503466,
//   1402586709, 552473417, 1143408283, 188213259, 559412925, 1884167638,
//   1473442063, 201305625, 238962601, 776532037, 1238433453, 1273911900,
//   1431419380, 620145551, 1665947469, 619290072, 707900974, 407487132,
//   2113903882, 7684931, 1776808934, 711845895, 404158661, 937370164, 2058657200,
//   1973387982, 1642548900, 1501252997, 260152960, 1472713774, 824272814,
//   1662739669, 2025187191, 1967681096, 1850952927, 437116467, 1704365085,
//   1176911341, 638422091, 1943327685, 1953443377, 1876855543, 1069755937,
//   1237379108,
// ];
// const duplicates = () => {
//     let obj = {}
//     let count = 1
//     for(let i = 0; i < arr.length; i++){
//         if(obj[arr[i]]) obj[arr[i]] = count++
//         else obj[arr[i]] = count
//     }
//     console.log(obj)
// }
// duplicates()

let rb = new RBT2()
arr.forEach((item) => rb.insert(item));
let key = Math.floor(Math.random()*100)
// console.log(key)
rb.insert(51)
console.log("===============", rb.getNextGreatest(51));
// maximumSum(arr, 184803527);
