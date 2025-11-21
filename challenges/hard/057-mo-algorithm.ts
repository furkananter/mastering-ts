/**
 * CHALLENGE: Mo's Algorithm for Range Queries
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Mo's algorithm (sqrt decomposition)
 * - Query reordering
 * - Block-based sorting
 * - Add/remove elements efficiently
 *
 * Problem:
 * Implement Mo's algorithm to answer offline range queries efficiently.
 * Sort queries by blocks and process with sliding window.
 *
 * Requirements:
 * - Sort queries by (L/√n, R)
 * - Process queries with sliding window
 * - add(index), remove(index) helpers
 * - Return answers in original query order
 *
 * Example:
 * const arr = [1, 1, 2, 1, 3, 3, 2, 1];
 * const queries = [[0, 4], [1, 3], [2, 7]];
 * moAlgorithm(arr, queries);  // [distinct counts for each range]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface Query { left: number; right: number; index: number; }
function moAlgorithm(arr: ReadonlyArray<number>, queries: ReadonlyArray<Omit<Query, 'index'>>): number[] { return []; }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const arr = [1, 1, 2, 1, 3, 3, 2, 1];
  const queries = [[0, 4], [1, 3], [2, 7]];

  const results = moAlgorithm(arr, queries);

  console.assert(results[0] === 3, "❌ Test 1 failed"); // 1,1,2,1,3 -> 3 distinct
  console.log("✅ Test 1 passed");

  console.assert(results[1] === 2, "❌ Test 2 failed"); // 1,2,1 -> 2 distinct
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
