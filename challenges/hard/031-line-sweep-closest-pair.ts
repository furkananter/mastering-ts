/**
 * CHALLENGE: Closest Pair of Points (Line Sweep)
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Computational Geometry
 * - Line sweep algorithm
 * - Divide and conquer
 * - Distance computation
 *
 * Problem:
 * Find closest pair of points in 2D plane using line sweep or divide-and-conquer.
 * Achieve O(n log n) time complexity.
 *
 * Requirements:
 * - Input: array of [x, y] points
 * - Return minimum distance between any two points
 * - O(n log n) time complexity
 * - Handle duplicate points
 *
 * Example:
 * closestPair([[0, 0], [3, 4], [1, 1], [7, 1]]);  // 1.414... (between [0,0] and [1,1])
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const dist1 = closestPair([[0, 0], [3, 4], [1, 1], [7, 1]]);
  console.assert(Math.abs(dist1 - 1.414) < 0.01, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const dist2 = closestPair([[0, 0], [1, 0], [2, 0]]);
  console.assert(dist2 === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
