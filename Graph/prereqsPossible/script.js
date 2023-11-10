/* ----------- Prereqs Possible -------- */
/* --------- problem --------- */
/*
    Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. The function should return a boolean indicating whether or not it is possible to complete all courses.
*/

/* ---------- Starter Code -------- */
/*
const prereqsPossible = (NumCourses, prereqs) => {
    // todo
}
*/

/* ----------- Solution ---------- */
const prereqsPossible = (numCourses, prereqs) => {
  const visiting = new Set();
  const visited = new Set();

  const graph = buildGraph(numCourses, prereqs);
  for (let node in graph) {
    if (hasCycle(graph, node, visiting, visited)) {
      return false;
    }
  }

  return true;
};

const hasCycle = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;

  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (hasCycle(graph, neighbor, visiting, visited)) {
      return true;
    }
  }

  visiting.delete(node);
  visited.add(node);

  return false;
};

const buildGraph = (numCourses, prereqs) => {
  const graph = {};

  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
  }

  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(String(b));
  }

  return graph;
};

// p = # prereqs
// n = # courses
// Time: O(n + p)
// Space: O(n)

/* ------------ Testing ------------ */
//Test 00
const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
console.log(prereqsPossible(numCourses, prereqs)); // -> true

//Test 01
const numCourses1 = 6;
const prereqs1 = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
  [3, 0],
];
console.log(prereqsPossible(numCourses1, prereqs1)); // -> false

//Test 02
const numCourses2 = 5;
const prereqs2 = [
  [2, 4],
  [1, 0],
  [0, 2],
  [0, 4],
];
console.log(prereqsPossible(numCourses, prereqs)); // -> true

//Test 03
const numCourses3 = 6;
const prereqs3 = [
  [2, 4],
  [1, 0],
  [0, 2],
  [0, 4],
  [5, 3],
  [3, 5],
];
console.log(prereqsPossible(numCourses3, prereqs3)); // -> false

//Test 04
const numCourses4 = 8;
const prereqs4 = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [4, 3],
];
console.log(prereqsPossible(numCourses4, prereqs4)); // -> true

//Test 05
const numCourses5 = 8;
const prereqs5 = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [7, 4],
  [4, 3],
];
console.log(prereqsPossible(numCourses5, prereqs5)); // -> false

//Test 06
const numCourses6 = 42;
const prereqs6 = [[6, 36]];
console.log(prereqsPossible(numCourses6, prereqs6)); // -> true
