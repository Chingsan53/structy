/* ------------ Summing Squares ----------- */
/* ----------- Problem ----------- */
/*
    Write a function, summingSquares, that takes a target number as an argument. The function should return the minimum number of perfect squares that sum to the target. A perfect square is a number of the form (i*i) where i >= 1.

    For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.

    Given 12:

    summingSquares(12) -> 3

    The minimum squares required for 12 is three, by doing 4 + 4 + 4.

    Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.
*/

/* ----------- Starter Code ----------- */
/*
const summingSquares = (n) => {
    // todo
  };
  */

/* ----------- Solution ------------ */
const summingSquares = (n, memo = {}) => {
    if (n in memo) return memo[n];

    if (n === 0) return 0;

    let minSquares = Infinity;
    for (let i = 1; i <= Math.sqrt(n); i += 1) {
        const square = i * i;
        const numSquares = 1 + summingSquares(n - square, memo);
        minSquares = Math.min(minSquares, numSquares);
    }

    memo[n] = minSquares;
    return minSquares;
};
// n = length of nums
// Time: O(n * sqrt(n))
// Space: O(n)

/* ------------ Testing ----------- */
console.log(summingSquares(8)); // -> 2
console.log(summingSquares(9)); // -> 1
console.log(summingSquares(12)); // -> 3
console.log(summingSquares(1)); // -> 1
console.log(summingSquares(31)); // -> 4
console.log(summingSquares(50)); // -> 2
console.log(summingSquares(68)); // -> 2
console.log(summingSquares(87)); // -> 4
