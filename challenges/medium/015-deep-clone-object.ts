/**
 * CHALLENGE: Deep Clone Object
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Recursion
 * - Object/Array detection
 * - Deep vs shallow copy
 * - Nested structures
 *
 * Problem:
 * Implement a deep clone function that recursively copies
 * all nested objects and arrays.
 *
 * Requirements:
 * - Clone all nested levels
 * - Handle objects and arrays
 * - Preserve types (Array, Object)
 * - No shared references
 *
 * Example:
 * const obj = {a: 1, b: {c: 2, d: [3, 4]}};
 * const clone = deepClone(obj);
 * clone.b.d.push(5);
 * console.log(obj.b.d);  // [3, 4] (unchanged)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const obj = {a: 1, b: {c: 2, d: [3, 4]}};
  const clone = deepClone(obj);

  clone.b.d.push(5);
  console.assert(obj.b.d.length === 2, "❌ Test 1 failed: original should be unchanged");
  console.log("✅ Test 1 passed");

  console.assert(clone.b.d.length === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(clone.b.c === 2, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
