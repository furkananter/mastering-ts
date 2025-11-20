/**
 * CHALLENGE: Generate Permutations
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Backtracking
 * - Recursion
 * - Permutation algorithm
 * - Array manipulation
 *
 * Problem:
 * Generate all permutations of an array of distinct elements.
 * Use backtracking/recursion.
 *
 * Requirements:
 * - Generate all possible orderings
 * - No duplicates in input
 * - Return array of arrays
 * - Use backtracking
 *
 * Example:
 * permutations([1, 2, 3]);
 * // [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 * permutations([1, 2]);
 * // [[1, 2], [2, 1]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = permutations([1, 2]);
  console.assert(result1.length === 2, "❌ Test 1 failed: should have 2 permutations");
  console.log("✅ Test 1 passed");

  const result2 = permutations([1, 2, 3]);
  console.assert(result2.length === 6, "❌ Test 2 failed: should have 6 permutations");
  console.log("✅ Test 2 passed");

  const result3 = permutations([1]);
  console.assert(JSON.stringify(result3) === JSON.stringify([[1]]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
