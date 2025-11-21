/**
 * CHALLENGE: Topological Sort
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Directed Acyclic Graph (DAG)
 * - DFS or Kahn's algorithm
 * - Graph algorithms
 * - Dependency ordering
 *
 * Problem:
 * Perform topological sort on a directed acyclic graph (DAG).
 * Return linear ordering where for edge (u,v), u comes before v.
 *
 * Requirements:
 * - Graph as adjacency list
 * - Use DFS or Kahn's algorithm
 * - Return valid topological order
 * - Assume graph is DAG (no cycles)
 *
 * Example:
 * const graph = {
 *   'A': ['C'],
 *   'B': ['C', 'D'],
 *   'C': ['E'],
 *   'D': ['F'],
 *   'E': ['F'],
 *   'F': []
 * };
 * topologicalSort(graph);  // e.g., ['A', 'B', 'C', 'D', 'E', 'F']
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type Graph<T = string> = Record<T & string, T[]>;

function topologicalSort<T extends string>(graph: Graph<T>): T[] {
  // TODO: Implement topological sort
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const graph = {
    'A': ['C'],
    'B': ['C', 'D'],
    'C': ['E'],
    'D': ['F'],
    'E': ['F'],
    'F': []
  };

  const result = topologicalSort(graph);

  // Check that A comes before C
  const aIndex = result.indexOf('A');
  const cIndex = result.indexOf('C');
  console.assert(aIndex < cIndex, "❌ Test 1 failed: A should come before C");
  console.log("✅ Test 1 passed");

  // Check that B comes before D
  const bIndex = result.indexOf('B');
  const dIndex = result.indexOf('D');
  console.assert(bIndex < dIndex, "❌ Test 2 failed: B should come before D");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
