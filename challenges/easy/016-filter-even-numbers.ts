/**
 * CHALLENGE: Filter Even Numbers
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Array filter method
 * - Modulo operator
 * - Arrow functions
 *
 * Problem:
 * Write a function that filters an array to return only even numbers.
 *
 * Requirements:
 * - Return new array with only even numbers
 * - Preserve original order
 * - Handle negative numbers
 * - Return empty array if no even numbers exist
 *
 * Example:
 * filterEven([1, 2, 3, 4, 5, 6]);    // [2, 4, 6]
 * filterEven([1, 3, 5]);             // []
 * filterEven([-2, -1, 0, 1]);        // [-2, 0]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = filterEven([1, 2, 3, 4, 5, 6]);
  console.assert(JSON.stringify(result1) === JSON.stringify([2, 4, 6]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = filterEven([1, 3, 5]);
  console.assert(JSON.stringify(result2) === JSON.stringify([]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = filterEven([-2, -1, 0, 1]);
  console.assert(JSON.stringify(result3) === JSON.stringify([-2, 0]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
