/**
 * CHALLENGE: Fibonacci Number
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Recursion or iteration
 * - Fibonacci sequence (0, 1, 1, 2, 3, 5, 8...)
 * - Base cases
 *
 * Problem:
 * Write a function that returns the nth Fibonacci number.
 * The sequence starts: 0, 1, 1, 2, 3, 5, 8, 13, 21...
 * Where F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2)
 *
 * Requirements:
 * - F(0) = 0, F(1) = 1
 * - Use recursion or iteration
 * - Handle n >= 0
 *
 * Example:
 * fibonacci(0);    // 0
 * fibonacci(1);    // 1
 * fibonacci(5);    // 5
 * fibonacci(7);    // 13
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function fibonacci(n: number): number {
  return 0;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(fibonacci(0) === 0, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(fibonacci(1) === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(fibonacci(5) === 5, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(fibonacci(7) === 13, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.assert(fibonacci(10) === 55, "❌ Test 5 failed");
  console.log("✅ Test 5 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
