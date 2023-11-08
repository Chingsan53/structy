/* --------- Undirected Path ----------- */
/* -------- Problem -------- */
/*
    Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/

/* ---------- Starter Code ----------- */
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) {
      return true;
    }
  }
  return false;
};
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

//Test
console.log(undirectedPath(edges, "l", "j")); // -> true

//Test 0
console.log(undirectedPath(edges, "j", "m")); // -> true

//Test 1
console.log(undirectedPath(edges, "m", "j")); // -> true

//Test 2
console.log(undirectedPath(edges, "k", "o")); // -> false

//Test 3
console.log(undirectedPath(edges, "i", "o")); // -> false

//Test 4
const edges2 = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

console.log(undirectedPath(edges2, "a", "b")); // -> true

//Test 5
console.log(undirectedPath(edges2, "r", "t")); // -> true

//Test 6
console.log(undirectedPath(edges2, "r", "b")); // -> false

//Test 7
const edges3 = [
  ["s", "r"],
  ["t", "q"],
  ["q", "r"],
];

console.log(undirectedPath(edges3, "r", "t")); // -> true
