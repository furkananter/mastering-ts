/**
 * CHALLENGE: Check if String Contains Only Digits
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Regular expressions
 * - Test method
 * - Character validation
 *
 * Problem:
 * Write a function that checks if a string contains only numeric digits (0-9).
 *
 * Requirements:
 * - Return true if all characters are digits
 * - Empty string returns false
 * - No spaces or special characters allowed
 *
 * Example:
 * isDigitOnly("12345");     // true
 * isDigitOnly("123a45");    // false
 * isDigitOnly("");          // false
 * isDigitOnly("12.34");     // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function isDigitOnly(str: string): boolean {
  return false;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isDigitOnly("12345") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isDigitOnly("123a45") === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isDigitOnly("") === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(isDigitOnly("12.34") === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
