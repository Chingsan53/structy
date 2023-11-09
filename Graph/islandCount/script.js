/* ------------- Island count ----------- */
/* --------- Problem ---------- */
/*
    Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
*/

/* -------- Starter Code ---------- */
/*
const islandCount = (grid) => {
    //todo
};
*/

/* ---------- Solution ------------ */

//Depth First
const islandCount = (grid) => {
  const visited = new Set();

  let count = 0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }

  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === "W") return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);
  return true;
};
// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)

/* ------------- Testing ------------ */
//Test 00
const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid)); // -> 3

//Test 01
const grid2 = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

console.log(islandCount(grid2)); // -> 4

//Test 02
const grid3 = [
  ["L", "L", "L"],
  ["L", "L", "L"],
  ["L", "L", "L"],
];

console.log(islandCount(grid3)); // -> 1

//Test 03
const grid4 = [
  ["W", "W"],
  ["W", "W"],
  ["W", "W"],
];

console.log(islandCount(grid4)); // -> 0
