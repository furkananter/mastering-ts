/**
 * CHALLENGE: Merge Two Sorted Arrays
 *
 * Difficulty: Easy
 * Estimated Time: 6 minutes
 *
 * Topics to know:
 * - Two pointer technique
 * - Array comparison
 * - Sorted array merge
 *
 * Problem:
 * Write a function that merges two sorted arrays into one sorted array.
 *
 * Requirements:
 * - Both input arrays are already sorted
 * - Return one sorted array
 * - Use two-pointer approach for O(n+m) solution
 *
 * Example:
 * mergeSorted([1, 3, 5], [2, 4, 6]);      // [1, 2, 3, 4, 5, 6]
 * mergeSorted([1, 2], [3, 4]);            // [1, 2, 3, 4]
 * mergeSorted([], [1, 2]);                // [1, 2]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function mergeSorted(arr1: number[], arr2: number[]): number[] {
  return [];
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = mergeSorted([1, 3, 5], [2, 4, 6]);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 2, 3, 4, 5, 6]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = mergeSorted([1, 2], [3, 4]);
  console.assert(JSON.stringify(result2) === JSON.stringify([1, 2, 3, 4]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = mergeSorted([], [1, 2]);
  console.assert(JSON.stringify(result3) === JSON.stringify([1, 2]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
