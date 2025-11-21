/**
 * CHALLENGE: Fenwick Tree (Binary Indexed Tree)
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - Binary Indexed Tree (BIT)
 * - Fenwick Tree structure
 * - Prefix sum queries
 * - Bit manipulation
 *
 * Problem:
 * Implement Fenwick Tree for efficient range sum queries and point updates.
 * Support: update(index, delta), query(index) for sum[0...index].
 *
 * Requirements:
 * - Build from array
 * - update(i, delta) adds delta to arr[i]
 * - query(i) returns sum of arr[0...i]
 * - O(log n) for both operations
 *
 * Example:
 * const ft = new FenwickTree([3, 2, -1, 6, 5, 4, -3, 3]);
 * ft.query(4);       // 15 (sum of first 5 elements)
 * ft.update(3, 2);   // add 2 to index 3
 * ft.query(4);       // 17
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class FenwickTree {
  private tree: number[];
  private n: number;

  constructor(arr: ReadonlyArray<number>) {
    this.n = arr.length;
    this.tree = new Array(this.n + 1).fill(0);
    // Build tree
  }

  update(index: number, delta: number): void {
    // Implementation here
  }

  query(index: number): number {
    // Implementation here
    return 0;
  }

  private lsb(x: number): number {
    return x & -x;
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const ft = new FenwickTree([3, 2, -1, 6, 5, 4, -3, 3]);

  console.assert(ft.query(4) === 15, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  ft.update(3, 2);
  console.assert(ft.query(4) === 17, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(ft.query(7) === 21, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
