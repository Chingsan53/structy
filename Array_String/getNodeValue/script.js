/*
    Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

    If there is no node at the given index, then return null.


*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Problem
/*
const getNodeValue = (head, index) => {
  // todo
};
*/

const getNodeValue = (head, index) => {
  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index) return current.val;
    current = current.next;
    count += 1;
  }
  return null;
};

// Test 1
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(getNodeValue(a, 2)); // 'c'

// Test 2

// a -> b -> c -> d

console.log(getNodeValue(a, 3)); // 'd'

// Test 3

// a -> b -> c -> d

console.log(getNodeValue(a, 7)); // null

// Test 4
const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;

// banana -> mango

console.log(getNodeValue(node1, 0)); // 'banana'

// Test 5
console.log(getNodeValue(node1, 1)); // 'mango'
