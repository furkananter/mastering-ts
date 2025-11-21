/**
 * CHALLENGE: Quad Tree for 2D Space Partitioning
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Quad tree data structure
 * - 2D space partitioning
 * - Recursive subdivision
 * - Range queries
 *
 * Problem:
 * Implement quad tree for efficient 2D point storage and range queries.
 * Subdivide into 4 quadrants when node capacity exceeded.
 *
 * Requirements:
 * - insert(x, y) adds point
 * - query(x1, y1, x2, y2) returns points in rectangle
 * - Recursive subdivision (capacity limit)
 * - Handle boundary cases
 *
 * Example:
 * const qt = new QuadTree(0, 0, 100, 100, 4);  // bounds + capacity
 * qt.insert(10, 10); qt.insert(20, 20);
 * qt.query(5, 5, 15, 15);  // [[10, 10]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const qt = new QuadTree(0, 0, 100, 100, 4);
  qt.insert(10, 10);
  qt.insert(20, 20);
  qt.insert(50, 50);

  const result1 = qt.query(5, 5, 15, 15);
  console.assert(result1.length === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = qt.query(0, 0, 100, 100);
  console.assert(result2.length === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
