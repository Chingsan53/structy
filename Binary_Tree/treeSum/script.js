class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const treeSum = (root) => {
//   // todo
//   const stack=[root]
//   let sum=0
//   if(root===null) return 0
//   while (stack.length>0)
//     {
//       let current=stack.pop()

//       if(current!==null)
//         {
//           sum+=current.val
//           if(current.right!==null) stack.push(current.right)
//           if(current.left!==null) stack.push(current.left)

//         }
//     }
//   return sum
// };

// const treeSum = (root) => {
//   // todo
//   const queue=[root]
//   let sum=0
//   if(root===null) return 0
//   while (queue.length>0)
//     {
//       let current=queue.shift()

//       if(current!==null)
//         {
//           sum+=current.val
//           if(current.right!==null) queue.push(current.right)
//           if(current.left!==null) queue.push(current.left)

//         }
//     }
//   return sum
// };

//Exercise
/*
const treeSum = (root) => {
    if(root===null) return 0
    const LeftValue=treeSum(root.left)
    const RightValue=treeSum(root.right)
    return root.val+LeftValue+RightValue
  };
  */


//Solution
//Depth First
const treeSum = (root) => {
    if (root === null) return 0;

    return root.val + treeSum(root.left) + treeSum(root.right);
};

//Breadth First
/*
const treeSum = (root) => {
    if (root === null) return 0;
  
    const queue = [root];
    let totalSum = 0;
    while (queue.length > 0) {
      const node = queue.shift();
      totalSum += node.val;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  
    return totalSum;
  };
  */

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

console.log(treeSum(a)); // -> 21
*/

//Test 01
const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

console.log(treeSum(a)); // -> 10
console.log(null); // -> 0