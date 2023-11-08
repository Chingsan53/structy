/*
Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
const longestStreak = (head) => {
    // todo
  };
  */

//Iterative
const longestStreak = (head) => {
  let maxStreak = 0;
  let currentStreak = 0;
  let currentNode = head;
  let prevVal = null;

  while (currentNode !== null) {
    if (currentNode.val === prevVal) {
      currentStreak += 1;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }

    prevVal = currentNode.val;
    currentNode = currentNode.next;
  }

  return maxStreak;
};

//Test 1

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

//Test 2
// const a = new Node(3);
// const b = new Node(3);
// const c = new Node(3);
// const d = new Node(3);
// const e = new Node(9);
// const f = new Node(9);

//Test 3
// const a = new Node(9);
// const b = new Node(9);
// const c = new Node(1);
// const d = new Node(9);
// const e = new Node(9);
// const f = new Node(9);

//Test 4
// const a = new Node(5);
// const b = new Node(5);
// a.next = b;

//Test 5
// const a = new Node(4);

//Test 6
// longestStreak(null); // 0

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

console.log(longestStreak(a)); // 3

//Test 3
