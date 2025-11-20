/**
 * CHALLENGE: Greatest Common Divisor (GCD)
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Euclidean algorithm
 * - Recursion or iteration
 * - Modulo operator
 *
 * Problem:
 * Write a function that finds the greatest common divisor (GCD)
 * of two positive integers using the Euclidean algorithm.
 *
 * Requirements:
 * - Find largest number that divides both
 * - Use Euclidean algorithm (GCD(a,b) = GCD(b, a%b))
 * - Base case: GCD(a, 0) = a
 *
 * Example:
 * gcd(48, 18);    // 6
 * gcd(100, 50);   // 50
 * gcd(7, 3);      // 1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(gcd(48, 18) === 6, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(gcd(100, 50) === 50, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(gcd(7, 3) === 1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
