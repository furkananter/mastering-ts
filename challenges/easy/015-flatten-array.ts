/**
 * CHALLENGE: Flatten Array (One Level)
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Array methods (flat or concat)
 * - Spread operator
 * - Nested arrays
 *
 * Problem:
 * Write a function that flattens an array by one level.
 * Only flatten the first level of nesting.
 *
 * Requirements:
 * - Flatten one level deep only
 * - Preserve order of elements
 * - Handle empty arrays
 *
 * Example:
 * flattenOne([1, [2, 3], 4]);              // [1, 2, 3, 4]
 * flattenOne([[1, 2], [3, 4]]);            // [1, 2, 3, 4]
 * flattenOne([1, [2, [3, 4]]]);            // [1, 2, [3, 4]]
 * flattenOne([]);                          // []
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function flattenOne<T>(arr: (T | T[])[]): T[] {
  return [];
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = flattenOne([1, [2, 3], 4]);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 2, 3, 4]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = flattenOne([[1, 2], [3, 4]]);
  console.assert(JSON.stringify(result2) === JSON.stringify([1, 2, 3, 4]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = flattenOne([1, [2, [3, 4]]]);
  console.assert(JSON.stringify(result3) === JSON.stringify([1, 2, [3, 4]]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  const result4 = flattenOne([]);
  console.assert(JSON.stringify(result4) === JSON.stringify([]), "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
