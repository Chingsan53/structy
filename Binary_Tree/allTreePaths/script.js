/* ------- All Tree Paths ------- */
/* ------ Problem ------ */
/*
    Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

    The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

    You may assume that the input tree is non-empty.
*/

/* ------- Starter Code ------- */
//Creating a node
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//Todo Code
/*
const allTreePaths = (root) => {
    // todo
  };
  */

/* --------- Solution --------- */
const allTreePaths = (root) => {
  if (root === null) return [];

  if (root.left === null && root.right === null) return [[root.val]];

  const paths = [];

  const leftSubPaths = allTreePaths(root.left);
  for (let subPath of leftSubPaths) {
    paths.push([root.val, ...subPath]);
  }

  const rightSubPaths = allTreePaths(root.right);
  for (let subPath of rightSubPaths) {
    paths.push([root.val, ...subPath]);
  }

  return paths;
};

// n = number of nodes
// Time: ~O(n)
// Space: ~O(n)

/* -------- Testing --------- */
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

console.log(allTreePaths(a)); // ->
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e' ],
//   [ 'a', 'c', 'f' ]
// ]
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
const i = new Node("i");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i

console.log(allTreePaths(a)); // ->
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e', 'g' ],
//   [ 'a', 'b', 'e', 'h' ],
//   [ 'a', 'c', 'f', 'i' ]
// ]
*/

//Test 02
const q = new Node("q");
const r = new Node("r");
const s = new Node("s");
const t = new Node("t");
const u = new Node("u");
const v = new Node("v");

q.left = r;
q.right = s;
r.right = t;
t.left = u;
u.right = v;

//      q
//    /   \
//   r     s
//    \
//     t
//    /
//   u
//  /
// v

console.log(allTreePaths(q)); // ->
// [
//   [ 'q', 'r', 't', 'u', 'v' ],
//   [ 'q', 's' ]
// ]

//Test 03
const z = new Node("z");

//      z

console.log(allTreePaths(z)); // ->
// [
//   ['z']
// ]
