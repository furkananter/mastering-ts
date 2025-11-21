/**
 * CHALLENGE: Throttle Function
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Throttling concept
 * - setTimeout
 * - Closures
 * - Rate limiting
 *
 * Problem:
 * Create a throttle function that ensures a function is called
 * at most once per specified time interval.
 *
 * Requirements:
 * - Execute immediately on first call
 * - Ignore calls during wait period
 * - Reset after wait period expires
 * - Return throttled function
 *
 * Example:
 * let count = 0;
 * const throttled = throttle(() => count++, 100);
 * throttled(); // count = 1
 * throttled(); // ignored (within 100ms)
 * // after 100ms
 * throttled(); // count = 2
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  // TODO: Implement throttle
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests for throttle...\n");

  let count = 0;
  const throttled = throttle(() => count++, 50);

  throttled();
  console.assert(count === 1, "❌ Test 1 failed: should execute immediately");
  console.log("✅ Test 1 passed");

  throttled();
  console.assert(count === 1, "❌ Test 2 failed: should be throttled");
  console.log("✅ Test 2 passed");

  setTimeout(() => {
    throttled();
    console.assert(count === 2, "❌ Test 3 failed: should execute after wait");
    console.log("✅ Test 3 passed");
    console.log("\n🎉 All tests passed!");
  }, 100);
}

// Uncomment to run tests:
// runTests();
