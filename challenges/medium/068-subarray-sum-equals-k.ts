/**
 * CHALLENGE: Subarray Sum Equals K
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Prefix sum
 * - Hash map
 * - Cumulative sum
 * - Subarray problems
 *
 * Problem:
 * Count number of continuous subarrays whose sum equals k.
 * Use prefix sum with hash map for O(n) solution.
 *
 * Requirements:
 * - Count subarrays with sum = k
 * - Use prefix sum + hash map
 * - O(n) time complexity
 * - Handle negative numbers
 *
 * Example:
 * subarraySum([1,1,1], 2);       // 2
 * subarraySum([1,2,3], 3);       // 2
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function subarraySum(nums: number[], k: number): number {
  // TODO: Implement subarray sum equals k using hash map
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(subarraySum([1,1,1], 2) === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(subarraySum([1,2,3], 3) === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(subarraySum([1,-1,0], 0) === 3, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
