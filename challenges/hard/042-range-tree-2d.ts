/**
 * CHALLENGE: 2D Range Tree for Orthogonal Range Queries
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Range tree
 * - Fractional cascading
 * - 2D range queries
 * - Nested data structures
 *
 * Problem:
 * Implement 2D range tree for efficient orthogonal range queries.
 * Primary tree on x-coordinate, secondary trees on y-coordinate.
 *
 * Requirements:
 * - Build 2D range tree
 * - query(x1, y1, x2, y2) returns points in rectangle
 * - O(log²n + k) query time (k=output)
 * - O(n log n) space
 *
 * Example:
 * const points = [[1, 5], [2, 3], [3, 7], [6, 2], [8, 6]];
 * const rt = new RangeTree2D(points);
 * rt.query(2, 2, 6, 7);  // [[2,3], [3,7], [6,2]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type Point2D = readonly [x: number, y: number];

interface RangeNode {
  point: Point2D;
  left: RangeNode | null;
  right: RangeNode | null;
  yTree: RangeNode | null; // Secondary tree on y-coordinate
}

class RangeTree2D {
  private root: RangeNode | null;

  constructor(points: ReadonlyArray<Point2D>) {
    this.root = this.buildTree([...points].sort((a, b) => a[0] - b[0]));
  }

  query(x1: number, y1: number, x2: number, y2: number): Point2D[] {
    // Implementation here
    return [];
  }

  private buildTree(points: Point2D[]): RangeNode | null {
    // Build range tree with nested structure
    return null;
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const points = [[1, 5], [2, 3], [3, 7], [6, 2], [8, 6]];
  const rt = new RangeTree2D(points);

  const result = rt.query(2, 2, 6, 7);
  console.assert(result.length === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = rt.query(0, 0, 10, 10);
  console.assert(result2.length === 5, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
