/**
 * CHALLENGE: Map Object Values
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Object.entries()
 * - Array map
 * - Object.fromEntries()
 *
 * Problem:
 * Write a function that maps over an object's values, transforming them
 * with a provided function while keeping the keys unchanged.
 *
 * Requirements:
 * - Transform only values
 * - Keep original keys
 * - Return new object
 *
 * Example:
 * mapValues({a: 1, b: 2}, (v) => v * 2);  // {a: 2, b: 4}
 * mapValues({x: 5, y: 10}, (v) => v + 1); // {x: 6, y: 11}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function mapValues<T extends Record<string, any>, R>(obj: T, fn: (value: T[keyof T]) => R): Record<keyof T, R> {
  return {} as Record<keyof T, R>;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = mapValues({a: 1, b: 2}, (v) => v * 2);
  console.assert(JSON.stringify(result1) === JSON.stringify({a: 2, b: 4}), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = mapValues({x: 5, y: 10}, (v) => v + 1);
  console.assert(JSON.stringify(result2) === JSON.stringify({x: 6, y: 11}), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
