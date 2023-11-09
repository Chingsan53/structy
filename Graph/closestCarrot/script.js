/* ---------- Closest Carrot ---------- */
/* -------- Problem --------- */
/*
    Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.
*/
/* -------- Starter Code -------- */
/*
const closestCarrot = (grid, startRow, startCol) => {

}
*/

/* -------- Solution --------- */
const closestCarrot = (grid, startRow, startCol) => {
  const queue = [[startRow, startCol, 0]];
  const visited = new Set([startRow + "," + startCol]);

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (grid[row][col] === "C") return distance;

    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const neighborPos = neighborRow + "," + neighborCol;
      const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
      const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length;
      if (
        rowInbounds &&
        colInbounds &&
        !visited.has(neighborPos) &&
        grid[neighborRow][neighborCol] !== "X"
      ) {
        visited.add(neighborPos);
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }

  return -1;
};

/* --------- Testing ---------- */
//Test 00
const grid = [
  ["O", "O", "O", "O", "O"],
  ["O", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"],
];

console.log(closestCarrot(grid, 1, 2)); // -> 4

//Test 01
console.log(closestCarrot(grid, 0, 0)); // -> 5

//Test 02
const grid2 = [
  ["O", "O", "X", "X", "X"],
  ["O", "X", "X", "X", "C"],
  ["O", "X", "O", "X", "X"],
  ["O", "O", "O", "O", "O"],
  ["O", "X", "X", "X", "X"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "C", "O", "O"],
  ["O", "O", "O", "O", "O"],
];

console.log(closestCarrot(grid2, 3, 4)); // -> 9

//test 03
const grid3 = [
  ["O", "O", "X", "O", "O"],
  ["O", "X", "X", "X", "O"],
  ["O", "X", "C", "C", "O"],
];

console.log(closestCarrot(grid3, 1, 4)); // -> 2

//Test 04
const grid4 = [
  ["O", "O", "X", "O", "O"],
  ["O", "X", "X", "X", "O"],
  ["O", "X", "C", "C", "O"],
];

console.log(closestCarrot(grid4, 2, 0)); // -> -1

//Test 05
const grid5 = [
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "X"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "C"],
];

console.log(closestCarrot(grid5, 0, 0)); // -> -1

//Test 06
const grid6 = [
  ["O", "O", "X", "C", "O"],
  ["O", "X", "X", "X", "O"],
  ["C", "X", "O", "O", "O"],
];

console.log(closestCarrot(grid6, 2, 2)); // -> 5
