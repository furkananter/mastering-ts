/**
 * CHALLENGE: Hopcroft-Karp Maximum Bipartite Matching
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Bipartite graphs
 * - Maximum matching
 * - Hopcroft-Karp algorithm
 * - Augmenting paths
 *
 * Problem:
 * Find maximum matching in bipartite graph using Hopcroft-Karp.
 * Faster than simple augmenting path algorithms.
 *
 * Requirements:
 * - Bipartite graph: {left_node: [right_nodes...]}
 * - Find maximum number of edges with no shared vertices
 * - O(E√V) time complexity
 * - Return size of maximum matching
 *
 * Example:
 * const graph = {
 *   0: [0, 1],
 *   1: [0, 2],
 *   2: [1]
 * };
 * hopcroftKarp(graph, 3, 3);  // 3
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type NodeId = number;
type BipartiteGraph = Record<NodeId, ReadonlyArray<NodeId>>;

function hopcroftKarp(
  graph: BipartiteGraph,
  leftSize: number,
  rightSize: number
): number {
  // Implementation here
  return 0;
}

function bfsHK(
  graph: BipartiteGraph,
  pairU: Map<number, number>,
  pairV: Map<number, number>,
  dist: Map<number, number>,
  leftSize: number
): boolean {
  // BFS to find augmenting paths
  return false;
}

function dfsHK(
  u: NodeId,
  graph: BipartiteGraph,
  pairU: Map<number, number>,
  pairV: Map<number, number>,
  dist: Map<number, number>
): boolean {
  // DFS to find augmenting path from u
  return false;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const graph1 = {
    0: [0, 1],
    1: [0, 2],
    2: [1]
  };
  console.assert(hopcroftKarp(graph1, 3, 3) === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const graph2 = {
    0: [0],
    1: [0, 1],
    2: [1]
  };
  console.assert(hopcroftKarp(graph2, 3, 2) === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
