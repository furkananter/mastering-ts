/**
 * CHALLENGE: Omit Properties from Object
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Object.keys() or Object.entries()
 * - Array filter
 * - Object destructuring
 *
 * Problem:
 * Write a function that creates a new object excluding specified properties.
 *
 * Requirements:
 * - Return new object without omitted keys
 * - Keep all other properties
 * - Don't modify original
 *
 * Example:
 * omit({a: 1, b: 2, c: 3}, ['b']);               // {a: 1, c: 3}
 * omit({name: 'Bob', age: 25, city: 'NY'}, ['age']);  // {name: 'Bob', city: 'NY'}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  return {} as Omit<T, K>;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = omit({a: 1, b: 2, c: 3}, ['b']);
  console.assert(JSON.stringify(result1) === JSON.stringify({a: 1, c: 3}), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = omit({name: 'Bob', age: 25, city: 'NY'}, ['age']);
  console.assert(JSON.stringify(result2) === JSON.stringify({name: 'Bob', city: 'NY'}), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
