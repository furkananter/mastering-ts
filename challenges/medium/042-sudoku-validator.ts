/**
 * CHALLENGE: Sudoku Board Validator
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - 2D array validation
 * - Set for uniqueness
 * - Grid partitioning
 * - Sudoku rules
 *
 * Problem:
 * Validate if a 9x9 Sudoku board is valid.
 * Each row, column, and 3x3 sub-box must contain digits 1-9 without repetition.
 * Empty cells are represented by 0.
 *
 * Requirements:
 * - Check all rows
 * - Check all columns
 * - Check all 3x3 boxes
 * - Ignore empty cells (0)
 *
 * Example:
 * const board = [
 *   [5,3,0,0,7,0,0,0,0],
 *   [6,0,0,1,9,5,0,0,0],
 *   ...
 * ];
 * isValidSudoku(board);  // true or false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const validBoard = [
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

  console.assert(isValidSudoku(validBoard) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const invalidBoard = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,5] // duplicate 5 in last column
  ];

  console.assert(isValidSudoku(invalidBoard) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
