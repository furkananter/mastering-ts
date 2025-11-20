/**
 * CHALLENGE: N-Queens Problem
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Backtracking
 * - Recursion
 * - Constraint satisfaction
 * - Board representation
 *
 * Problem:
 * Place n queens on an n×n chessboard so that no two queens attack each other.
 * Return the number of distinct solutions.
 *
 * Requirements:
 * - Use backtracking
 * - Check row, column, diagonal conflicts
 * - Count all valid solutions
 * - No two queens on same row/col/diagonal
 *
 * Example:
 * nQueens(4);  // 2 (two valid solutions exist)
 * nQueens(8);  // 92
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(nQueens(4) === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(nQueens(1) === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(nQueens(8) === 92, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
