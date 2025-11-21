/**
 * CHALLENGE: Unzip Arrays
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Array reduce
 * - Destructuring
 * - Array transformation
 *
 * Problem:
 * Write a function that "unzips" an array of pairs into two separate arrays.
 * This is the reverse of the zip operation.
 *
 * Requirements:
 * - Split pairs into two arrays
 * - First elements go to first array
 * - Second elements go to second array
 *
 * Example:
 * unzip([[1, 'a'], [2, 'b'], [3, 'c']]);    // [[1, 2, 3], ['a', 'b', 'c']]
 * unzip([[1, 'x']]);                        // [[1], ['x']]
 * unzip([]);                                // [[], []]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function unzip<T, U>(arr: [T, U][]): [T[], U[]] {
  return [[], []];
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = unzip([[1, 'a'], [2, 'b'], [3, 'c']]);
  console.assert(JSON.stringify(result1) === JSON.stringify([[1, 2, 3], ['a', 'b', 'c']]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = unzip([[1, 'x']]);
  console.assert(JSON.stringify(result2) === JSON.stringify([[1], ['x']]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = unzip([]);
  console.assert(JSON.stringify(result3) === JSON.stringify([[], []]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
