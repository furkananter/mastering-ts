/**
 * CHALLENGE: Johnson's Algorithm for All-Pairs Shortest Paths
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Graph algorithms
 * - Johnson's algorithm
 * - Bellman-Ford + Dijkstra
 * - Graph reweighting
 *
 * Problem:
 * Find shortest paths between all pairs using Johnson's algorithm.
 * Handles negative edges by reweighting, then running Dijkstra from each vertex.
 *
 * Requirements:
 * - Use Bellman-Ford to detect negative cycles
 * - Reweight edges to eliminate negative weights
 * - Run Dijkstra from each vertex
 * - Return distance matrix or null (if negative cycle)
 *
 * Example:
 * const edges = [[0, 1, -1], [0, 2, 4], [1, 2, 3], [1, 3, 2], [2, 3, 5]];
 * johnsonAllPairs(edges, 4);  // distance matrix
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const edges = [[0, 1, -1], [0, 2, 4], [1, 2, 3], [1, 3, 2], [2, 3, 5]];
  const result = johnsonAllPairs(edges, 4);

  console.assert(result !== null && result[0][0] === 0, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(result !== null && result[0][3] === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
