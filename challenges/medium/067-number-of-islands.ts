/**
 * CHALLENGE: Number of Islands
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - 2D grid traversal
 * - DFS or BFS
 * - Connected components
 * - Marking visited
 *
 * Problem:
 * Count number of islands in 2D grid.
 * Island is group of '1's connected horizontally/vertically.
 * '0' represents water.
 *
 * Requirements:
 * - Use DFS or BFS to explore islands
 * - Mark visited cells
 * - Count distinct islands
 * - 4-directional connectivity
 *
 * Example:
 * numIslands([
 *   ['1','1','0','0','0'],
 *   ['1','1','0','0','0'],
 *   ['0','0','1','0','0'],
 *   ['0','0','0','1','1']
 * ]);  // 3
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
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
  ];

  console.assert(numIslands(grid1) === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const grid2 = [
    ['1','1','1'],
    ['0','1','0'],
    ['1','1','1']
  ];

  console.assert(numIslands(grid2) === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
