/**
 * CHALLENGE: Segment Tree - Range Sum Query
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Segment Tree data structure
 * - Binary tree representation
 * - Range queries
 * - Lazy propagation (optional)
 *
 * Problem:
 * Implement Segment Tree for range sum queries and point updates.
 * Support: build, query(left, right), update(index, value).
 *
 * Requirements:
 * - Build segment tree from array
 * - query(l, r) returns sum of arr[l...r]
 * - update(i, val) updates arr[i] = val
 * - O(log n) query and update time
 *
 * Example:
 * const st = new SegmentTree([1, 3, 5, 7, 9, 11]);
 * st.query(1, 3);    // 15 (3+5+7)
 * st.update(1, 10);
 * st.query(1, 3);    // 22 (10+5+7)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type SegmentTreeNode = number;

class SegmentTree {
  private tree: SegmentTreeNode[];
  private n: number;
  private arr: number[];

  constructor(arr: ReadonlyArray<number>) {
    this.n = arr.length;
    this.arr = [...arr];
    this.tree = new Array(4 * this.n).fill(0);
    // Build tree
  }

  query(left: number, right: number): number {
    // Implementation here
    return 0;
  }

  update(index: number, value: number): void {
    // Implementation here
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const st = new SegmentTree([1, 3, 5, 7, 9, 11]);

  console.assert(st.query(1, 3) === 15, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  st.update(1, 10);
  console.assert(st.query(1, 3) === 22, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(st.query(0, 5) === 42, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
