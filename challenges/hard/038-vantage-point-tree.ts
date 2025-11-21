/**
 * CHALLENGE: VP-Tree (Vantage Point Tree) for Nearest Neighbor
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Metric trees
 * - Nearest neighbor search
 * - Distance-based partitioning
 * - Space partitioning
 *
 * Problem:
 * Implement VP-tree for efficient nearest neighbor search in metric spaces.
 * Use median distance to partition space.
 *
 * Requirements:
 * - Build VP-tree from points
 * - findNearest(point) returns closest point
 * - Use distance function (e.g., Euclidean)
 * - Better than linear search
 *
 * Example:
 * const points = [[0, 0], [1, 1], [2, 2], [10, 10]];
 * const vp = new VPTree(points);
 * vp.findNearest([0.5, 0.5]);  // [1, 1]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type Point = readonly number[];

interface VPNode {
  point: Point;
  threshold: number;
  left: VPNode | null;
  right: VPNode | null;
}

class VPTree {
  private root: VPNode | null;

  constructor(points: ReadonlyArray<Point>) {
    this.root = this.buildTree([...points]);
  }

  findNearest(target: Point): Point | null {
    // Implementation here
    return null;
  }

  private buildTree(points: Point[]): VPNode | null {
    // Recursively build VP-tree
    return null;
  }

  private distance(p1: Point, p2: Point): number {
    // Euclidean distance
    return Math.sqrt(
      p1.reduce((sum, val, i) => sum + (val - p2[i]) ** 2, 0)
    );
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const points = [[0, 0], [1, 1], [2, 2], [10, 10]];
  const vp = new VPTree(points);

  const nearest = vp.findNearest([0.5, 0.5]);
  console.assert(JSON.stringify(nearest) === JSON.stringify([1, 1]) || JSON.stringify(nearest) === JSON.stringify([0, 0]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const nearest2 = vp.findNearest([9, 9]);
  console.assert(JSON.stringify(nearest2) === JSON.stringify([10, 10]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
