class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//Exercise
/*
const breadthFirstValues = (root) => {
    // todo
    const queue=[root]
    const array=[]
    if(root===null) return []
    while (queue.length>0)
      {
        let current=queue.shift()
        if(current!==null)
          {
            array.push(current.val)
            if(current.left!==null) queue.push(current.left)
            if(current.right!==null) queue.push(current.right)
            
          }
      }
    return array
  };
  
  module.exports = {
    breadthFirstValues,
  };
  */

const breadthFirstValues = (root) => {
  if (root === null) return [];

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    values.push(node.val);

    if (node.left !== null) queue.push(node.left);

    if (node.right !== null) queue.push(node.right);
  }

  return values;
};

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

console.log(breadthFirstValues(a));
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
*/

//Test 01
const a = new Node("a");
new Node("a");
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

console.log(breadthFirstValues(a));
//   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

//Test 02
/*
const a = new Node('a');

//      a

breadthFirstValues(a); 
//    -> ['a']
*/

//Test 03
/*
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const x = new Node('x');

a.right = b;
b.left = c;
c.left = x;
c.right = d;
d.right = e;

//      a
//       \
//        b
//       /
//      c
//    /  \
//   x    d
//         \
//          e

breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'x', 'd', 'e']
*/
