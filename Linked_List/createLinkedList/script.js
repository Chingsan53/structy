/*
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
  const createLinkedList = (values) => {
    // todo
  };
*/

//Iterative
const createLinkedList = (values) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  for (let val of values) {
    tail.next = new Node(val);
    tail = tail.next;
  }
  return dummyHead.next;
};

//Recursive
/*
const createLinkedList = (values, i = 0) => {
    if (i === values.length) return null;
    const head = new Node(values[i]);
    head.next = createLinkedList(values, i + 1);
    return head;
  };
  */

console.log(createLinkedList(["h", "e", "y"]));
// h -> e -> y
console.log(createLinkedList([1, 7, 1, 8]));
// 1 -> 7 -> 1 -> 8
console.log(createLinkedList(["a"]));
// a
console.log(createLinkedList([]));
// null
