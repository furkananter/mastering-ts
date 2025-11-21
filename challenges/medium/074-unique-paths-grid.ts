/**
 * CHALLENGE: Unique Paths in Grid
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Dynamic programming
 * - 2D DP table
 * - Path counting
 * - Grid traversal
 *
 * Problem:
 * Count unique paths from top-left to bottom-right in m×n grid.
 * Can only move right or down.
 *
 * Requirements:
 * - Use 2D DP table
 * - dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * - Return number of paths
 * - Can optimize to O(n) space
 *
 * Example:
 * uniquePaths(3, 7);   // 28
 * uniquePaths(3, 2);   // 3
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function uniquePaths(m: number, n: number): number {
  // TODO: Implement unique paths using DP
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(uniquePaths(3, 7) === 28, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(uniquePaths(3, 2) === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(uniquePaths(1, 1) === 1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
