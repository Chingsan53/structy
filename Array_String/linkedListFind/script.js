/*
Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative
const linkedListFind = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};

//--------- Recursive -----------//
// const linkedListFind = (head, target) => {
//     if (head === null) return false;
//     if (head.val === target) return true;
//     return linkedListFind(head.next, target);
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

console.log(linkedListFind(a, "c")); // true

//Test 2
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "d"); // true

//Test 3
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "q"); // false

//Test 4
const node1 = new Node("jason");
const node2 = new Node("leneli");

node1.next = node2;

// jason -> leneli

linkedListFind(node1, "jason"); // true

//Test 5
const node1 = new Node(42);

// 42

linkedListFind(node1, 42); // true

//Test 6
const node1 = new Node(42);

// 42

linkedListFind(node1, 100); // false

//Problem
// const linkedListFind = (head, target) => {
//     //todo
// }
