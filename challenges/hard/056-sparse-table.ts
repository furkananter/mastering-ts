/**
 * CHALLENGE: Sparse Table for RMQ (Range Minimum Query)
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - Sparse table
 * - Range minimum query
 * - Preprocessing with DP
 * - Overlapping ranges
 *
 * Problem:
 * Implement sparse table for O(1) range minimum queries on static array.
 * Use DP to precompute all power-of-2 ranges.
 *
 * Requirements:
 * - Build sparse table with O(n log n) preprocessing
 * - query(left, right) returns minimum in O(1)
 * - Immutable array (no updates)
 * - Handle overlapping ranges correctly
 *
 * Example:
 * const st = new SparseTable([3, 1, 4, 1, 5, 9, 2, 6]);
 * st.query(2, 6);  // 1
 * st.query(0, 7);  // 1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class SparseTable { private table: number[][]; constructor(arr: ReadonlyArray<number>) { this.table = []; } query(left: number, right: number): number { return 0; } }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const st = new SparseTable([3, 1, 4, 1, 5, 9, 2, 6]);

  console.assert(st.query(2, 6) === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(st.query(0, 7) === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(st.query(5, 7) === 2, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
