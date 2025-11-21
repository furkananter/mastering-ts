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

type Point = readonly [x: number, y: number];

interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

class QuadTree {
  private boundary: Rectangle;
  private capacity: number;
  private points: Point[];
  private divided: boolean;
  private northeast: QuadTree | null;
  private northwest: QuadTree | null;
  private southeast: QuadTree | null;
  private southwest: QuadTree | null;

  constructor(x: number, y: number, width: number, height: number, capacity: number) {
    this.boundary = { x, y, width, height };
    this.capacity = capacity;
    this.points = [];
    this.divided = false;
    this.northeast = null;
    this.northwest = null;
    this.southeast = null;
    this.southwest = null;
  }

  insert(x: number, y: number): boolean {
    // Implementation here
    return false;
  }

  query(x1: number, y1: number, x2: number, y2: number): Point[] {
    // Return points in rectangle
    return [];
  }

  private subdivide(): void {
    // Split into 4 quadrants
  }
}

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
