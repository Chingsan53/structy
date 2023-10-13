/*
Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.
*/

//Problem
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const treeMinValue = (root) => {
//   // todo
//     const queue=[root]
//     let min=Infinity
//   if(root===null) return false
//   while (queue.length>0)
//     {
//       let current=queue.shift()
//       if(current!==null)
//         {
//           if(min>current.val)
//             {
//               min=current.val
//             }
//           if(current.left!==null) queue.push(current.left)
//           if(current.right!==null) queue.push(current.right)
//         }
//     }
//   return min
// };

//Exercise
/*
const treeMinValue = (root) => {
    // todo

    if (root === null) return Infinity

    const LeftValue = treeMinValue(root.left)
    const RightValue = treeMinValue(root.right)


    return Math.min(root.val, LeftValue, RightValue)
};

module.exports = {
    treeMinValue,
};
*/

//Solution
//Dept First (recursive)
/*
const treeMinValue = (root) => {
    if (root === null) return Infinity;
    const smallestLeftValue = treeMinValue(root.left);
    const smallestRightValue = treeMinValue(root.right);
    return Math.min(root.val, smallestLeftValue, smallestRightValue);
};
*/

//Depth First (Iterative)
const treeMinValue = (root) => {
    const stack = [root];

    let smallest = Infinity;
    while (stack.length) {
        const current = stack.pop();
        if (current.val < smallest) smallest = current.val;

        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
    }
    return smallest;
};

/*
//Breadth First (Iterative)
const treeMinValue = (root) => {
    const queue = [root];
  
    let smallest = Infinity;
    while (queue.length) {
      const current = queue.shift();
      if (current.val < smallest) smallest = current.val;
  
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
    return smallest;
  };
  */

//Testings
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

console.log(treeMinValue(a)); // -> -2
*/

//Test 01
const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(14);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

console.log(treeMinValue(a)); // -> 3

//Test 02
/*
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
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
// -3   -4   -13
//     /       \
//    -2       -2

console.log(treeMinValue(a)); // -> -13
*/

//Test 03
/*
const a = new Node(42);

//        42

treeMinValue(a); // -> 42
*/