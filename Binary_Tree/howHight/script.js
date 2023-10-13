class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
/*
const howHigh = (node) => {
    // todo
  };
*/

//Solution
//Recursive
const howHigh = (node) => {
    if (node === null) return -1;

    const leftHeight = howHigh(node.left);
    const rightHeight = howHigh(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
};

//Testings
//Test 00
/*
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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

console.log(howHigh(a)); // -> 2
*/

//Test 01
/*
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

console.log(howHigh(a)); // -> 3
*/

//Test 02
/*
const a = new Node('a');
const c = new Node('c');

a.right = c;

//      a
//       \
//        c

console.log(howHigh(a)); // -> 1
*/

//Test 03
const a = new Node('a');

//      a

console.log(howHigh(a)); // -> 0

//Test 04
console.log(howHigh(null)); // -> -1