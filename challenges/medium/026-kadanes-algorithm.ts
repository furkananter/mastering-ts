/**
 * CHALLENGE: Maximum Subarray Sum (Kadane's Algorithm)
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Kadane's algorithm
 * - Dynamic programming
 * - Running maximum
 * - Array algorithms
 *
 * Problem:
 * Find the maximum sum of any contiguous subarray.
 * Implement Kadane's algorithm.
 *
 * Requirements:
 * - Use Kadane's algorithm
 * - O(n) time complexity
 * - Handle all negative numbers
 * - Return the maximum sum
 *
 * Example:
 * maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]);  // 6 ([4,-1,2,1])
 * maxSubarraySum([1]);                      // 1
 * maxSubarraySum([-1, -2, -3]);             // -1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function maxSubarraySum(arr: number[]): number {
  // TODO: Implement Kadane's algorithm
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]) === 6, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(maxSubarraySum([1]) === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(maxSubarraySum([-1, -2, -3]) === -1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
