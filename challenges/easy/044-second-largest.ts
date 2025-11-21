/**
 * CHALLENGE: Find Second Largest Number
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Array iteration
 * - Tracking multiple values
 * - Edge case handling
 *
 * Problem:
 * Write a function that finds the second largest number in an array.
 * Return undefined if there's no second largest.
 *
 * Requirements:
 * - Find second largest unique number
 * - Return undefined if array has < 2 unique numbers
 * - Don't count duplicates
 *
 * Example:
 * secondLargest([1, 5, 3, 9, 2]);    // 5
 * secondLargest([10, 10, 9]);        // 9
 * secondLargest([5]);                // undefined
 * secondLargest([3, 3, 3]);          // undefined
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function secondLargest(arr: number[]): number | undefined {
  return undefined;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(secondLargest([1, 5, 3, 9, 2]) === 5, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(secondLargest([10, 10, 9]) === 9, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(secondLargest([5]) === undefined, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(secondLargest([3, 3, 3]) === undefined, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
