/* --------- Leaf List --------- */
/* -------- Problem -------- */
/*
    Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.
*/

/* --------- Starter Code -------- */
// Creating a node
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// To do code
/*
const leafList = (root) => {
    // todo
  };
  */

/* ----------- Solutions --------- */
// Depth first (Iterative)
const leafList = (root) => {
  if (root === null) return [];
  const leaves = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    if (current.left === null && current.right === null)
      leaves.push(current.val);

    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
  return leaves;
};

//Depth first (recursive)
/*
    const leafList = (root) => {
  const leaves = [];
  fillLeaves(root, leaves);
  return leaves;
};

const fillLeaves = (root, leaves) => {
  if (root === null) return;
  if (root.left === null && root.right === null) leaves.push(root.val);
  fillLeaves(root.left, leaves);
  fillLeaves(root.right, leaves);
};
*/

/* ----------- Testing ---------- */
//Test 00
/*
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(leafList(a)); // -> [ 'd', 'e', 'f' ]
*/

//Test 01
/*
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(leafList(a)); // -> [ 'd', 'g', 'h' ]
*/

//Test 02
const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

console.log(leafList(a)); // -> [ 20, 1, 3, 54 ]

//Test 03
const x = new Node("x");

//      x

console.log(leafList(x)); // -> [ 'x' ]

//Test 04
console.log(leafList(null)); // -> [ ]
