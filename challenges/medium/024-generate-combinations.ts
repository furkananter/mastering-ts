/**
 * CHALLENGE: Generate Combinations
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Backtracking
 * - Recursion
 * - Combinations vs permutations
 * - Array manipulation
 *
 * Problem:
 * Generate all combinations of k numbers chosen from 1 to n.
 * Use backtracking.
 *
 * Requirements:
 * - Generate C(n, k) combinations
 * - Each combination in ascending order
 * - No duplicates
 * - Use backtracking
 *
 * Example:
 * combinations(4, 2);
 * // [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
 * combinations(3, 1);
 * // [[1], [2], [3]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function combinations(n: number, k: number): number[][] {
  // TODO: Implement combinations using backtracking
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = combinations(4, 2);
  console.assert(result1.length === 6, "❌ Test 1 failed: should have 6 combinations");
  console.log("✅ Test 1 passed");

  const result2 = combinations(3, 1);
  console.assert(result2.length === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = combinations(5, 3);
  console.assert(result3.length === 10, "❌ Test 3 failed: C(5,3) = 10");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
