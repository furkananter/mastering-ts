/**
 * CHALLENGE: Floyd-Warshall All-Pairs Shortest Path
 *
 * Difficulty: Hard
 * Estimated Time: 20 minutes
 *
 * Topics to know:
 * - Dynamic Programming
 * - Graph algorithms
 * - All-pairs shortest path
 * - Negative cycle detection
 *
 * Problem:
 * Find shortest paths between all pairs of vertices in weighted graph.
 * Handle negative edges and detect negative cycles.
 *
 * Requirements:
 * - Input: adjacency matrix (Infinity for no edge)
 * - Return: distance matrix
 * - Detect negative cycles (return null)
 * - O(V³) time complexity
 *
 * Example:
 * const graph = [
 *   [0, 3, Infinity, 7],
 *   [8, 0, 2, Infinity],
 *   [5, Infinity, 0, 1],
 *   [2, Infinity, Infinity, 0]
 * ];
 * floydWarshall(graph);  // shortest distances between all pairs
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const graph = [
    [0, 3, Infinity, 7],
    [8, 0, 2, Infinity],
    [5, Infinity, 0, 1],
    [2, Infinity, Infinity, 0]
  ];

  const result = floydWarshall(graph);
  console.assert(result !== null && result[0][0] === 0, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(result !== null && result[0][2] === 5, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
