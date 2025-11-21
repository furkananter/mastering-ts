/**
 * CHALLENGE: Calculate Factorial
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Recursion or iteration
 * - Mathematical operations
 * - Edge cases (0! = 1)
 *
 * Problem:
 * Write a function that calculates the factorial of a non-negative integer.
 * Factorial of n (n!) is the product of all positive integers less than or equal to n.
 * By definition, 0! = 1.
 *
 * Requirements:
 * - Calculate n! = n × (n-1) × (n-2) × ... × 1
 * - Handle 0! = 1
 * - Only accept non-negative integers
 *
 * Example:
 * factorial(5);    // 120 (5 × 4 × 3 × 2 × 1)
 * factorial(0);    // 1
 * factorial(1);    // 1
 * factorial(3);    // 6
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// TypeScript Implementation Template:
function factorial(n: number): number {
  // Your implementation here
  return 1;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(factorial(5) === 120, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(factorial(0) === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(factorial(1) === 1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(factorial(3) === 6, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.assert(factorial(7) === 5040, "❌ Test 5 failed");
  console.log("✅ Test 5 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
