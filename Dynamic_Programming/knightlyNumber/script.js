/* ----------- Knightly Number ------------ */
/* --------- Problem ----------- */
/*
    A knight is on a chess board. Can you figure out the total number of ways the knight can move to a target position in exactly m moves? On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions it can move to.

    Write a function, knightlyNumber, that takes in 6 arguments:

    n, m, kr, kc, pr, pc

    n = the length of the chess board
    m = the number of moves that must be used
    kr = the starting row of the knight
    kc = the starting column of the knight
    pr = the target row
    pc = the target column
    The function should return the number of different ways the knight can move to the target in exactly m moves. The knight can revisit positions of the board if needed. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7.
*/

/* ----------- Starter Code -------------- */
/*
const knightlyNumber = (n, m, kr, kc, pr, pc) => {
    // todo
  };
*/

/* ----------- Solution ------------ */
const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
    const key = m + ',' + kr + ',' + kc;
    if (key in memo) {
        return memo[key];
    }

    if (kr < 0 || kr >= n || kc < 0 || kc >= n) {
        return 0;
    }

    if (m === 0) {
        if (kr === pr && kc === pc) {
            return 1;
        } else {
            return 0;
        }
    }

    const neighbors = [
        [kr + 2, kc + 1],
        [kr - 2, kc + 1],
        [kr + 2, kc - 1],
        [kr - 2, kc - 1],
        [kr + 1, kc + 2],
        [kr - 1, kc + 2],
        [kr + 1, kc - 2],
        [kr - 1, kc - 2],
    ];

    let count = 0;
    for (let neighbor of neighbors) {
        const [neighborRow, neighborCol] = neighbor;
        count += knightlyNumber(n, m - 1, neighborRow, neighborCol, pr, pc, memo);
    }

    memo[key] = count;
    return count;
};
// n = length of the board
// m = number of moves
// Time: O(m * n^2)
// Space: O(m * n^2)

/* --------- Testing ---------- */
console.log(knightlyNumber(8, 2, 4, 4, 5, 5)); // -> 2
console.log(knightlyNumber(8, 2, 7, 1, 7, 1)); // -> 3
console.log(knightlyNumber(8, 2, 5, 4, 5, 4)); // -> 8
console.log(knightlyNumber(8, 3, 5, 2, 4, 4)); // -> 21
console.log(knightlyNumber(20, 6, 18, 7, 10, 15)); // -> 60
console.log(knightlyNumber(20, 12, 8, 3, 9, 14)); // -> 98410127
console.log(knightlyNumber(8, 2, 0, 0, 1, 1)); // -> 0