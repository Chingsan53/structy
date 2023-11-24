/* ---------- Middle Value --------- */
/* ------- Problem --------- */
/*
    Write a function, middleValue, that takes in the head of a linked list as an argument. The function should return the value of the middle node in the linked list. If the linked list has an even number of nodes, then return the value of the second middle node.

    You may assume that the input list is non-empty.
*/

/* -------- Starter Code --------- */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/*
const middleValue = (head) => {
    // todo
};
*/

/* --------- Solution ---------- */
/* --------- Using an Array ---------- */
const middleValue = (head) => {
    const values = [];

    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    return values[Math.floor(values.length / 2)];
};
// n = number of nodes
// Time: O(n)
// Space: O(n)

/* ---------- Using two pointers ------------ */
/*
const middleValue = (head) => {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.val;
};
*/
// n = number of nodes
// Time: O(n)
// Space: O(1)

/* ----------- Testing ------------- */
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// a -> b -> c -> d -> e
console.log(middleValue(a)); // c

//Test 01
/*
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f
middleValue(a); // d
*/

//Test 02
const x = new Node('x');
const y = new Node('y');
const z = new Node('z');

x.next = y;
y.next = z;

// x -> y -> z
console.log(middleValue(x)); // y

//Test 03
/*
const x = new Node('x');
const y = new Node('y');

x.next = y;

// x -> y
middleValue(x); // y
*/

//Test 04
const q = new Node('q');

// q
console.log(middleValue(q)); // q