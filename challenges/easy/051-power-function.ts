/**
 * CHALLENGE: Power Function
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Exponentiation operator (**)
 * - Math.pow()
 * - Recursion (optional)
 *
 * Problem:
 * Write a function that calculates base raised to the power of exponent.
 * Do not use Math.pow() - implement it yourself.
 *
 * Requirements:
 * - Calculate base ** exponent
 * - Handle positive exponents
 * - Use loop or recursion
 *
 * Example:
 * power(2, 3);     // 8
 * power(5, 2);     // 25
 * power(10, 0);    // 1
 * power(3, 4);     // 81
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(power(2, 3) === 8, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(power(5, 2) === 25, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(power(10, 0) === 1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(power(3, 4) === 81, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
