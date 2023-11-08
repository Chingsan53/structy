/* ------------ Has Path ------------ */
/* --------- Problem --------- */
/*
    Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

    Hey. This is our first graph problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
 */

/* ---------- Starter Code ----------- */
/* DFS interative
const hasPath = (graph, src, dst) => {
  // todo
  const stack=[src]
  while(stack.length>0)
    {
      const current=stack.pop()
      for (let neighbor of graph[current])
        {
          stack.push(neighbor)
          if(neighbor===dst)
            {
              return true
            }
        }
      
    }
  return false
};*/

//DFS recursive
/*
const hasPath=(graph,src,dst)=>
{
  if(src===dst) return true
    for (let neighbor of graph[src])
      {
        if(hasPath(graph,neighbor,dst))
          {
            return true
          }
      }
  return false
}
*/

//BFS iterative
/*
const hasPath = (graph, src, dst) => {
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
      if (neighbor === dst) return true;
    }
  }
  return false;
};
*/
/* ------------- Solution ----------- */
// Depth First
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false;
};
// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)

// Breadth First
/*
const hasPath = (graph, src, dst) => {
  const queue = [src];

  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};
*/

/* ----------- Testing ----------- */
//Test 00
const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath(graph, "f", "k")); // true

//Test 01
console.log(hasPath(graph, "f", "j")); // false

//Test 02
console.log(hasPath(graph, "i", "h")); // true

//Test 03
const graph1 = {
  v: ["x", "w"],
  w: [],
  x: [],
  y: ["z"],
  z: [],
};

console.log(hasPath(graph1, "v", "w")); // true

//Test 04
console.log(hasPath(graph1, "v", "w")); // true
