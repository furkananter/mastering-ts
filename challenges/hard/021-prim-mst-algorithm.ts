/**
 * CHALLENGE: Prim's Minimum Spanning Tree Algorithm
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - Graph algorithms
 * - Minimum Spanning Tree
 * - Priority Queue
 * - Greedy algorithm
 *
 * Problem:
 * Implement Prim's algorithm to find MST. Start from any vertex,
 * greedily add minimum weight edge connecting tree to non-tree vertex.
 *
 * Requirements:
 * - Adjacency list: {node: [[neighbor, weight], ...]}
 * - Use priority queue for edge selection
 * - Return total MST weight
 * - Start from vertex 0
 *
 * Example:
 * const graph = {
 *   0: [[1, 2], [3, 6]],
 *   1: [[0, 2], [2, 3], [3, 8]],
 *   2: [[1, 3], [3, 5]],
 *   3: [[0, 6], [1, 8], [2, 5]]
 * };
 * primMST(graph);  // 10
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
    0: [[1, 2], [3, 6]],
    1: [[0, 2], [2, 3], [3, 8]],
    2: [[1, 3], [3, 5]],
    3: [[0, 6], [1, 8], [2, 5]]
  };
  console.assert(primMST(graph1) === 10, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const graph2 = {
    0: [[1, 1]],
    1: [[0, 1], [2, 2]],
    2: [[1, 2]]
  };
  console.assert(primMST(graph2) === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
