/* ---------- Has Cycle --------- */
/* -------- Problem ------- *?
/*
    Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. The function should return a boolean indicating whether or not the graph contains a cycle.
*/

/* ---------- Starter Code ---------- */
/*
const hasCycle = (graph) => {
  // todo
};
*/

/* ---------- Solution ---------- */
const hasCycle = (graph) => {
  const visited = new Set();
  for (let startNode in graph) {
    if (cycleDetect(graph, startNode, new Set(), visited)) return true;
  }
  return false;
};

const cycleDetect = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;

  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (cycleDetect(graph, neighbor, visiting, visited)) return true;
  }

  visiting.delete(node);
  visited.add(node);
  return false;
};
// n = number of nodes
// Time: O(n^2)
// Space: O(n)

/* ----------- Testing ----------- */
//Test 00
console.log(
  hasCycle({
    a: ["b"],
    b: ["c"],
    c: ["a"],
  })
); // -> true

//Test 01
console.log(
  hasCycle({
    a: ["b", "c"],
    b: ["c"],
    c: ["d"],
    d: [],
  })
); // -> false

//Test 02
console.log(
  hasCycle({
    a: ["b", "c"],
    b: [],
    c: [],
    e: ["f"],
    f: ["e"],
  })
); // -> true

//Test 03
console.log(
  hasCycle({
    q: ["r", "s"],
    r: ["t", "u"],
    s: [],
    t: [],
    u: [],
    v: ["w"],
    w: [],
    x: ["w"],
  })
); // -> false

//Test 04
console.log(
  hasCycle({
    a: ["b"],
    b: ["c"],
    c: ["a"],
    g: [],
  })
); // -> true

//Test 05
console.log(
  hasCycle({
    a: ["b"],
    b: ["c"],
    c: ["d"],
    d: ["b"],
  })
); // -> true
