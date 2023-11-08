/*
Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
  const insertNode = (head, value, index) => {
    // todo
  };
  */

//Iterative
const insertNode = (head, value, index) => {
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index - 1) {
      const next = current.next;
      current.next = new Node(value);
      current.next.next = next;
    }

    count += 1;
    current = current.next;
  }
  return head;
};

//Recursive
/*
const insertNode = (head, value, index, count = 0) => {
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  
  if (count === index - 1) {
    const next = head.next;
    head.next = new Node(value);
    head.next.next = next;
    return head;
  }
  
  insertNode(head.next, value, index, count + 1);
  return head;
};
*/

//Test 1
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(insertNode(a, "x", 2));
// a -> b -> x -> c -> d

//Test 2
//console.log(insertNode(a, "v", 3));
// a -> b -> c -> v -> d

//Test 3
//console.log(insertNode(a, 'm', 4));
// a -> b -> c -> d -> m

//Test 4
// const a = new Node("a");
// const b = new Node("b");

// a.next = b;

// // a -> b

// insertNode(a, 'z', 0);
// z -> a -> b
