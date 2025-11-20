/**
 * CHALLENGE: Graph Chromatic Number (NP-Hard Approximation)
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Graph coloring
 * - Chromatic number
 * - Greedy coloring
 * - Backtracking
 *
 * Problem:
 * Find chromatic number (minimum colors needed to color graph).
 * Use backtracking with pruning for small graphs, or greedy approximation.
 *
 * Requirements:
 * - chromaticNumber(graph) returns minimum colors
 * - Try backtracking for small n
 * - Use greedy coloring as upper bound
 * - Handle common graph types
 *
 * Example:
 * const graph = {0: [1, 2], 1: [0, 2], 2: [0, 1]};  // Triangle
 * chromaticNumber(graph);  // 3
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const triangle = {0: [1, 2], 1: [0, 2], 2: [0, 1]};
  console.assert(chromaticNumber(triangle) === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const bipartite = {0: [1, 2], 1: [0], 2: [0], 3: []};
  console.assert(chromaticNumber(bipartite) <= 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
