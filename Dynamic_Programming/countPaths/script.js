/* ------------- Count Paths ------------- */
/* --------- Problem ----------- */
/*
    Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.
*/

/* ------------ Starter Code --------------- */
/*
const countPaths = (grid) => {
    // todo
}
*/

/* ------------- Solution ------------ */
const countPaths = (grid, r = 0, c = 0, memo = {}) => {
    const pos = r + ',' + c;
    if (pos in memo) return memo[pos];

    if (r === grid.length || c === grid[0].length || grid[r][c] === 'X') return 0;

    if (r === grid.length - 1 && c === grid[0].length - 1) return 1;

    memo[pos] = countPaths(grid, r + 1, c, memo) + countPaths(grid, r, c + 1, memo);
    return memo[pos];
};

// r = # rows
// c = # columns
// Time: O(r*c)
// Space: O(r*c)

/* -------------- Testing ---------------- */
//Test 00
const grid = [
    ["O", "O"],
    ["O", "O"],
];
console.log(countPaths(grid)); // -> 2


//Test 01
const grid1 = [
    ["O", "O", "X"],
    ["O", "O", "O"],
    ["O", "O", "O"],
];
console.log(countPaths(grid1)); // -> 5

//Test 02
const grid2 = [
    ["O", "O", "O"],
    ["O", "O", "X"],
    ["O", "O", "O"],
];
console.log(countPaths(grid2)); // -> 3

//Test 03
const grid3 = [
    ["O", "O", "O"],
    ["O", "X", "X"],
    ["O", "O", "O"],
];
console.log(countPaths(grid3)); // -> 1

//Test 04
const grid4 = [
    ["O", "O", "X", "O", "O", "O"],
    ["O", "O", "X", "O", "O", "O"],
    ["X", "O", "X", "O", "O", "O"],
    ["X", "X", "X", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O"],
];
console.log(countPaths(grid4)); // -> 0

//Test 05
const grid5 = [
    ["O", "O", "X", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "X"],
    ["X", "O", "O", "O", "O", "O"],
    ["X", "X", "X", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O"],
];
console.log(countPaths(grid5)); // -> 42
