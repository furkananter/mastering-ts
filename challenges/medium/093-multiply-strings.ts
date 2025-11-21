/**
 * CHALLENGE: Multiply Strings
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - String multiplication algorithm
 * - Digit-by-digit multiplication
 * - Carry handling
 * - Large number arithmetic
 *
 * Problem:
 * Multiply two non-negative integers represented as strings.
 * Don't convert to integers (simulate manual multiplication).
 *
 * Requirements:
 * - Multiply string numbers
 * - Handle large numbers
 * - Return result as string
 * - Don't use BigInt
 *
 * Example:
 * multiply("2", "3");      // "6"
 * multiply("123", "456");  // "56088"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function multiply(num1: string, num2: string): string {
  // TODO: Implement string multiplication
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(multiply("2", "3") === "6", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(multiply("123", "456") === "56088", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(multiply("0", "123") === "0", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
