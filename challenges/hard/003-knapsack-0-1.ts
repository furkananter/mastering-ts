/**
 * CHALLENGE: 0/1 Knapsack Problem
 *
 * Difficulty: Hard
 * Estimated Time: 20 minutes
 *
 * Topics to know:
 * - Dynamic Programming
 * - 2D DP optimization
 * - Tabulation method
 * - Subset selection
 *
 * Problem:
 * Given weights and values of items, and a knapsack capacity,
 * maximize total value without exceeding capacity. Each item used once (0/1).
 *
 * Requirements:
 * - Dynamic programming solution
 * - Items can't be split
 * - Return maximum value achievable
 * - O(n * capacity) time complexity
 *
 * Example:
 * knapsack([1, 2, 3], [6, 10, 12], 5);  // 22 (items 2 and 3)
 * knapsack([2, 3, 4], [3, 4, 5], 5);    // 7 (items 1 and 2)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function knapsack(
  weights: ReadonlyArray<number>,
  values: ReadonlyArray<number>,
  capacity: number
): number {
  // Implementation here
  return 0;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(knapsack([1, 2, 3], [6, 10, 12], 5) === 22, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(knapsack([2, 3, 4], [3, 4, 5], 5) === 7, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7) === 9, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
