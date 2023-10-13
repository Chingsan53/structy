/*
Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.


 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//Problem
/*
const isUnivalueList = (head) => {
  // todo
};
*/

//Iterative
const isUnivalueList = (head) => {
  let current = head;

  while (current !== null) {
    if (current.val !== head.val) return false;
    current = current.next;
  }

  return true;
};

//Recursive
/*
const isUnivalueList = (head, prevVal = null) => {
  if (head === null) return true;
  if (prevVal === null || prevVal === head.val) {
    return isUnivalueList(head.next, head.val);
  } else {
    return false;
  }
}
*/

// Test 1
const a = new Node(7);
const b = new Node(7);
const c = new Node(7);
// const c = new Node(4);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

console.log(isUnivalueList(a)); // true

// Test 3
const u = new Node(2);
const v = new Node(2);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);
// const w = new Node(3);
// const x = new Node(3);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 2 -> 2 -> 2

console.log(isUnivalueList(u)); // true

// Test 4
const z = new Node("z");

// z

console.log(isUnivalueList(z)); // true
