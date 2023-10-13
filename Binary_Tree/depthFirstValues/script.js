class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const depthFirstValues = (root) => {
//   // todo
//    const stack=[root]
//    const array=[]
//    if(root===null) return array
//   while (stack.length>0)
//     {
//       let current=stack.pop()
//       if(current!==null)
//         {
//           array.push(current.val)
//           if(current.right!==null) stack.push(current.right)
//           if(current.left!==null) stack.push(current.left)
//         }
//     }
//   return array
// };

//Exercise
/*
const depthFirstValues = (root) => {
  // todo
  const array = [];
  if (root === null) return array;

  array.push(root.val);
  const valueRight = depthFirstValues(root.right);
  const valueLeft = depthFirstValues(root.left);
  return [root.val, ...valueLeft, ...valueRight];
};
*/

//Solution
const depthFirstValues = (root) => {
  if (root === null) return [];

  const values = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.val);

    if (node.right !== null) stack.push(node.right);

    if (node.left !== null) stack.push(node.left);
  }

  return values;
};

//Time and Space complexity
// n = number of nodes
// Time: O(n)
// Space: O(n)

//Testings

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

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
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

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']
*/

//Test 02
/*
const a = new Node("a");
console.log(depthFirstValues(a)); //-> ['a']
*/

//Test 03
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.right = b;
b.left = c;
c.right = d;
d.right = e;

//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'c', 'd', 'e']
