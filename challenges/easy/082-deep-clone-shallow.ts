/**
 * CHALLENGE: Shallow Clone Object
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Object spread operator
 * - Object.assign()
 * - Shallow vs deep copy
 *
 * Problem:
 * Write a function that creates a shallow clone of an object.
 * This means copying only the first level of properties.
 *
 * Requirements:
 * - Create new object with same properties
 * - Shallow copy only (nested objects share reference)
 * - Use spread or Object.assign
 *
 * Example:
 * const obj = {a: 1, b: 2};
 * const clone = shallowClone(obj);
 * clone.a = 10;
 * console.log(obj.a);    // 1 (original unchanged)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const obj = {a: 1, b: 2, c: 3};
  const clone = shallowClone(obj);

  clone.a = 10;
  console.assert(obj.a === 1, "❌ Test 1 failed: original should be unchanged");
  console.assert(clone.a === 10, "❌ Test 1 failed: clone should be changed");
  console.log("✅ Test 1 passed");

  console.assert(clone.b === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
