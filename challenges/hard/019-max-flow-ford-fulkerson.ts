/**
 * CHALLENGE: Maximum Flow - Ford-Fulkerson Algorithm
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Graph algorithms
 * - Network flow
 * - Ford-Fulkerson / Edmonds-Karp
 * - Residual graph, augmenting paths
 *
 * Problem:
 * Find maximum flow from source to sink in flow network.
 * Use Ford-Fulkerson with BFS (Edmonds-Karp) for finding augmenting paths.
 *
 * Requirements:
 * - Capacity matrix: capacity[u][v]
 * - Use BFS to find augmenting paths
 * - Update residual graph
 * - Return maximum flow value
 *
 * Example:
 * const capacity = [
 *   [0, 16, 13, 0, 0, 0],
 *   [0, 0, 10, 12, 0, 0],
 *   [0, 4, 0, 0, 14, 0],
 *   [0, 0, 9, 0, 0, 20],
 *   [0, 0, 0, 7, 0, 4],
 *   [0, 0, 0, 0, 0, 0]
 * ];
 * maxFlow(capacity, 0, 5);  // 23
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const capacity = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0]
  ];

  console.assert(maxFlow(capacity, 0, 5) === 23, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const capacity2 = [
    [0, 10, 10, 0],
    [0, 0, 2, 4],
    [0, 0, 0, 8],
    [0, 0, 0, 0]
  ];
  console.assert(maxFlow(capacity2, 0, 3) === 12, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
