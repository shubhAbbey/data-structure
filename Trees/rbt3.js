var RED = "red";

//
var BLACK = "black";

// Red black tree
function rbTree() {
  // console.log('init rbTree')
  this.nil = { p: null, color: BLACK };
  this.root = this.nil;
}

// Levo
rbTree.prototype.leftRotate = function (x) {
  // console.log('leftRotate:'+x.key)
  y = x.right;
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
rbTree.prototype.rightRotate = function (x) {
  // console.log('rightRotate:'+x.key)
  y = x.left;
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
rbTree.prototype.insert = function (key, color = RED) {
  // console.log('insert:'+z.key)
  let z = {key, color}
  console.log('insert:'+z.key)
  z.p = this.nil;
  //
  y = this.nil;
  x = this.root;
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

// Repair after insertion
rbTree.prototype.insertFixup = function (z) {
  console.log('insertFixup:'+z.key)
  //
  while (z.p.color == RED) {
    if (z.p == z.p.p.left) {
      y = z.p.p.right;
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
      y = z.p.p.left;
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

// Show red black tree
rbTree.prototype.display = function (t) {
  if (!t.key) return;
  var position = t == t.p.left ? "left" : "right";
  if (t.p == this.nil) position = "root";
  var o =
    "key:" +
    t.key +
    ",color:" +
    t.color +
    ",p:" +
    t.p.key +
    ",position: " +
    position;
  //console.log(o)
  //console.log(t.p.key)
  if (position != "root") {
    var pk =
      t.p.p && t.p.p != this.nil
        ? "node_" + t.p.p.key + "_" + t.p.key
        : "node_" + t.p.key;
    var k = "node_" + t.p.key + "_" + t.key;
  } else {
    var pk = "";
    var k = "node_" + t.key;
  }
  //console.log(pk,t.p.p)
  var box = position == "root" ? document.body : document.getElementById(pk);
  //console.log('node_'+t.p.key)
  box.innerHTML +=
    "<div onclick = 'window.delete(this);return false;' style='color:" +
    t.color +
    ";border-color:" +
    t.color +
    "' id='" +
    k +
    "'>" +
    t.key +
    "<br /></div>";

  //
  //var div=document.createElement("div");
  //div.innerHTML(o.)
  //btn.appendChild(t);
  this.display(t.left);
  this.display(t.right);
};

// Find the minimum value
rbTree.prototype.minimum = function (x) {
  console.log("minimum:" + x.key);
  while (x.left != this.nil) {
    x = x.left;
  }
  return x;
};

// Replace one element with another
rbTree.prototype.transplant = function (u, v) {
  console.log("transplant:" + (v == this.nil ? "null" : v.key));
  if (u.p == this.nil) this.root = v;
  else if (u == u.p.left) u.p.left = v;
  else u.p.right = v;
  v.p = u.p;
};

// Delete elements
rbTree.prototype.delete = function (z) {
  console.log("delete:" + z.key);
  y = z;
  y_original_color = y.color;
  if (z.left == this.nil) {
    x = z.right;
    this.transplant(z, z.right);
  } else if (z.right == this.nil) {
    x = z.left;
    this.transplant(z, z.left);
  } else {
    y = this.minimum(z.right);
    y_original_color = y.color;
    x = y.right;
    if (y.p == z) {
      x.p = y;
    } else {
      this.transplant(y, y.right);
      y.right = z.right;
      y.right.p = y;
    }
    this.transplant(z, y);
    y.left = z.left;
    y.left.p = y;
    y.color = z.color;
  }
  if (y_original_color == BLACK) this.deleteFixup(x);
};

// Repair after deletion
rbTree.prototype.deleteFixup = function (x) {
  console.log("deleteFixup:" + x.key);
  while (x != this.root && x.color == BLACK) {
    if (x == x.p.left) {
      w = x.p.right; // Brother
      if (w.color == RED) {
        //Case 1: if the brother is red, the parent node must be black
        console.log("deleteFixup,condition:left,1");
        w.color = BLACK; //Brother to black
        x.p.color = RED; //Change the parent node to red
        this.leftRotate(x.p); //Rotate the parent node to the left and put the red color on the x to create conditions for the repair (prepare to remove the black).
        w = x.p.right;
      }

      console.log(w.left.color, w.right.color);
      if (w.left.color == BLACK && w.right.color == BLACK) {
        //Situation 2: brother and disciple nodes are all black
        console.log("deleteFixup,condition:left,2");
        w.color = RED; //Change brother to red, reduce brother Heigao (at this time, the balance is under x.p, and debt is pushed to the upper level)
        x = x.p; //Up one layer, parent node double black (black height less than 1)
      } else {
        //Brothers and children have red, brothers are black
        //Situation 3: brother is black, brother's right child is black, brother's left child is red. Push red to the right
        // (right brother, right brother, left brother)
        //This operation ensures that the right brother's right child is red
        if (w.right.color == BLACK) {
          console.log("deleteFixup,condition:left,3");
          w.left.color = BLACK; //Brother left child marked black
          w.color = RED; //Brother label red
          this.rightRotate(w); //Brother dextral
          w = x.p.right; // * new brothers
        }
        //Situation 4: right brother's right child is red. Eliminate double black, the most critical place
        console.log("deleteFixup,condition:left,4");
        w.color = x.p.color; // When the brotherhood becomes a grandfather node, it needs to inherit the original color of the parent node. No matter red or black, it only needs to inherit.
        x.p.color = BLACK; //The parent node is marked black (it may be original black, no effect, here is the key).
        w.right.color = BLACK; //Brother right child marked black (key, there is an extra black element on the right side)
        this.leftRotate(x.p); // The parent node rotates to the left. At the most critical point, this rotation will add a black element to the left, the right side will remain unchanged, and the black elimination will be completed.
        x = this.root; // In fact, break is realized here;
      }
    } else {
      w = x.p.left; // Brother
      if (w.color == RED) {
        //Case 1: if the brother is red, the parent node must be black
        console.log("deleteFixup,condition:right,1");
        w.color = BLACK; //Brother to black
        x.p.color = RED; //Change the parent node to red
        this.rightRotate(x.p); //Rotate the parent node to the left and put the red color on the x to create conditions for the repair (prepare to remove the black).
        w = x.p.left;
      }

      console.log(w.left.color, w.right.color);
      if (w.right.color == BLACK && w.left.color == BLACK) {
        //Situation 2: brother and disciple nodes are all black
        console.log("deleteFixup,condition:right,2");
        w.color = RED; //Change brother to red, reduce brother Heigao (at this time, the balance is under x.p, and debt is pushed to the upper level)
        x = x.p; //Up one layer, parent node double black (black height less than 1)
      } else {
        //Brothers and children have red, brothers are black
        //Situation 3: brother is black, brother's right child is black, brother's left child is red. Push red to the right
        // (right brother, right brother, left brother)
        //This operation ensures that the right brother's right child is red
        if (w.left.color == BLACK) {
          console.log("deleteFixup,condition:right,3");
          w.left.color = BLACK; //Brother left child marked black
          w.color = RED; //Brother label red
          this.leftRotate(w); //Brother dextral
          w = x.p.left; // * new brothers
        }
        //Situation 4: right brother's right child is red. Eliminate double black, the most critical place
        console.log("deleteFixup,condition:right,4");
        w.color = x.p.color; // When the brotherhood becomes a grandfather node, it needs to inherit the original color of the parent node. No matter red or black, it only needs to inherit.
        x.p.color = BLACK; //The parent node is marked black (it may be original black, no effect, here is the key).
        w.left.color = BLACK; //Brother right child marked black (key, there is an extra black element on the right side)
        this.rightRotate(x.p); // The parent node rotates to the left. At the most critical point, this rotation will add a black element to the left, the right side will remain unchanged, and the black elimination will be completed.
        x = this.root; // In fact, break is realized here;
      }
    }
  }
  // No matter from case 2 or case 4, this place must point to root, so it's actually T.root.color=BLACK
  x.color = BLACK;
};

// lookup
rbTree.prototype.search = function (x, k) {
    if (k == x.key) return x;
    if (k < x.key) return this.search(x.left, k);
    else return this.search(x.right, k);
};

  rbTree.prototype.getParent = function(x, k){
    if(x.p != this.nil && x.p.key <= k){
        x = x.p
        return this.getParent(x, k)
    }else if(x.p && x.p.key){
        x = x.p
        return x
    }else return this.nil
}

rbTree.prototype.getLeftChild = function(x, k){
    if(x.left != this.nil && x.left.key > k){
        x = x.left
        return this.getLeftChild(x,k)
    }else if(x.left && x.left.key){
        x=x.left
        return x
    }else return x
}

rbTree.prototype.getRightChild = function(x){
    if(x.right != null){
        return x.right
    }else return this.nil
}

rbTree.prototype.getNextGreatest = function (x, k) {
  let search = this.search(x,k)
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

rb = new rbTree();
let arr = [5, 3, 9, 9, 7, 8, 1, 70, 10, 33, 75, 72];
// let arr = [71, 38, 80, 70, 52, 82, 16, 30, 96, 89, 20, 73, 30, 46, 14, 51, 87, 14, 52, 23, 55, 78, 58, 62, 99, 56, 54, 94, 27, 79, 71]

arr.forEach((item) => rb.insert(item));
let key = Math.floor(Math.random()*100)
console.log(key)
rb.insert(key)
console.log("===============", rb.getNextGreatest(rb.root, key));
