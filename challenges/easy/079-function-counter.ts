/**
 * CHALLENGE: Function Call Counter
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Closures
 * - State tracking
 * - Higher-order functions
 *
 * Problem:
 * Create a function that wraps another function and counts how many
 * times it has been called. Return an object with the wrapped function
 * and a method to get the count.
 *
 * Requirements:
 * - Track call count
 * - Execute original function
 * - Provide getCount() method
 *
 * Example:
 * const { fn, getCount } = createCounter(() => 'hello');
 * fn();         // 'hello'
 * fn();         // 'hello'
 * getCount();   // 2
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const { fn, getCount } = createCounter(() => 'hello');

  console.assert(fn() === 'hello', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  fn();
  console.assert(getCount() === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  fn();
  console.assert(getCount() === 3, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
