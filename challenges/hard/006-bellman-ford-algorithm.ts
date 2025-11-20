/**
 * CHALLENGE: Bellman-Ford Shortest Path with Negative Edges
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - Graph algorithms
 * - Dynamic Programming
 * - Negative edge weights
 * - Negative cycle detection
 *
 * Problem:
 * Implement Bellman-Ford algorithm to find shortest paths from source
 * to all vertices. Handle negative edge weights and detect negative cycles.
 *
 * Requirements:
 * - Support negative edge weights
 * - Detect negative cycles (return null if exists)
 * - Edge list format: [[from, to, weight], ...]
 * - Return distances object or null
 *
 * Example:
 * const edges = [[0, 1, 4], [0, 2, 2], [1, 2, -3], [2, 3, 2]];
 * bellmanFord(edges, 4, 0);  // {0: 0, 1: 4, 2: 1, 3: 3}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const edges1 = [[0, 1, 4], [0, 2, 2], [1, 2, -3], [2, 3, 2]];
  const result1 = bellmanFord(edges1, 4, 0);
  console.assert(result1 !== null && result1[0] === 0 && result1[1] === 4 && result1[2] === 1 && result1[3] === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  // Negative cycle test
  const edges2 = [[0, 1, 1], [1, 2, -3], [2, 0, 1]];
  const result2 = bellmanFord(edges2, 3, 0);
  console.assert(result2 === null, "❌ Test 2 failed (should detect negative cycle)");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
