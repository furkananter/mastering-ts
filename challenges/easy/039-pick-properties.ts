/**
 * CHALLENGE: Pick Properties from Object
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Object property access
 * - Array iteration
 * - Creating new objects
 *
 * Problem:
 * Write a function that creates a new object with only the specified properties
 * from the original object.
 *
 * Requirements:
 * - Return new object with only picked keys
 * - Ignore keys that don't exist
 * - Don't modify original
 *
 * Example:
 * pick({a: 1, b: 2, c: 3}, ['a', 'c']);      // {a: 1, c: 3}
 * pick({name: 'Alice', age: 30}, ['name']);  // {name: 'Alice'}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return {} as Pick<T, K>;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = pick({ a: 1, b: 2, c: 3 }, ['a', 'c']);
  console.assert(JSON.stringify(result1) === JSON.stringify({ a: 1, c: 3 }), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = pick({ name: 'Alice', age: 30 }, ['name']);
  console.assert(JSON.stringify(result2) === JSON.stringify({ name: 'Alice' }), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = pick({ x: 1 }, ['y']);
  console.assert(JSON.stringify(result3) === JSON.stringify({}), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
