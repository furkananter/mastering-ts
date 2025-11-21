/**
 * CHALLENGE: Partial Application
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Partial application concept
 * - Closures
 * - Rest parameters
 *
 * Problem:
 * Create a partial function that takes a function and some arguments,
 * and returns a new function that when called, applies the remaining arguments.
 *
 * Requirements:
 * - Accept function and initial arguments
 * - Return function accepting remaining arguments
 * - Combine both sets of arguments
 *
 * Example:
 * const greet = (greeting, name) => `${greeting}, ${name}!`;
 * const sayHello = partial(greet, 'Hello');
 * sayHello('Alice');    // "Hello, Alice!"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function partial<T extends any[], U extends any[], R>(fn: (...args: [...T, ...U]) => R, ...initialArgs: T): (...args: U) => R {
  return (...args: U) => fn(...initialArgs, ...args);
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const greet = (greeting: string, name: string) => `${greeting}, ${name}!`;
  const sayHello = partial(greet, 'Hello');

  console.assert(sayHello('Alice') === 'Hello, Alice!', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const add = (a: number, b: number, c: number) => a + b + c;
  const addFive = partial(add, 5);
  console.assert(addFive(3, 2) === 10, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
