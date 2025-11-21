/**
 * CHALLENGE: Merge Sort Implementation
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Merge sort algorithm
 * - Divide and conquer
 * - Recursion
 * - Array merging
 *
 * Problem:
 * Implement merge sort to sort an array in ascending order.
 * Split array in half, recursively sort, then merge.
 *
 * Requirements:
 * - Use merge sort algorithm
 * - Split array recursively
 * - Merge sorted halves
 * - O(n log n) time complexity
 *
 * Example:
 * mergeSort([38, 27, 43, 3, 9, 82, 10]);    // [3, 9, 10, 27, 38, 43, 82]
 * mergeSort([5, 2, 9, 1]);                  // [1, 2, 5, 9]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function mergeSort<T>(arr: T[]): T[] {
  // TODO: Implement merge sort
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = mergeSort([38, 27, 43, 3, 9, 82, 10]);
  console.assert(JSON.stringify(result1) === JSON.stringify([3, 9, 10, 27, 38, 43, 82]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = mergeSort([5, 2, 9, 1]);
  console.assert(JSON.stringify(result2) === JSON.stringify([1, 2, 5, 9]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
