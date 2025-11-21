/**
 * CHALLENGE: Longest Increasing Subsequence
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Dynamic programming
 * - Binary search (optimal)
 * - LIS problem
 * - Patience sorting
 *
 * Problem:
 * Find length of longest strictly increasing subsequence.
 * Can use DP O(n²) or binary search O(n log n).
 *
 * Requirements:
 * - Find LIS length
 * - Subsequence (not subarray)
 * - Strictly increasing
 * - Use DP or binary search
 *
 * Example:
 * lengthOfLIS([10,9,2,5,3,7,101,18]);  // 4 ([2,3,7,101])
 * lengthOfLIS([0,1,0,3,2,3]);          // 4
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function lengthOfLIS(nums: number[]): number {
  // TODO: Implement longest increasing subsequence using DP
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(lengthOfLIS([10,9,2,5,3,7,101,18]) === 4, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(lengthOfLIS([0,1,0,3,2,3]) === 4, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(lengthOfLIS([7,7,7,7,7,7]) === 1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
