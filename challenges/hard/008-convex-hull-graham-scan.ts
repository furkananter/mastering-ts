/**
 * CHALLENGE: Convex Hull - Graham Scan Algorithm
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Computational Geometry
 * - Graham Scan algorithm
 * - Cross product for orientation
 * - Polar angle sorting
 *
 * Problem:
 * Find convex hull of set of 2D points using Graham Scan.
 * Return points in counter-clockwise order starting from leftmost point.
 *
 * Requirements:
 * - Use Graham Scan algorithm
 * - Sort by polar angle from anchor point
 * - Use cross product for left turn detection
 * - Return hull points in CCW order
 *
 * Example:
 * convexHull([[0,0], [1,1], [2,2], [2,0], [0,2]]);
 * // [[0,0], [2,0], [2,2], [0,2]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = convexHull([[0,0], [1,1], [2,2], [2,0], [0,2]]);
  console.assert(result1.length === 4, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = convexHull([[0,0], [1,0], [0,1]]);
  console.assert(result2.length === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
