/**
 * CHALLENGE: A* Pathfinding Algorithm
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - A* algorithm
 * - Heuristic search
 * - Priority queue
 * - Grid pathfinding
 *
 * Problem:
 * Implement A* pathfinding on 2D grid. Find shortest path from start to goal
 * avoiding obstacles. Use Manhattan distance as heuristic.
 *
 * Requirements:
 * - Grid: 0=walkable, 1=obstacle
 * - Use f(n) = g(n) + h(n) where h=Manhattan distance
 * - Return path as array of [row, col] or null if no path
 * - 4-directional movement
 *
 * Example:
 * const grid = [
 *   [0, 0, 0],
 *   [0, 1, 0],
 *   [0, 0, 0]
 * ];
 * aStar(grid, [0,0], [2,2]);  // [[0,0], [0,1], [0,2], [1,2], [2,2]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type Position = readonly [row: number, col: number];
type Grid = ReadonlyArray<ReadonlyArray<number>>;
type Path = Position[] | null;

interface AStarNode {
  pos: Position;
  g: number; // Cost from start
  h: number; // Heuristic (Manhattan distance)
  f: number; // g + h
  parent: Position | null;
}

function manhattanDistance(a: Position, b: Position): number {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function aStar(grid: Grid, start: Position, goal: Position): Path {
  // Implementation here
  return null;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const grid1 = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  const result1 = aStar(grid1, [0, 0], [2, 2]);
  console.assert(result1 !== null && result1.length > 0, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const grid2 = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  const result2 = aStar(grid2, [0, 0], [0, 2]);
  console.assert(result2 === null, "❌ Test 2 failed (should be no path)");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
