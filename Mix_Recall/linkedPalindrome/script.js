/* -------------- Linked Palindrome ------------ */
/* --------- Problem ---------- */
/*
    Write a function, linkedPalindrome, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list is a palindrome. A palindrome is a sequence that is the same both forwards and backwards.
*/

/* ---------- Starter Code ---------- */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/*
const linkedPalindrome = (head) => {
    // todo
}
*/

/* ----------- Solution ----------- */
const linkedPalindrome = (head) => {
    const values = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    return values.join(',') === values.reverse().join(',');
};
// n = number of nodes
// Time: O(n)
// Space: O(n)

/* ----------- Testing ----------- */
//Test 00
const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(7);
const e = new Node(2);
const f = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 3 -> 2 -> 7 -> 7 -> 2 -> 3
console.log(linkedPalindrome(a)); // true

//Test 01
const h = new Node(3);
const i = new Node(2);
const j = new Node(4);

h.next = i;
i.next = j;

// 3 -> 2 -> 4
console.log(linkedPalindrome(h)); // false

const k = new Node(3);
const l = new Node(2);
const m = new Node(3);

k.next = l;
l.next = m;

// 3 -> 2 -> 3
console.log(linkedPalindrome(k)); // true

//Test 02
/*
const a = new Node(0);
const b = new Node(1);
const c = new Node(0);
const d = new Node(1);
const e = new Node(0);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 0 -> 1 -> 0 -> 1 -> 0
linkedPalindrome(a); // true
*/

//Test 03
/*
const a = new Node(0);
const b = new Node(1);
const c = new Node(0);
const d = new Node(1);
const e = new Node(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 0 -> 1 -> 0 -> 1 -> 1
linkedPalindrome(a); // false
*/

//Test 05
const z = new Node(5);

// 5
console.log(linkedPalindrome(z)); // true

//Test 06
console.log(linkedPalindrome(null)); // true