/* ---------- Longest Path -------- */
/* ------- Problem --------- */
/*
    Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph. The function should return the length of the longest path within the graph. A path may start and end at any two nodes. The length of a path is considered the number of edges in the path, not the number of nodes.

*/

/* --------- Starter Code --------- */
/*
const longestPath = (graph) => {
    //todo
}
*/

/* ---------- Solution ---------- */
const longestPath = (graph) => {
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }

  for (let node in graph) {
    traverseDistance(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];

  let maxDistance = 0;
  for (let neighbor of graph[node]) {
    const attempt = traverseDistance(graph, neighbor, distance);
    if (attempt > maxDistance) maxDistance = attempt;
  }

  distance[node] = 1 + maxDistance;
  return distance[node];
};
// e = # edges
// n = # nodes
// Time: O(e)
// Space: O(n)

/* ------------- Testing ----------- */
//Test 00
const graph = {
  a: ["c", "b"],
  b: ["c"],
  c: [],
};

console.log(longestPath(graph)); // -> 2

//Test 01
const graph2 = {
  a: ["c", "b"],
  b: ["c"],
  c: [],
  q: ["r"],
  r: ["s", "u", "t"],
  s: ["t"],
  t: ["u"],
  u: [],
};

console.log(longestPath(graph2)); // -> 4

//Test 02
const graph3 = {
  h: ["i", "j", "k"],
  g: ["h"],
  i: [],
  j: [],
  k: [],
  x: ["y"],
  y: [],
};

console.log(longestPath(graph3)); // -> 2

//Test 03
const graph4 = {
  a: ["b"],
  b: ["c"],
  c: [],
  e: ["f"],
  f: ["g"],
  g: ["h"],
  h: [],
};

console.log(longestPath(graph4)); // -> 3
