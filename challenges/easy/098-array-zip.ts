/**
 * CHALLENGE: Zip Arrays
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Array map
 * - Multiple array iteration
 * - Index-based access
 *
 * Problem:
 * Write a function that "zips" two arrays together, creating pairs.
 * Stop when the shorter array ends.
 *
 * Requirements:
 * - Combine elements at same index
 * - Return array of pairs (tuples)
 * - Length equals shorter array
 *
 * Example:
 * zip([1, 2, 3], ['a', 'b', 'c']);      // [[1, 'a'], [2, 'b'], [3, 'c']]
 * zip([1, 2], ['a', 'b', 'c']);         // [[1, 'a'], [2, 'b']]
 * zip([], [1, 2]);                      // []
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = zip([1, 2, 3], ['a', 'b', 'c']);
  console.assert(JSON.stringify(result1) === JSON.stringify([[1, 'a'], [2, 'b'], [3, 'c']]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = zip([1, 2], ['a', 'b', 'c']);
  console.assert(JSON.stringify(result2) === JSON.stringify([[1, 'a'], [2, 'b']]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = zip([], [1, 2]);
  console.assert(JSON.stringify(result3) === JSON.stringify([]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
