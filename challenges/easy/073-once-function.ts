/**
 * CHALLENGE: Once Function
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Higher-order functions
 * - Closures
 * - Function state tracking
 *
 * Problem:
 * Create a function that wraps another function and ensures it can
 * only be called once. Subsequent calls should return the result
 * of the first call.
 *
 * Requirements:
 * - Function executes only on first call
 * - Subsequent calls return cached result
 * - Use closure to track state
 *
 * Example:
 * const onceFunc = once(() => { return 5; });
 * onceFunc();    // 5 (executes)
 * onceFunc();    // 5 (returns cached)
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
  const onceFunc = once(() => {
    callCount++;
    return 5;
  });

  console.assert(onceFunc() === 5, "❌ Test 1 failed");
  console.assert(callCount === 1, "❌ Test 1 failed: should call once");
  console.log("✅ Test 1 passed");

  console.assert(onceFunc() === 5, "❌ Test 2 failed");
  console.assert(callCount === 1, "❌ Test 2 failed: should not call again");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
