/**
 * CHALLENGE: Implement Function.bind
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Function binding
 * - This context
 * - Closures
 * - Rest/spread parameters
 *
 * Problem:
 * Implement your own version of Function.prototype.bind.
 * It should create a bound function with a fixed 'this' value and
 * optionally preset arguments.
 *
 * Requirements:
 * - Return new function with bound 'this'
 * - Support partial application
 * - Preserve function behavior
 * - Combine bound and call-time arguments
 *
 * Example:
 * const obj = { x: 42 };
 * function fn(a, b) { return this.x + a + b; }
 * const bound = myBind(fn, obj, 1);
 * bound(2);  // 45 (42 + 1 + 2)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function myBind<T, A extends any[], R>(
  fn: (this: T, ...args: A) => R,
  thisArg: T,
  ...boundArgs: any[]
): (...args: any[]) => R {
  // TODO: Implement bind
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const obj = { x: 42 };
  function fn(a: number, b: number) { return this.x + a + b; }

  const bound = myBind(fn, obj, 1);
  console.assert(bound(2) === 45, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const bound2 = myBind(fn, obj);
  console.assert(bound2(10, 20) === 72, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
