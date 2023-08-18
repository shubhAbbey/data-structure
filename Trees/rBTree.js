const RED = true;
const BLACK = false;
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value
    this.left = null;
    this.right = null;
    this.color = RED;
  }
}

class RBT {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  isRed(node) {
    if (!node) return BLACK;
    return node.color;
  }
  // Left right red left black
  leftRotate(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    tmp.color = node.color;
    node.color = RED;
    return tmp;
  }
  // Right rotation left red left sub red
  rightRoate(node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    tmp.color = node.color;
    node.color = RED;
    return tmp;
  }
  // Color reversal
  flipColors(node) {
    node.color = RED;
    node.left.color = BLACK;
    node.right.color = BLACK;
  }
  add(key, value) {
    this.root = this.addRoot(this.root, key, value);
    this.root.color = BLACK; // Root node is always black
  }
  addRoot(node, key, value) {
    if (!node) {
      this.size++;
      return new Node(key, value);
    }
    if (key < node.key) {
      node.left = this.addRoot(node.left, key, value);
    } else if (key > node.key) {
      node.right = this.addRoot(node.right, key, value);
    } else {
      node.value = value;
    }
    if (this.isRed(node.right) && !this.isRed(node.left)) {
      node = this.leftRotate(node);
    }
    if (this.isRed(node.left) && this.isRed(node.left.left)) {
      node = this.rightRoate(node);
    }
    if (this.isRed(node.left) && this.isRed(node.right)) {
      this.flipColors(node);
    }
    return node;
  }
  isEmpty() {
    return this.size == 0 ? true : false;
  }
  getSize() {
    return this.size;
  }
  contains(key) {
    let ans = "";
    !(function getNode(node, key) {
      if (!node || key == node.key) {
        ans = node;
        console.log("final", node.key)
        return node;
      } else if (key > node.key) {
        return getNode(node.right, key);
      } else {
        console.log(node.key)
        return getNode(node.left, key);
      }
    })(this.root, key);
    return !!ans;
  }
  // bst preamble traversal (recursive version)
  preOrder(node = this.root) {
    if (node == null) return;
    // console.log(node.key);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  preOrderNR() {
    if (this.root == null) return;
    let stack = [];
    stack.push(this.root);
    while (stack.length > 0) {
      let curNode = stack.pop();
      console.log(curNode.key);
      if (curNode.right != null) stack.push(curNode.right);
      if (curNode.left != null) curNode.push(curNode.left);
    }
  }
  // bst middle order traversal
  inOrder(node = this.root) {
    if (node == null) return;
    this.inOrder(node.left);
    console.log(node.key);
    this.inOrder(node.right);
  }
  // bst subsequent traversal
  postOrder(node = this.root) {
    if (node == null) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.key);
  }
  // The way of bsf + queue to realize hierarchical traversal
  generateDepthString1() {
    let queue = [];
    queue.unshift(this.root);
    while (queue.length > 0) {
      let tmpqueue = [];
      let ans = [];
      queue.forEach((item) => {
        ans.push(item.key);
        item.left ? tmpqueue.push(item.left) : "";
        item.right ? tmpqueue.push(item.right) : "";
      });
      console.log(...ans);
      queue = tmpqueue;
    }
  }
  minimum(key, node = this.root) {
    // if(node){
      console.log(node)
      if (node.left == null) return node;
      // else if(node && node.left.key === key) return node 
      return this.minimum(node.left);
    // }
  }
  maximum(node = this.root) {
    if (node.right == null) return node;
    return this.maximum(node.right);
  }
  getGreaterNode(node, key) {
    if (key > node.key) {
      if (!node.right) {
        return null;
      }
      return this.getGreaterNode(node.right, key);
    } else if (key < node.key) {
      if (!node.left) {
        return node;
      }
      return this.getGreaterNode(node.left, key);
    } else {
      // console.log(node)
      if (node.right) return this.minimum(node.right);
      else return null
    }
  }
  nextGreater(key, node = this.root) {
    if (!node) return null;
    else {
      if (this.getGreaterNode(node, key)) {
        return this.getGreaterNode(node, key).key;
      } else return null;
    }
  }
}

let arr = [5, 3, 9, 9, 7, 8, 1, 70,10, 33,75,72];
let rbTree = new RBT();
// rbTree.
arr.forEach((item,index) => rbTree.add(item));
console.log(rbTree.nextGreater(8));
// console.log(rbTree.nextGreater(9));
// console.log(rbTree.contains(8))
