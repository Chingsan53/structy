class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//Exercise
/*
const treeValueCount = (root, target) => {
    // todo
  };
*/

//Solutions
//Depth First (recursive)
/*
const treeValueCount = (root, target) => {
    if (root === null) return 0;
    const match = root.val === target ? 1 : 0;
    return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
  };
*/

//Depth First (iterative)
const treeValueCount = (root, target) => {
    if (root === null) return 0;

    let count = 0;
    const stack = [root];
    while (stack.length > 0) {
        const current = stack.pop();
        if (current.val === target) count += 1;

        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }

    return count;
};

//Breadth First
/*
const treeValueCount = (root, target) => {
    if (root === null) return 0;
    
    let count = 0;
    const queue = [ root ];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.val === target) count += 1;
      
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    
    return count;
  };
*/

//Testings
//Test 00
/*
const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

console.log(treeValueCount(a, 6)); // -> 3

//Test 01
console.log(treeValueCount(a, 12)); // -> 2
*/

//Test 02
const a = new Node(7);
const b = new Node(5);
const c = new Node(1);
const d = new Node(1);
const e = new Node(8);
const f = new Node(7);
const g = new Node(1);
const h = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      7
//    /   \
//   5     1
//  / \     \
// 1   8     7
//    /       \
//   1         1
console.log(treeValueCount(a, 1)); // -> 4

//Test 03
console.log(treeValueCount(a, 9)); // -> 0

//Test 04 
console.log(treeValueCount(null, 42)); // -> 0