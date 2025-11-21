/**
 * CHALLENGE: Two Sum
 *
 * Difficulty: Easy
 * Estimated Time: 6 minutes
 *
 * Topics to know:
 * - Hash map for O(n) solution
 * - Array iteration
 * - Index tracking
 *
 * Problem:
 * Write a function that finds two numbers in an array that sum to a target value.
 * Return the indices of the two numbers. Assume there's exactly one solution.
 *
 * Requirements:
 * - Return array of two indices [index1, index2]
 * - index1 < index2
 * - Can't use same element twice
 *
 * Example:
 * twoSum([2, 7, 11, 15], 9);     // [0, 1] (2 + 7 = 9)
 * twoSum([3, 2, 4], 6);          // [1, 2] (2 + 4 = 6)
 * twoSum([1, 5, 3], 8);          // [1, 2] (5 + 3 = 8)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function twoSum(nums: number[], target: number): number[] {
  return [];
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = twoSum([2, 7, 11, 15], 9);
  console.assert(JSON.stringify(result1) === JSON.stringify([0, 1]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = twoSum([3, 2, 4], 6);
  console.assert(JSON.stringify(result2) === JSON.stringify([1, 2]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = twoSum([1, 5, 3], 8);
  console.assert(JSON.stringify(result3) === JSON.stringify([1, 2]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
