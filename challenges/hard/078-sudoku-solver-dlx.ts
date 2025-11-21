/**
 * CHALLENGE: Sudoku Solver using Dancing Links
 *
 * Difficulty: Hard
 * Estimated Time: 45 minutes
 *
 * Topics to know:
 * - Sudoku as exact cover
 * - Dancing Links (DLX)
 * - Constraint modeling
 * - Backtracking optimization
 *
 * Problem:
 * Solve Sudoku using Dancing Links. Model as exact cover:
 * row-column, row-number, column-number, box-number constraints.
 *
 * Requirements:
 * - Convert Sudoku to exact cover matrix
 * - Use DLX to solve
 * - Handle given clues
 * - Return solved board or null
 *
 * Example:
 * const board = [
 *   [5,3,0,0,7,0,0,0,0],
 *   [6,0,0,1,9,5,0,0,0],
 *   // ... (0 = empty)
 * ];
 * solveSudoku(board);  // Filled board
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function solveSudoku(board: number[][]): boolean { return false; }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const board = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
  ];

  const solved = solveSudoku(board);
  console.assert(solved !== null && solved[0][2] !== 0, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
