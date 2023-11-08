/* ---------- Level Averages ---------- */
/* ------ Problem ------- */
/*
    Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.
*/

/* -------- Starter Code -------- */
//Creating a node
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//To do code
/*
const levelAverages = (root) => {
    // todo
  };
  */

/* ------------ Solution ------------ */
const levelAverages = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);

  const avgs = [];
  for (let level of levels) {
    avgs.push(avg(level));
  }
  return avgs;
};

const fillLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels[levelNum] = [root.val];
  } else {
    levels[levelNum].push(root.val);
  }

  fillLevels(root.left, levels, levelNum + 1);
  fillLevels(root.right, levels, levelNum + 1);
};

const avg = (array) => {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum / array.length;
};
// n = number of nodes
// Time = O(n)
// Space = O(n)

/* ------------- Testing ----------- */
//Test 00
/*
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ]
*/

//Test 01
/*
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

console.log(levelAverages(a)); // -> [ 5, 32.5, 17.5, 2 ]
*/

//Test 02
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(45);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0     45
//     /       \
//    -1       -2

console.log(levelAverages(a)); // -> [ -1, -5.5, 14, -1.5 ]

//Test 03
const q = new Node(13);
const r = new Node(4);
const s = new Node(2);
const t = new Node(9);
const u = new Node(2);
const v = new Node(42);

q.left = r;
q.right = s;
r.right = t;
t.left = u;
u.right = v;

//        13
//      /   \
//     4     2
//      \
//       9
//      /
//     2
//    /
//   42

console.log(levelAverages(q)); // -> [ 13, 3, 9, 2, 42 ]

//Test 04
console.log(levelAverages(null)); // -> [ ]
