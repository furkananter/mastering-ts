/**
 * CHALLENGE: Sum of Digits
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Number to string conversion
 * - String iteration
 * - parseInt or Number conversion
 *
 * Problem:
 * Write a function that calculates the sum of all digits in a number.
 * For negative numbers, ignore the negative sign.
 *
 * Requirements:
 * - Sum all individual digits
 * - Handle negative numbers (treat as positive)
 * - Single digit returns itself
 *
 * Example:
 * sumDigits(123);     // 6 (1 + 2 + 3)
 * sumDigits(4567);    // 22
 * sumDigits(-123);    // 6
 * sumDigits(5);       // 5
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(sumDigits(123) === 6, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(sumDigits(4567) === 22, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(sumDigits(-123) === 6, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(sumDigits(5) === 5, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
