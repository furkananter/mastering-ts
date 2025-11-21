/**
 * CHALLENGE: Three Sum Problem
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Two pointers technique
 * - Sorting
 * - Duplicate handling
 * - Array algorithms
 *
 * Problem:
 * Find all unique triplets in array that sum to zero.
 * Return array of triplets [a, b, c] where a + b + c = 0.
 *
 * Requirements:
 * - Find all unique triplets
 * - No duplicate triplets
 * - Use sorting + two pointers
 * - O(n²) time
 *
 * Example:
 * threeSum([-1,0,1,2,-1,-4]);
 * // [[-1,-1,2], [-1,0,1]]
 * threeSum([0,0,0]);
 * // [[0,0,0]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function threeSum(nums: number[]): number[][] {
  // TODO: Implement 3Sum
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = threeSum([-1,0,1,2,-1,-4]);
  console.assert(result1.length === 2, "❌ Test 1 failed: should find 2 triplets");
  console.log("✅ Test 1 passed");

  const result2 = threeSum([0,0,0]);
  console.assert(JSON.stringify(result2) === JSON.stringify([[0,0,0]]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = threeSum([1,2,3]);
  console.assert(result3.length === 0, "❌ Test 3 failed: no triplets sum to 0");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
