class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//Problem
/*
Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.
*/


// const treeIncludes = (root, target) => {
//   // todo
//   const stack=[root]
//   if(root===null) return false
//   while (stack.length>0)
//     {
//       let current=stack.pop()
//       if(current!==null)
//         {
//           if(current.val===target) return true
//           if(current.left!==null) stack.push(current.left)
//           if(current.right!==null) stack.push(current.right)
//         }
//     }
//   return false
// };

// const treeIncludes = (root, target) => {
//   // todo
//   const queue=[root]
//   if(root===null) return false
//   while (queue.length>0)
//     {
//       let current=queue.shift()
//       if(current!==null)
//         {
//           if(current.val===target) return true
//           if(current.left!==null) queue.push(current.left)
//           if(current.right!==null) queue.push(current.right)
//         }
//     }
//   return false
// };

//Exercise
/*
const treeIncludes = (root, target) => {
    // todo

    if (root === null) return false
    if (root.val === target) return true
    const LeftValue = treeIncludes(root.left, target)
    const RightValue = treeIncludes(root.right, target)

    return LeftValue || RightValue
};
module.exports = {
    treeIncludes,
};
*/

//Solution
//Breadth First Search
const treeIncludes = (root, target) => {
    if (root === null) return false;

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node.val === target) return true;
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }

    return false;
};

//Depth First Search
/*
const treeIncludes = (root, target) => {
    if (root === null) return false;
    if (root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
  };
*/

//Testings
//test 00
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
e.right = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(treeIncludes(a, "e")); // -> true

//Test 01
console.log(treeIncludes(a, "a")); // -> true
//test 02
console.log(treeIncludes(a, "n")); // -> false
//test 03
console.log(treeIncludes(a, "p")); // -> false
//Test 05
console.log(treeIncludes(null, "b")); // -> false