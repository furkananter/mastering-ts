/**
 * CHALLENGE: Kruskal's Minimum Spanning Tree
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - Graph algorithms
 * - Minimum Spanning Tree
 * - Union-Find (Disjoint Set)
 * - Greedy algorithm
 *
 * Problem:
 * Find minimum spanning tree using Kruskal's algorithm.
 * Use Union-Find to detect cycles. Return total MST weight.
 *
 * Requirements:
 * - Edge list: [[u, v, weight], ...]
 * - Sort edges by weight
 * - Use Union-Find for cycle detection
 * - Return minimum total weight
 *
 * Example:
 * const edges = [
 *   [0, 1, 10], [0, 2, 6], [0, 3, 5],
 *   [1, 3, 15], [2, 3, 4]
 * ];
 * kruskalMST(edges, 4);  // 19 (edges: [2,3], [0,3], [0,1])
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const edges1 = [
    [0, 1, 10], [0, 2, 6], [0, 3, 5],
    [1, 3, 15], [2, 3, 4]
  ];
  console.assert(kruskalMST(edges1, 4) === 19, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const edges2 = [
    [0, 1, 1], [1, 2, 2], [0, 2, 3]
  ];
  console.assert(kruskalMST(edges2, 3) === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
