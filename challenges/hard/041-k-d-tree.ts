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

type Point = readonly number[];

interface KDNode {
  point: Point;
  left: KDNode | null;
  right: KDNode | null;
}

class KDTree {
  private root: KDNode | null;
  private k: number;

  constructor(points: ReadonlyArray<Point>, k: number) {
    this.k = k;
    this.root = this.buildTree([...points], 0);
  }

  findNearest(target: Point): Point | null {
    // Implementation here
    return null;
  }

  rangeQuery(min: Point, max: Point): Point[] {
    // Implementation here
    return [];
  }

  private buildTree(points: Point[], depth: number): KDNode | null {
    // Recursively build k-d tree
    return null;
  }

  private distance(p1: Point, p2: Point): number {
    return Math.sqrt(p1.reduce((sum, val, i) => sum + (val - p2[i]) ** 2, 0));
  }
}

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
