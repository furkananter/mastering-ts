/**
 * CHALLENGE: Merge Overlapping Intervals
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Interval problems
 * - Sorting
 * - Greedy algorithm
 * - Array manipulation
 *
 * Problem:
 * Given intervals [start, end], merge all overlapping intervals.
 *
 * Requirements:
 * - Sort intervals by start time
 * - Merge overlapping intervals
 * - Return merged intervals
 * - Non-overlapping intervals stay separate
 *
 * Example:
 * mergeIntervals([[1,3], [2,6], [8,10], [15,18]]);
 * // [[1,6], [8,10], [15,18]]
 * mergeIntervals([[1,4], [4,5]]);
 * // [[1,5]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type Interval = [number, number];

function mergeIntervals(intervals: Interval[]): Interval[] {
  // TODO: Implement interval merging
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = mergeIntervals([[1,3], [2,6], [8,10], [15,18]]);
  console.assert(JSON.stringify(result1) === JSON.stringify([[1,6], [8,10], [15,18]]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = mergeIntervals([[1,4], [4,5]]);
  console.assert(JSON.stringify(result2) === JSON.stringify([[1,5]]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = mergeIntervals([[1,4], [0,4]]);
  console.assert(JSON.stringify(result3) === JSON.stringify([[0,4]]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
