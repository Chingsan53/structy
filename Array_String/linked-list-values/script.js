/*
    Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

    Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive! -AZ
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative
const linkedListValues = (head) => {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};

//----------- Recursive Method -------------//
// const linkedListValues = (head) => {
//     const values = [];
//     _linkedListValues(head, values);
//     return values;
//   };

//   const _linkedListValues = (head, values) => {
//     if (head === null) return;
//     values.push(head.val);
//     _linkedListValues(head.next, values);
//   };

//Test 1
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]

//Test 2
const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

linkedListValues(x); // -> [ 'x', 'y' ]

//Test 3
const q = new Node("q"); // q

linkedListValues(q); // -> [ 'q' ]

//Test 4
linkedListValues(null); // -> [ ]

//Problem

/*
    const linkedListValues = (head) => {
    // todo
    };

    module.exports = {
    linkedListValues,
    };
*/
