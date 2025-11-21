/**
 * CHALLENGE: Interval Tree for Overlapping Intervals
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Interval tree data structure
 * - Augmented BST
 * - Interval overlap checking
 * - Max endpoint tracking
 *
 * Problem:
 * Implement interval tree to efficiently query overlapping intervals.
 * Store intervals [start, end] and support overlap queries.
 *
 * Requirements:
 * - insert(start, end) adds interval
 * - findOverlaps(start, end) returns all overlapping intervals
 * - Use augmented BST (store max endpoint)
 * - O(log n + k) query time (k=overlaps)
 *
 * Example:
 * const it = new IntervalTree();
 * it.insert(15, 20); it.insert(10, 30); it.insert(17, 19);
 * it.findOverlaps(14, 16);  // [[15,20], [10,30]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type Interval = readonly [start: number, end: number];

interface IntervalNode {
  interval: Interval;
  max: number; // Max endpoint in subtree
  left: IntervalNode | null;
  right: IntervalNode | null;
}

class IntervalTree {
  private root: IntervalNode | null;

  constructor() {
    this.root = null;
  }

  insert(start: number, end: number): void {
    // Implementation here
  }

  findOverlaps(start: number, end: number): Interval[] {
    // Implementation here
    return [];
  }

  private overlaps(interval1: Interval, interval2: Interval): boolean {
    const [s1, e1] = interval1;
    const [s2, e2] = interval2;
    return s1 <= e2 && s2 <= e1;
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const it = new IntervalTree();
  it.insert(15, 20);
  it.insert(10, 30);
  it.insert(17, 19);

  const result = it.findOverlaps(14, 16);
  console.assert(result.length >= 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = it.findOverlaps(5, 8);
  console.assert(result2.length === 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
