/**
 * CHALLENGE: Wavelet Tree for Range Queries
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Wavelet tree
 * - Range queries on arrays
 * - Binary tree structure
 * - Rank/select operations
 *
 * Problem:
 * Implement wavelet tree for efficient range queries on sequences.
 * Support: rank(c, i) = count of c in [0...i], access(i), rangeCount(l, r, c).
 *
 * Requirements:
 * - Build wavelet tree from sequence
 * - access(i) returns element at index i
 * - rank(c, i) counts c in [0...i]
 * - rangeCount(l, r, c) counts c in [l...r]
 *
 * Example:
 * const wt = new WaveletTree([1, 2, 1, 3, 2, 1]);
 * wt.rank(1, 4);  // 2 (count of 1 in [0...4])
 * wt.rangeCount(1, 4, 2);  // 2 (count of 2 in [1...4])
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const wt = new WaveletTree([1, 2, 1, 3, 2, 1]);

  console.assert(wt.access(0) === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(wt.rank(1, 4) === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(wt.rangeCount(1, 4, 2) === 2, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
