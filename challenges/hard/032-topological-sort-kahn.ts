/**
 * CHALLENGE: Topological Sort with Cycle Detection (Kahn's Algorithm)
 *
 * Difficulty: Hard
 * Estimated Time: 20 minutes
 *
 * Topics to know:
 * - Directed Acyclic Graph (DAG)
 * - Kahn's algorithm
 * - In-degree tracking
 * - Cycle detection
 *
 * Problem:
 * Perform topological sort using Kahn's algorithm.
 * Detect cycles (return null if cycle exists).
 *
 * Requirements:
 * - Use Kahn's algorithm (BFS-based)
 * - Track in-degrees
 * - Return topologically sorted array
 * - Return null if cycle detected
 *
 * Example:
 * const graph = {
 *   0: [1, 2], 1: [3], 2: [3], 3: []
 * };
 * topologicalSort(graph);  // [0, 1, 2, 3] or [0, 2, 1, 3]
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
    0: [1, 2], 1: [3], 2: [3], 3: []
  };
  const result1 = topologicalSort(graph1);
  console.assert(result1 !== null && result1.length === 4, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  // Cycle test
  const graph2 = {
    0: [1], 1: [2], 2: [0]
  };
  const result2 = topologicalSort(graph2);
  console.assert(result2 === null, "❌ Test 2 failed (should detect cycle)");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
