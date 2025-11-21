/**
 * CHALLENGE: Binary Search (Recursive)
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Binary search algorithm
 * - Recursion
 * - Divide and conquer
 * - Sorted array searching
 *
 * Problem:
 * Implement binary search recursively to find the index of a target
 * in a sorted array. Return -1 if not found.
 *
 * Requirements:
 * - Use recursion (not iteration)
 * - O(log n) time complexity
 * - Array is sorted in ascending order
 * - Return index of target or -1
 *
 * Example:
 * binarySearch([1, 3, 5, 7, 9, 11], 7);     // 3
 * binarySearch([1, 2, 3, 4, 5], 1);         // 0
 * binarySearch([1, 2, 3, 4, 5], 6);         // -1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function binarySearch<T>(arr: T[], target: T, left: number = 0, right: number = arr.length - 1): number {
  // TODO: Implement binary search recursively
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(binarySearch([1, 3, 5, 7, 9, 11], 7) === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(binarySearch([1, 2, 3, 4, 5], 1) === 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(binarySearch([1, 2, 3, 4, 5], 6) === -1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(binarySearch([10, 20, 30, 40, 50], 30) === 2, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
