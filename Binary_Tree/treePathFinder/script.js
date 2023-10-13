class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
/*
const pathFinder = (root, target) => {
    const result = pathFinderHelper(root, target)
    if (result === null) {
        return null
    } else {
        return result.reverse()
    }
}
*/

const pathFinderHelper = (root, target) => {
    // todo
    if (root === null) return null
    if (root.val === target) return [root.val]


    const LeftValue = pathFinderHelper(root.left, target)
    if (LeftValue !== null) {
        LeftValue.push(root.val)
        return LeftValue
    }

    const RightValue = pathFinderHelper(root.right, target)
    if (RightValue !== null) {
        RightValue.push(root.val)
        return RightValue
    }
    return null
};

//Solutions
//Depth First
const pathFinder = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [root.val];

    const leftPath = pathFinder(root.left, target);
    if (leftPath !== null) return [root.val, ...leftPath];

    const rightPath = pathFinder(root.right, target);
    if (rightPath !== null) return [root.val, ...rightPath];

    return null;
};

//Depth first w/ push
/*
const pathFinder = (root, target) => {
    const result = pathFinderHelper(root, target);
    if (result === null) {
      return null;
    } else {
      return result.reverse();
    }
  };
  
  const pathFinderHelper = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [ root.val ];
    
    const leftPath = pathFinderHelper(root.left, target);
    if (leftPath !== null) {
      leftPath.push(root.val);
      return leftPath;
    }
    
    const rightPath = pathFinderHelper(root.right, target);
    if (rightPath !== null) {
      rightPath.push(root.val);
      return rightPath;
    }
    
    return null;
  };
*/


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

console.log(pathFinder(a, 'e')); // -> [ 'a', 'b', 'e' ]
*/

//Test 01
//console.log(pathFinder(a, 'p')); // -> null

//Test 02
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

console.log(pathFinder(a, "c")); // -> ['a', 'c']
*/

//Test 03

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

console.log(pathFinder(a, "h")); // -> ['a', 'c', 'f', 'h']

//Test 04
const x = new Node("x");

//      x

console.log(pathFinder(x, "x")); // -> ['x']

//Test 05
console.log(pathFinder(null, "x")); // -> null

//Test 06
const root = new Node(0);
let curr = root;
for (let i = 1; i <= 6000; i += 1) {
    curr.right = new Node(i);
    curr = curr.right;
}

//      0
//       \
//        1
//         \
//          2
//           \
//            3
//             .
//              .
//               .
//              5999
//                \
//                6000

console.log(pathFinder(root, 3451)); // -> [0, 1, 2, 3, ..., 3450, 3451]