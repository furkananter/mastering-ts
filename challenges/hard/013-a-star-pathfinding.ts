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
