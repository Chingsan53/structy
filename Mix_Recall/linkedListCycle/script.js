/* ----------- Linked List Cycle ------------ */
/* ------ Problem ------- */
/*
    Write a function, linkedListCycle, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains a cycle.
*/

/* ------- Starter Code -------- */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/*
const linkedListCycle = (head) => {
    // todo
}
*/

/* ------- Solution --------- */
// Using a set
const linkedListCycle = (head) => {
    const nodes = new Set();

    let current = head;
    while (current !== null) {
        if (nodes.has(current)) return true;
        nodes.add(current);
        current = current.next;
    }

    return false;
};
// n = number of nodes
// Time: O(n)
// Space: O(n)

// Using two pointers
/*
const linkedListCycle = (head) => {
    let slow = head;
    let fast = head;
    let firstIteration = true;
    while (fast !== null && fast.next !== null) {
      if (slow === fast && !firstIteration) return true;

      slow = slow.next;
      fast = fast.next.next;
      firstIteration = false;
    }

    return false;
  };
*/
// n = number of nodes
// Time: O(n)
// Space: O(1)


/* ---------- Testing ----------- */
// Test 00
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;
d.next = b; // cycle

//         _______
//       /        \
// a -> b -> c -> d 

console.log(linkedListCycle(a));  // true

//Test 01
const q = new Node('q');
const r = new Node('r');
const s = new Node('s');
const t = new Node('t');
const u = new Node('u');

q.next = r;
r.next = s;
s.next = t;
t.next = u;
u.next = q; // cycle

//    ________________
//  /                 \
// q -> r -> s -> t -> u 

console.log(linkedListCycle(q));  // true

// Test 02
/*
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListCycle(a);  // false
*/

// Test 03
/*
const q = new Node('q');
const r = new Node('r');
const s = new Node('s');
const t = new Node('t');
const u = new Node('u');

q.next = r;
r.next = s;
s.next = t;
t.next = u;
u.next = t; // cycle

//                   __
//                 /   \
// q -> r -> s -> t -> u 

linkedListCycle(q);  // true
*/

// Test 04
const p = new Node('p');

// p

console.log(linkedListCycle(p)); // false

//Test 05
console.log(linkedListCycle(null)); // false