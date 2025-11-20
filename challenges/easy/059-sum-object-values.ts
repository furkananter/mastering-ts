/**
 * CHALLENGE: Sum Object Values
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Object.values()
 * - Array reduce
 * - Type checking
 *
 * Problem:
 * Write a function that sums all numeric values in an object.
 * Ignore non-numeric values.
 *
 * Requirements:
 * - Sum only numeric values
 * - Ignore strings, booleans, etc.
 * - Return 0 for empty object
 *
 * Example:
 * sumObjectValues({a: 1, b: 2, c: 3});           // 6
 * sumObjectValues({x: 10, y: 'hello', z: 5});    // 15
 * sumObjectValues({});                           // 0
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(sumObjectValues({a: 1, b: 2, c: 3}) === 6, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(sumObjectValues({x: 10, y: 'hello', z: 5}) === 15, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(sumObjectValues({}) === 0, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
