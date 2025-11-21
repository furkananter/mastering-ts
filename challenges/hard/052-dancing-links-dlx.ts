/**
 * CHALLENGE: Dancing Links (DLX) for Exact Cover
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Dancing Links (DLX)
 * - Exact cover problem
 * - Doubly-linked circular lists
 * - Backtracking optimization
 *
 * Problem:
 * Implement Dancing Links (Algorithm X) to solve exact cover problem.
 * Use clever pointer manipulation for efficient backtracking.
 *
 * Requirements:
 * - Build DLX matrix from constraints
 * - solve() finds exact cover
 * - cover/uncover operations
 * - Return solution rows
 *
 * Example:
 * const matrix = [
 *   [1, 0, 0, 1, 0, 0, 1],
 *   [1, 0, 0, 1, 0, 0, 0],
 *   [0, 0, 0, 1, 1, 0, 1],
 * ];
 * const dlx = new DancingLinks(matrix);
 * dlx.solve();  // Returns solution rows
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const matrix = [
    [1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 1],
    [0, 0, 1, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 1]
  ];

  const dlx = new DancingLinks(matrix);
  const solution = dlx.solve();

  console.assert(solution !== null && solution.length > 0, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
