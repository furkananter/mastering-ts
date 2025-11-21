/**
 * CHALLENGE: Curry Function (Two Arguments)
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Currying concept
 * - Closures
 * - Partial application
 *
 * Problem:
 * Create a curry function that converts a two-argument function
 * into a curried version that can be called with one argument at a time.
 *
 * Requirements:
 * - curry(fn) returns a curried version
 * - Can call as fn(a)(b) or fn(a, b)
 * - Works with two arguments only
 *
 * Example:
 * const add = (a, b) => a + b;
 * const curriedAdd = curry(add);
 * curriedAdd(2)(3);    // 5
 * curriedAdd(2, 3);    // 5
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function curry<A, B, R>(fn: (a: A, b: B) => R): (a: A, b?: B) => R | ((b: B) => R) {
  return ((a: A, b?: B) => {}) as any;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const add = (a: number, b: number) => a + b;
  const curriedAdd = curry(add);

  console.assert(curriedAdd(2)(3) === 5, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(curriedAdd(2, 3) === 5, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const multiply = (a: number, b: number) => a * b;
  const curriedMultiply = curry(multiply);
  console.assert(curriedMultiply(4)(5) === 20, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
