/**
 * CHALLENGE: k-d Tree for Multidimensional Search
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - k-dimensional trees
 * - Space partitioning
 * - Nearest neighbor search
 * - Cyclic dimension splitting
 *
 * Problem:
 * Implement k-d tree for efficient multidimensional point queries.
 * Split by different dimensions at each level (cyclic).
 *
 * Requirements:
 * - Build k-d tree from points
 * - findNearest(point) returns nearest point
 * - rangeQuery(bounds) returns points in range
 * - Handle arbitrary dimensions
 *
 * Example:
 * const points = [[2,3], [5,4], [9,6], [4,7], [8,1]];
 * const kd = new KDTree(points, 2);  // 2D
 * kd.findNearest([9, 2]);  // [8, 1]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const points = [[2,3], [5,4], [9,6], [4,7], [8,1]];
  const kd = new KDTree(points, 2);

  const nearest = kd.findNearest([9, 2]);
  console.assert(JSON.stringify(nearest) === JSON.stringify([8, 1]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const rangeResult = kd.rangeQuery([4, 3], [9, 7]);
  console.assert(rangeResult.length >= 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
