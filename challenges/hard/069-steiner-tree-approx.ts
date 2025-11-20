/**
 * CHALLENGE: Steiner Tree Approximation
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Steiner tree problem
 * - NP-hard approximation
 * - MST-based approximation
 * - Terminal vertices
 *
 * Problem:
 * Find approximate minimum Steiner tree connecting terminal vertices.
 * Use MST-based 2-approximation algorithm.
 *
 * Requirements:
 * - Graph with edge weights
 * - Terminals: subset of vertices to connect
 * - Use metric closure + MST approach
 * - Return approximate tree weight
 *
 * Example:
 * const graph = {0: [[1,1], [2,2]], 1: [[0,1], [3,1]], 2: [[0,2], [3,1]], 3: [[1,1], [2,1]]};
 * steinerTree(graph, [0, 3]);  // Approximate weight
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const graph = {
    0: [[1,1], [2,2]],
    1: [[0,1], [3,1]],
    2: [[0,2], [3,1]],
    3: [[1,1], [2,1]]
  };

  const weight = steinerTree(graph, [0, 3]);
  console.assert(weight <= 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const weight2 = steinerTree(graph, [0, 1, 2, 3]);
  console.assert(weight2 > 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
