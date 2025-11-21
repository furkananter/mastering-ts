/**
 * CHALLENGE: Maximum Product Subarray
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Dynamic programming
 * - Track both max and min (for negatives)
 * - Running product
 * - Sign flipping
 *
 * Problem:
 * Find contiguous subarray with largest product.
 * Track both max and min products (negative can become max).
 *
 * Requirements:
 * - Use DP approach
 * - Track both max and min
 * - Handle negative numbers
 * - Return maximum product
 *
 * Example:
 * maxProduct([2,3,-2,4]);      // 6
 * maxProduct([-2,0,-1]);       // 0
 * maxProduct([-2,3,-4]);       // 24
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function maxProduct(nums: number[]): number {
  // TODO: Implement maximum product subarray using DP
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(maxProduct([2,3,-2,4]) === 6, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(maxProduct([-2,0,-1]) === 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(maxProduct([-2,3,-4]) === 24, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
