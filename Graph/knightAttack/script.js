/* ----------- Knight Attack --------- */
/* --------- Problem ---------- */
/*
    A knight and a pawn are on a chess board. Can you figure out the minimum number of moves required for the knight to travel to the same position of the pawn? On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions it can move to.

    Write a function, knightAttack, that takes in 5 arguments:

    n, kr, kc, pr, pc

    n = the length of the chess board
    kr = the starting row of the knight
    kc = the starting column of the knight
    pr = the row of the pawn
    pc = the column of the pawn
    The function should return a number representing the minimum number of moves required for the knight to land ontop of the pawn. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. If it is not possible for the knight to attack the pawn, then return null.
*/

/* ----------- Starter Code ----------- */
/*
const knightAttack = (n, kr, kc, pr, pc) => {
    // todo
};
*/

/* ----------- Solution ----------- */
const knightAttack = (n, kr, kc, pr, pc) => {
  const visited = new Set();
  visited.add(kr + "," + kc);
  const queue = [[kr, kc, 0]];
  while (queue.length > 0) {
    const [r, c, step] = queue.shift();
    if (r === pr && c === pc) {
      return step;
    }
    const neighbors = getKnightMoves(n, r, c);
    for (let neighbor of neighbors) {
      const [neighborRow, neighborCol] = neighbor;
      const neighborKey = neighborRow + "," + neighborCol;
      if (!visited.has(neighborKey)) {
        visited.add(neighborKey);
        queue.push([neighborRow, neighborCol, step + 1]);
      }
    }
  }
  return null;
};

const getKnightMoves = (n, r, c) => {
  const positions = [
    [r + 2, c + 1],
    [r - 2, c + 1],
    [r + 2, c - 1],
    [r - 2, c - 1],
    [r + 1, c + 2],
    [r - 1, c + 2],
    [r + 1, c - 2],
    [r - 1, c - 2],
  ];

  const inboundsPositions = [];
  for (let pos of positions) {
    const [newRow, newCol] = pos;
    if (0 <= newRow && newRow < n && 0 <= newCol && newCol < n) {
      inboundsPositions.push(pos);
    }
  }

  return inboundsPositions;
};

// n = length of the board
// Time: O(n^2)
// Space: O(n^2)

/* ------------- Testing ----------- */
//Test 00
console.log(knightAttack(8, 1, 1, 2, 2)); // -> 2
//Test 01
console.log(knightAttack(8, 1, 1, 2, 3)); // -> 1
//Test 02
console.log(knightAttack(8, 0, 3, 4, 2)); // -> 3
//Test 03
console.log(knightAttack(8, 0, 3, 5, 2)); // -> 4
//Test 04
console.log(knightAttack(24, 4, 7, 19, 20)); // -> 10
//Test 05
console.log(knightAttack(100, 21, 10, 0, 0)); // -> 11
//Test 06
console.log(knightAttack(3, 0, 0, 1, 2)); // -> 1
//Test 07
console.log(knightAttack(3, 0, 0, 1, 1)); // -> null
