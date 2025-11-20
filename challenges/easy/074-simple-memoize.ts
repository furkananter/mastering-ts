/**
 * CHALLENGE: Simple Memoization
 *
 * Difficulty: Easy
 * Estimated Time: 6 minutes
 *
 * Topics to know:
 * - Memoization concept
 * - Map/Object for caching
 * - Higher-order functions
 *
 * Problem:
 * Create a memoize function that caches results of function calls.
 * For simplicity, assume the function takes a single primitive argument.
 *
 * Requirements:
 * - Cache results based on argument
 * - Return cached result if available
 * - Execute function only on cache miss
 *
 * Example:
 * const memoized = memoize((n) => n * 2);
 * memoized(5);    // 10 (calculates)
 * memoized(5);    // 10 (from cache)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  let callCount = 0;
  const memoized = memoize((n: number) => {
    callCount++;
    return n * 2;
  });

  console.assert(memoized(5) === 10, "❌ Test 1 failed");
  console.assert(callCount === 1, "❌ Test 1 failed: should calculate");
  console.log("✅ Test 1 passed");

  console.assert(memoized(5) === 10, "❌ Test 2 failed");
  console.assert(callCount === 1, "❌ Test 2 failed: should use cache");
  console.log("✅ Test 2 passed");

  console.assert(memoized(10) === 20, "❌ Test 3 failed");
  console.assert(callCount === 2, "❌ Test 3 failed: should calculate for new input");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
