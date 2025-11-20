/**
 * CHALLENGE: Fibonacci with Memoization
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Dynamic programming
 * - Memoization
 * - Recursion optimization
 * - Cache management
 *
 * Problem:
 * Implement Fibonacci with memoization to avoid redundant calculations.
 * Store previously calculated values in a cache.
 *
 * Requirements:
 * - Use memoization
 * - Recursive approach
 * - Cache results
 * - Significantly faster than naive recursion
 *
 * Example:
 * fibonacci(10);   // 55 (calculated efficiently)
 * fibonacci(40);   // Works fast with memoization
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(fibonacci(10) === 55, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(fibonacci(0) === 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(fibonacci(1) === 1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  const start = Date.now();
  fibonacci(40);
  const elapsed = Date.now() - start;
  console.assert(elapsed < 100, "❌ Test 4 failed: should be fast with memoization");
  console.log("✅ Test 4 passed: Performance check");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
