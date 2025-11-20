/**
 * CHALLENGE: Minimum Cost Maximum Flow
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Network flow
 * - Min-cost max-flow
 * - Successive shortest paths
 * - Bellman-Ford or Dijkstra
 *
 * Problem:
 * Find maximum flow with minimum cost. Each edge has capacity and cost.
 * Use successive shortest path algorithm.
 *
 * Requirements:
 * - Graph: {u: [[v, capacity, cost], ...]}
 * - Find max flow minimizing total cost
 * - Return {maxFlow, minCost}
 * - Handle negative costs
 *
 * Example:
 * const graph = {
 *   0: [[1, 10, 5], [2, 10, 10]],
 *   1: [[3, 10, 2]],
 *   2: [[3, 10, 3]],
 *   3: []
 * };
 * minCostMaxFlow(graph, 0, 3);  // {maxFlow: 20, minCost: ...}
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
    0: [[1, 10, 5], [2, 10, 10]],
    1: [[3, 10, 2]],
    2: [[3, 10, 3]],
    3: []
  };

  const result = minCostMaxFlow(graph, 0, 3);

  console.assert(result.maxFlow === 20, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(result.minCost > 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
