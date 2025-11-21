/**
 * CHALLENGE: Next Permutation
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - In-place array modification
 * - Lexicographic order
 * - Two-pass algorithm
 * - Permutation logic
 *
 * Problem:
 * Rearrange array into next lexicographically greater permutation.
 * If no such permutation exists, return lowest (sorted ascending).
 * Modify in place.
 *
 * Requirements:
 * - Find next permutation in-place
 * - If none, sort to smallest
 * - O(n) time, O(1) space
 * - Algorithm: find rightmost ascending pair, swap, reverse suffix
 *
 * Example:
 * nextPermutation([1,2,3]);  // [1,3,2]
 * nextPermutation([3,2,1]);  // [1,2,3]
 * nextPermutation([1,1,5]);  // [1,5,1]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function nextPermutation(nums: number[]): void {
  // TODO: Implement next permutation in place
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const arr1 = [1,2,3];
  nextPermutation(arr1);
  console.assert(JSON.stringify(arr1) === JSON.stringify([1,3,2]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const arr2 = [3,2,1];
  nextPermutation(arr2);
  console.assert(JSON.stringify(arr2) === JSON.stringify([1,2,3]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const arr3 = [1,1,5];
  nextPermutation(arr3);
  console.assert(JSON.stringify(arr3) === JSON.stringify([1,5,1]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
