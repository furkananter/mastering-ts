/**
 * CHALLENGE: Find Minimum Number
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Array iteration
 * - Comparison operators
 * - Math.min or manual comparison
 *
 * Problem:
 * Write a function that finds and returns the minimum number in an array.
 *
 * Requirements:
 * - Return the smallest number in the array
 * - Return Infinity for empty arrays
 * - Work with both positive and negative numbers
 *
 * Example:
 * findMin([3, 1, 4, 1, 5]);      // 1
 * findMin([-5, -1, -10]);        // -10
 * findMin([42]);                 // 42
 * findMin([]);                   // Infinity
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function findMin(numbers: number[]): number {
  return Infinity;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(findMin([3, 1, 4, 1, 5]) === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(findMin([-5, -1, -10]) === -10, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(findMin([42]) === 42, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(findMin([]) === Infinity, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
