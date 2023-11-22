/* ------------- Permutations ------------ */
/* --------- Problem ---------- */
/*
    Write a function, permutations, that takes in an array an argument. The function should return a 2D array where each subarray represents one of the possible permutations of the array.

    The subarrays may be returned in any order.

    You may assume that the input array contains unique elements.
*/

/* ----------- Starter Code ------------ */
/*
const permutations = (items) => {
    // todo
}
*/

/* ---------- Solution ------------ */
const permutations = (items) => {
    if (items.length === 0) return [[]];

    const first = items[0];
    const perms = permutations(items.slice(1));

    const fullPermutations = [];
    for (let perm of perms) {
        for (let i = 0; i <= perm.length; i += 1) {
            fullPermutations.push([...perm.slice(0, i), first, ...perm.slice(i)]);
        }
    }
    return fullPermutations;
};
// n = length of items array
// Time: ~O(n!)
// Space: ~O(n!)

/* ----------- Testing ----------- */
//Test 00
console.log(permutations(['a', 'b', 'c'])); // -> 
// [ 
//   [ 'a', 'b', 'c' ], 
//   [ 'b', 'a', 'c' ], 
//   [ 'b', 'c', 'a' ], 
//   [ 'a', 'c', 'b' ], 
//   [ 'c', 'a', 'b' ], 
//   [ 'c', 'b', 'a' ] 
// ] 

//Test 01
console.log(permutations(['red', 'blue'])); // ->
// [ 
//   [ 'red', 'blue' ], 
//   [ 'blue', 'red' ] 
// ]

//Test 02
console.log(permutations([8, 2, 1, 4])); // ->
// [ 
//   [ 8, 2, 1, 4 ], [ 2, 8, 1, 4 ], 
//   [ 2, 1, 8, 4 ], [ 2, 1, 4, 8 ], 
//   [ 8, 1, 2, 4 ], [ 1, 8, 2, 4 ], 
//   [ 1, 2, 8, 4 ], [ 1, 2, 4, 8 ], 
//   [ 8, 1, 4, 2 ], [ 1, 8, 4, 2 ], 
//   [ 1, 4, 8, 2 ], [ 1, 4, 2, 8 ], 
//   [ 8, 2, 4, 1 ], [ 2, 8, 4, 1 ], 
//   [ 2, 4, 8, 1 ], [ 2, 4, 1, 8 ], 
//   [ 8, 4, 2, 1 ], [ 4, 8, 2, 1 ], 
//   [ 4, 2, 8, 1 ], [ 4, 2, 1, 8 ], 
//   [ 8, 4, 1, 2 ], [ 4, 8, 1, 2 ], 
//   [ 4, 1, 8, 2 ], [ 4, 1, 2, 8 ] 
// ] 

//Test 03
console.log(permutations([])); // ->
// [
//  [ ]
// ]

