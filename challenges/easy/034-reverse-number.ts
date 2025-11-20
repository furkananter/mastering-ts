/**
 * CHALLENGE: Reverse Number
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Number to string conversion
 * - String reversal
 * - parseInt with sign handling
 *
 * Problem:
 * Write a function that reverses the digits of a number.
 * Handle negative numbers by preserving the negative sign.
 *
 * Requirements:
 * - Reverse the digits
 * - Preserve negative sign
 * - Return as number (not string)
 *
 * Example:
 * reverseNumber(123);     // 321
 * reverseNumber(-456);    // -654
 * reverseNumber(100);     // 1
 * reverseNumber(5);       // 5
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(reverseNumber(123) === 321, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(reverseNumber(-456) === -654, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(reverseNumber(100) === 1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(reverseNumber(5) === 5, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
