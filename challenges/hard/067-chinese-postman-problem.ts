/**
 * CHALLENGE: Chinese Postman Problem
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Graph algorithms
 * - Eulerian path/circuit
 * - Minimum weight matching
 * - Odd degree vertices
 *
 * Problem:
 * Find shortest closed walk visiting every edge at least once.
 * If graph is Eulerian, return total weight. Otherwise, match odd-degree vertices.
 *
 * Requirements:
 * - Find all odd-degree vertices
 * - Compute shortest paths between odd vertices
 * - Find minimum weight perfect matching
 * - Return minimum total distance
 *
 * Example:
 * const edges = [[0,1,1], [1,2,2], [2,3,3], [3,0,4]];
 * chinesePostman(edges, 4);  // 10 (Eulerian circuit)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const edges1 = [[0,1,1], [1,2,2], [2,3,3], [3,0,4]];
  console.assert(chinesePostman(edges1, 4) === 10, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const edges2 = [[0,1,1], [1,2,2], [2,0,3]];
  const result = chinesePostman(edges2, 3);
  console.assert(result >= 6, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
