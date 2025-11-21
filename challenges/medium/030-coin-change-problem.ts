/**
 * CHALLENGE: Coin Change (Minimum Coins)
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Dynamic programming
 * - Bottom-up approach
 * - Array DP table
 * - Optimization problems
 *
 * Problem:
 * Find minimum number of coins needed to make a given amount.
 * You have infinite supply of each coin denomination.
 * Return -1 if amount cannot be made.
 *
 * Requirements:
 * - Use dynamic programming
 * - Return minimum coin count
 * - Return -1 if impossible
 * - Coin denominations can be any values
 *
 * Example:
 * coinChange([1, 2, 5], 11);   // 3 (5+5+1)
 * coinChange([2], 3);          // -1 (impossible)
 * coinChange([1], 0);          // 0
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function coinChange(coins: number[], amount: number): number {
  // TODO: Implement coin change using dynamic programming
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(coinChange([1, 2, 5], 11) === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(coinChange([2], 3) === -1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(coinChange([1], 0) === 0, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(coinChange([1, 3, 4], 6) === 2, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
