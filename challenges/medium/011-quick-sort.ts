/**
 * CHALLENGE: Quick Sort Implementation
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Quick sort algorithm
 * - Divide and conquer
 * - Recursion
 * - Pivot selection
 *
 * Problem:
 * Implement the quick sort algorithm to sort an array in ascending order.
 * Use recursion and the partition approach.
 *
 * Requirements:
 * - Use quick sort algorithm
 * - Choose pivot (can be last element)
 * - Partition around pivot
 * - Recursively sort partitions
 *
 * Example:
 * quickSort([3, 6, 8, 10, 1, 2, 1]);     // [1, 1, 2, 3, 6, 8, 10]
 * quickSort([5, 2, 9, 1]);               // [1, 2, 5, 9]
 * quickSort([]);                         // []
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function quickSort<T>(arr: T[]): T[] {
  // TODO: Implement quick sort
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = quickSort([3, 6, 8, 10, 1, 2, 1]);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 1, 2, 3, 6, 8, 10]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = quickSort([5, 2, 9, 1]);
  console.assert(JSON.stringify(result2) === JSON.stringify([1, 2, 5, 9]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = quickSort([]);
  console.assert(JSON.stringify(result3) === JSON.stringify([]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
