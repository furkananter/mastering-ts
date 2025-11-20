/**
 * CHALLENGE: Filter Object by Condition
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Object.entries()
 * - Array filter
 * - Object.fromEntries()
 *
 * Problem:
 * Write a function that filters an object's properties based on a predicate function.
 * The predicate receives [key, value] pairs.
 *
 * Requirements:
 * - Filter properties using predicate
 * - Return new object with passing properties
 * - Don't modify original
 *
 * Example:
 * const obj = {a: 1, b: 2, c: 3, d: 4};
 * filterObject(obj, ([key, val]) => val > 2);  // {c: 3, d: 4}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const obj = {a: 1, b: 2, c: 3, d: 4};
  const result1 = filterObject(obj, ([key, val]) => val > 2);
  console.assert(JSON.stringify(result1) === JSON.stringify({c: 3, d: 4}), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = filterObject({x: 10, y: 5, z: 15}, ([k, v]) => v >= 10);
  console.assert(JSON.stringify(result2) === JSON.stringify({x: 10, z: 15}), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
