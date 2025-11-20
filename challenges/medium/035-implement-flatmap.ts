/**
 * CHALLENGE: Implement Array.flatMap
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Array methods
 * - Map + flatten combination
 * - Callback functions
 * - Higher-order functions
 *
 * Problem:
 * Implement flatMap: first maps each element using a mapping function,
 * then flattens the result by one level.
 *
 * Requirements:
 * - Apply mapping function to each element
 * - Flatten result by one level
 * - Return new array
 * - Don't use built-in flatMap
 *
 * Example:
 * flatMap([1, 2, 3], x => [x, x * 2]);     // [1, 2, 2, 4, 3, 6]
 * flatMap([1, 2], x => [[x]]);             // [[1], [2]] (only one level)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = flatMap([1, 2, 3], x => [x, x * 2]);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 2, 2, 4, 3, 6]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = flatMap([1, 2], x => [[x]]);
  console.assert(JSON.stringify(result2) === JSON.stringify([[1], [2]]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = flatMap(['hello', 'world'], s => s.split(''));
  console.assert(result3.length === 10, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
