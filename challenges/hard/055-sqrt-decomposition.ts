/**
 * CHALLENGE: Square Root Decomposition for Range Queries
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - Square root decomposition
 * - Block-based queries
 * - Range sum/min/max
 * - Lazy updates
 *
 * Problem:
 * Implement sqrt decomposition for range sum queries and point updates.
 * Divide array into √n blocks for O(√n) queries and O(1) updates.
 *
 * Requirements:
 * - Build blocks of size √n
 * - update(index, value) updates element
 * - query(left, right) returns range sum
 * - O(√n) query, O(1) update
 *
 * Example:
 * const sq = new SqrtDecomposition([1, 2, 3, 4, 5, 6, 7, 8, 9]);
 * sq.query(2, 6);  // 18 (3+4+5+6)
 * sq.update(3, 10);
 * sq.query(2, 6);  // 24 (3+10+5+6)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class SqrtDecomposition { constructor(arr: ReadonlyArray<number>) {} query(left: number, right: number): number { return 0; } update(index: number, value: number): void {} }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const sq = new SqrtDecomposition([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  console.assert(sq.query(2, 6) === 18, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  sq.update(3, 10);
  console.assert(sq.query(2, 6) === 24, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
