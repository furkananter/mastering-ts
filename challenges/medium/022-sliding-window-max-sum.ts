/**
 * CHALLENGE: Maximum Sum of Subarray (Sliding Window)
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Sliding window technique
 * - Array algorithms
 * - Optimization
 * - Running sum
 *
 * Problem:
 * Find the maximum sum of a subarray of size k.
 * Use sliding window for O(n) solution.
 *
 * Requirements:
 * - Find max sum of k consecutive elements
 * - Use sliding window technique
 * - O(n) time complexity
 * - Return the max sum
 *
 * Example:
 * maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);  // 39 (10+23+3+1)
 * maxSumSubarray([2, 1, 5, 1, 3, 2], 3);               // 9 (5+1+3)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function maxSumSubarray(arr: number[], k: number): number {
  // TODO: Implement sliding window max sum
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) === 39, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(maxSumSubarray([2, 1, 5, 1, 3, 2], 3) === 9, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(maxSumSubarray([1, 2, 3, 4, 5], 2) === 9, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
