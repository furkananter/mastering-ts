/**
 * CHALLENGE: Check if Number in Range
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Comparison operators
 * - Logical AND
 * - Inclusive vs exclusive ranges
 *
 * Problem:
 * Write a function that checks if a number is within a given range (inclusive).
 *
 * Requirements:
 * - Check if min <= num <= max
 * - Inclusive on both ends
 * - Handle negative numbers
 *
 * Example:
 * inRange(5, 1, 10);       // true
 * inRange(0, 1, 10);       // false
 * inRange(10, 1, 10);      // true
 * inRange(-5, -10, 0);     // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function inRange(num: number, min: number, max: number): boolean {
  return false;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(inRange(5, 1, 10) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(inRange(0, 1, 10) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(inRange(10, 1, 10) === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(inRange(-5, -10, 0) === true, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
