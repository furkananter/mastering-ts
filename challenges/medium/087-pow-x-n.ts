/**
 * CHALLENGE: Power Function (x^n)
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Fast exponentiation
 * - Recursion or iteration
 * - Binary exponentiation
 * - Negative exponents
 *
 * Problem:
 * Implement pow(x, n) which calculates x raised to power n.
 * Use fast exponentiation for O(log n) time.
 *
 * Requirements:
 * - Handle positive and negative n
 * - Use binary exponentiation
 * - O(log n) time
 * - Handle n = 0 (result = 1)
 *
 * Example:
 * myPow(2.0, 10);      // 1024.0
 * myPow(2.1, 3);       // 9.261
 * myPow(2.0, -2);      // 0.25
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function myPow(x: number, n: number): number {
  // TODO: Implement power function using fast exponentiation
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(Math.abs(myPow(2.0, 10) - 1024.0) < 0.001, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(Math.abs(myPow(2.1, 3) - 9.261) < 0.001, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(Math.abs(myPow(2.0, -2) - 0.25) < 0.001, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
