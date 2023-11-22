/* ----------- Subset ----------- */
/* ---------- Problem ---------- */
/*
    Write a function, subsets, that takes in an array as an argument. The function should return a 2D array where each subarray represents one of the possible subsets of the array.

    The elements within the subsets and the subsets themselves may be returned in any order.

    You may assume that the input array contains unique elements.
*/

/* -------------- Starter Code ------------- */
/*
const subsets = (elements) => {
    // todo
};
*/

/* -------------- Solution ------------- */
const subsets = (elements) => {
    if (elements.length === 0) return [[]];

    const ele = elements[0];
    const remainingElements = elements.slice(1);
    const subsetsWithoutEle = subsets(remainingElements);
    const subsetsWithEle = subsetsWithoutEle.map((sub) => [ele, ...sub]);
    return [...subsetsWithoutEle, ...subsetsWithEle];
};
// n = length of elements array
// Time: ~O(2^n)
// Space: ~O(2^n)

/* ------------- Testing ------------- */
//Testing 00
console.table(subsets(['a', 'b'])); // ->
// [ 
//   [], 
//   [ 'b' ], 
//   [ 'a' ], 
//   [ 'a', 'b' ] 
// ]

//Testing 01
console.table(subsets(['a', 'b', 'c'])); // ->
// [
//   [],
//   [ 'c' ],
//   [ 'b' ],
//   [ 'b', 'c' ],
//   [ 'a' ],
//   [ 'a', 'c' ],
//   [ 'a', 'b' ],
//   [ 'a', 'b', 'c' ]
// ]

//Testing 02
console.table(subsets(['x'])); // ->
// [ 
//   [], 
//   [ 'x' ] 
// ]

//Testing 03
console.table(subsets([])); // ->
// [ 
//   []
// ]

//Testing 04
console.table(subsets(['q', 'r', 's', 't'])); // ->
// [
//   [],
//   [ 't' ],
//   [ 's' ],
//   [ 's', 't' ],
//   [ 'r' ],
//   [ 'r', 't' ],
//   [ 'r', 's' ],
//   [ 'r', 's', 't' ],
//   [ 'q' ],
//   [ 'q', 't' ],
//   [ 'q', 's' ],
//   [ 'q', 's', 't' ],
//   [ 'q', 'r' ],
//   [ 'q', 'r', 't' ],
//   [ 'q', 'r', 's' ],
//   [ 'q', 'r', 's', 't' ]
// ]
