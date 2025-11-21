/**
 * CHALLENGE: Travelling Salesman Problem (DP with Bitmask)
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Dynamic Programming
 * - Bitmask DP
 * - Graph traversal
 * - NP-hard problems
 *
 * Problem:
 * Find minimum cost to visit all cities exactly once and return to start.
 * Use DP with bitmask to track visited cities.
 *
 * Requirements:
 * - Distance matrix: dist[i][j] = distance from city i to j
 * - Start and end at city 0
 * - Visit each city exactly once
 * - Return minimum total distance
 *
 * Example:
 * const dist = [
 *   [0, 10, 15, 20],
 *   [10, 0, 35, 25],
 *   [15, 35, 0, 30],
 *   [20, 25, 30, 0]
 * ];
 * tsp(dist);  // 80
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const dist1 = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
  ];
  console.assert(tsp(dist1) === 80, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const dist2 = [
    [0, 20, 42, 25],
    [20, 0, 30, 34],
    [42, 30, 0, 10],
    [25, 34, 10, 0]
  ];
  console.assert(tsp(dist2) === 85, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
