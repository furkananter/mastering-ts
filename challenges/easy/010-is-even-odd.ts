/**
 * CHALLENGE: Check Even or Odd
 *
 * Difficulty: Easy
 * Estimated Time: 2 minutes
 *
 * Topics to know:
 * - Modulo operator (%)
 * - Conditional logic
 * - Return types
 *
 * Problem:
 * Write a function that determines if a number is even or odd.
 * Return "even" for even numbers and "odd" for odd numbers.
 *
 * Requirements:
 * - Return "even" if number is divisible by 2
 * - Return "odd" otherwise
 * - Handle negative numbers correctly
 *
 * Example:
 * isEvenOrOdd(4);      // "even"
 * isEvenOrOdd(7);      // "odd"
 * isEvenOrOdd(-2);     // "even"
 * isEvenOrOdd(0);      // "even"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isEvenOrOdd(4) === "even", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isEvenOrOdd(7) === "odd", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isEvenOrOdd(-2) === "even", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(isEvenOrOdd(0) === "even", "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.assert(isEvenOrOdd(-5) === "odd", "❌ Test 5 failed");
  console.log("✅ Test 5 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
