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
