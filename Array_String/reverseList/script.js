/*
    Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Problem
/*
const reverseList = (head) => {
    // todo
};
*/

//Iterative
const reverseList = (head) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

//Recursive
/*
const reverseList = (head, prev = null) => {
    if (head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseList(next, head);
  };
*/

//Test 1
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

console.log(reverseList(a)); // f -> e -> d -> c -> b -> a

//Test 2

const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

console.log(reverseList(x)); // y -> x

//Test 3
const p = new Node("p");

// p

console.log(reverseList(p)); // p
