/**
 * CHALLENGE: Check if Array is Sorted
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Array iteration
 * - Comparison operators
 * - Early return pattern
 *
 * Problem:
 * Write a function that checks if an array is sorted in ascending order.
 *
 * Requirements:
 * - Return true if sorted (each element <= next element)
 * - Empty and single-element arrays are sorted
 * - Handle duplicates (allow equal consecutive values)
 *
 * Example:
 * isSorted([1, 2, 3, 4]);      // true
 * isSorted([1, 3, 2]);         // false
 * isSorted([1, 1, 2, 2]);      // true
 * isSorted([]);                // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function isSorted(arr: number[]): boolean {
  return false;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isSorted([1, 2, 3, 4]) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isSorted([1, 3, 2]) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isSorted([1, 1, 2, 2]) === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(isSorted([]) === true, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
